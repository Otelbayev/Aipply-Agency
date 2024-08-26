import React from "react";
import { NewsItem } from "./style";

const Item = ({ img, min, title, desc }) => {
  return (
    <NewsItem>
      <img src={img} alt="" />
      <div className="content">
        <div className="content__min">{min}</div>
        <div className="content__title">{title}</div>
        <div className="content__desc">{desc}</div>
      </div>
    </NewsItem>
  );
};

export default Item;
