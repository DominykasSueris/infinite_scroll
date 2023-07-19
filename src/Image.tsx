import { Photo } from "./useFetch";
import { useState } from "react";

interface Image {
  p: Photo;
}

const Image = ({ p }: Image) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFullScreen, setFullScreen] = useState<boolean>(false);
  return (
    <div
      className={
        isFullScreen
          ? "picture-fullscreen"
          : "picture-container position-relative "
      }
    >
      {isLoading && (
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden"></span>
        </div>
      )}
      <img
        onClick={() => setFullScreen(!isFullScreen)}
        onLoad={() => setIsLoading(false)}
        className={!isLoading ? "picture" : "hidden"}
        src={`https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`}
        alt={p.title}
      />
      {!isLoading && <span className="picture-title">{p.title}</span>}
    </div>
  );
};

export default Image;
