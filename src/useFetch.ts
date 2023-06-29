import { useEffect, useState } from 'react';


export interface GetRecentResponse {
    photos: Photos,
    stat: string
}

export interface Photos {
    page: number,
    pages: number,
    perpage: number,
    photo: Photo[],
    total: number
}


export interface Photo {
    id: string,
    secret: string,
    server: string,
    title: string
  }

export const useFetch = () => {

const [data, setData] = useState<GetRecentResponse>();
const [loading, setLoading] = useState(true);
const [error, setError] = useState<boolean>(false);

const fetchData = async () => {
    setLoading(true)
    try {
    const result = await fetch("https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=c7004108902944c554b100474945d48b&format=json&nojsoncallback=1")
    const json = await result.json();
    setData(json)
    }
    catch (error) {
        setError(true)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {data, loading, error}
};

export default useFetch;