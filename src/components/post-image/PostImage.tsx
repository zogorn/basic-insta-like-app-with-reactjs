import { useState } from "react";
import FileInput from "../File-input";

import "./PostImage.css";

const PostImage = () => {
  const filters = [
    {
      id: 1,
      name: "Vintage",
      img: "https://i.imgur.com/4rKVgAQ.png",
    },
    {
      id: 2,
      name: "Sepia",
      img: "https://i.imgur.com/4rKVgAQ.png",
      filter: "brightness(70%) contrast(150%) saturate(0%) brightness(150%)",
    },
    {
      id: 3,
      name: "Magenta Color Tint",
      img: "https://i.imgur.com/4rKVgAQ.png",
      filter:
        "hue-rotate(-270deg) sepia(55%) contrast(150%) saturate(300%) hue-rotate(270deg)",
    },
  ];

  const [imgUrl, setImgUrl] = useState("");
  const [filter, setFilter] = useState("");
  const [filterImgUrl, setFilterImgUrl] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [opacity, setOpacity] = useState(0);
  const fileChange = (file: any) => setImgUrl(file);

  const opacityChange = (e: any) => {
    const number = e.target.value;

    if (number > 100) setOpacity(1);
    else if (number < 0) setOpacity(0);
    else setOpacity(number / 100);
  };

  const addFilter = ({ backgroundColor, img, filter }: any) => {
    setBackgroundColor(backgroundColor);
    setFilterImgUrl(img);
    setFilter(filter);
  };

  return (
    <>
      <article className="Post">
        <header>
          <div className="Post-user">
            <div className="Post-user-nickname">
              <span>Upload Image</span>
            </div>
          </div>
        </header>
        <div className="Post-image">
          <div className="Post-image-bg">
            <div
              className="Post-image-top"
              style={{ opacity, backgroundColor, filter }}
            >
              <img src={filterImgUrl} alt="" />
            </div>
            <img alt="" src={imgUrl} />
          </div>
        </div>
        <div className="Post-caption">
          <FileInput onFileChange={fileChange} />
          <div className="filter-opacity">
            <label> Opacity</label>
            <input onChange={opacityChange} type="number" min={0} max={100} />
          </div>
        </div>
      </article>

      <div className="filters" style={filterStyles.general}>
        {filters.map((item) => (
          <div key={item.id} className="filter-wrap">
            <div
              className="filter-one"
              onClick={() => addFilter(item)}
              style={{
                ...filterStyles.one,
                backgroundImage: `url(${item.img})`,
                filter: item.filter ?? "none",
              }}
            ></div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

const filterStyles = {
  general: {
    display: "flex",
    justifyContent: "center",
  },
  one: {
    backgroundColor: "pink",
    width: "100px",
    height: "100px",
    marginLeft: "15px",
    marginRight: "15px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
};

export default PostImage;
