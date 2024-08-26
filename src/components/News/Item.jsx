import React from "react";
import img from "../../assets/project.png";
import { NewsItem } from "./style";

const Item = () => {
  return (
    <NewsItem>
      <img src={img} alt="" />
      <div className="content">
        <div className="content__min">Brending</div>
        <div className="content__title">
          Brending: Nima va Nima uchun Kerak?
        </div>
        <div className="content__desc">
          Brendingning muhimligi va biznesingiz uchun nima sababdan kerakligini
          bilib oling.
        </div>
      </div>
    </NewsItem>
  );
};

export default Item;
