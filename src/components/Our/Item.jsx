import React from "react";
import { SliderItem } from "./style";
import user from "../../assets/user.png";

const Item = ({ title, desc, job, name }) => {
  return (
    <SliderItem>
      <div className="wrap">
        <div className="left">
          <div className="left__title">{title}</div>
          <div className="left__desc">{desc}</div>
          <div className="left__degree">{job}</div>
          <div className="left__name">{name}</div>
        </div>
        <img className="right" src={user} />
      </div>
    </SliderItem>
  );
};

export default Item;
