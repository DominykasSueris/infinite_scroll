import { Photo } from "./useFetch";
import { useState } from "react";

interface Image {
  p: Photo;
}

const Image = ({ p }: Image) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  return (
    <>
      {isLoading && (
        <div className="spinner-border m-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <img
        onLoad={() => setIsLoading(false)}
        className={!isLoading ? "picture" : "hidden"}
        src={`https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`}
        alt={p.title}
      />
      {!isLoading && <span className="picture-title">{p.title}</span>}
    </>
  );
};

export default Image;