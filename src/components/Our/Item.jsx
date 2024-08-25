import React from "react";
import { SliderItem } from "./style";
import user from "../../assets/user.png";

const Item = () => {
  return (
    <SliderItem>
      <div className="left">
        <div className="left__title">
          15 yillik full stack senior dasturchi Aipply agencyda team lider
        </div>
        <div className="left__desc">
          Shu kunga qadara 500 ta loyihada qatnashgan va temir yo’llar
          universitetida suniy intellektlar bo’yida dissertatsiya yoqlagan
          o’zbekiston temir yo’llarini platformasini ishlab chiqishda tea, lider
          bo’lgan
        </div>
        <div className="left__degree">Full stack dasturchi</div>
        <div className="left__name">Adham Baxadirovich</div>
      </div>
      <img className="right" src={user} />
    </SliderItem>
  );
};

export default Item;
