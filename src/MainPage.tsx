import useFetch from "./useFetch";

const MainPage = () => {
  const { data } = useFetch();

  if (!data) return <h1>No data</h1>;

  return (
    <div className="container">
      {data.photos.photo.map((p) => (
        <img
          className="col-3"
          key={p.id}
          src={`https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`}
          alt={p.title}
        />
      ))}
    </div>
  );
};

export default MainPage;
