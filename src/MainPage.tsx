import useFetch from "./useFetch";
import "./MainPage.css";

const MainPage = () => {
  const { data } = useFetch();

  if (!data) return <h1>No data</h1>;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top h-3 d-flex justify-content-end">
        <span className="navbar-brand">Lorem Ipsum</span>
      </nav>
      <div className="container">
        {data.map((p, index) => (
          <img
            className="col-4"
            key={index}
            src={`https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`}
            alt={p.title}
          />
        ))}
      </div>
    </>
  );
};

export default MainPage;
