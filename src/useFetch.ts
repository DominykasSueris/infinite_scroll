import { useEffect, useState } from 'react';

interface Photos {
    albumId : number,
    id: number,
    thumbnailUrl: string,
    title: string,
    url: string
  }

const useFetch = () => {
const [photos, setPhotos] = useState<Photos[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<boolean>(false);

const fetchData = async () => {
    setLoading(true)
    console.log("loading")
    try {
    const result = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    const json = await result.json();
    setPhotos(json)
    }
    catch (error) {
        setError(true)
        console.log(error, "error")
    }
    setLoading(false)
    console.log("loaded")
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {photos, loading, error}
};

export default useFetch;