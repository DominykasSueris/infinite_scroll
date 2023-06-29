import useFetch from './useFetch';

const MainPage = () => {
    const { data } = useFetch()

    if (!data) return <h1>No data</h1>
  
    return (
        <ul>
        {data.photos.photo.map((p) => <li
        key={p.id}>
            <img src={`https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`}/>
        </li>)}
        </ul>
    );
};

export default MainPage;