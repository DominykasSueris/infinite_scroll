import { useEffect, useState } from "react";
export interface GetRecentResponse {
  photos: Photos;
  stat: string;
}
export interface Photos {
  page: number;
  pages: number;
  perpage: number;
  photo: Photo[];
  total: number;
}
export interface Photo {
  id: string;
  secret: string;
  server: string;
  title: string;
}

export const useFetch = () => {
  const [data, setData] = useState<Photo[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await fetch(
        `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=c7004108902944c554b100474945d48b&format=json&nojsoncallback=1&page=${page}&per_page=10`
      );
      const json = (await result.json()) as GetRecentResponse;

      setData((prevItems) => [...prevItems, ...json.photos.photo]);
      setPage((page) => page + 1);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = (e: any) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetch;
