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
          <Image p={p} key={index} />
        ))}
      </div>
    </>
  );
};

export default MainPage;
