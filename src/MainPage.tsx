import useFetch from './useFetch';

const MainPage = () => {
    const { photos } = useFetch()
  
    return (
        <ul>
        {photos.map((photo) => <li
        key={photo.id}>
          {photo.id}
        </li>)}
        </ul>
    );
};

export default MainPage;