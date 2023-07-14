import useFetch from "./useFetch";
import Image from "./Image";
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
          <div className="picture-container position-relative " key={index}>
            <Image p={p} />
          </div>
        ))}
      </div>
    </>
  );
};

export default MainPage;
