import React from "react";
import { Container } from "./style";
import Slider from "react-slick";
import Item from "./Item";

const Our = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <div className="container">
        <div className="top">
          <div className="title">Bizning jamoamiz sizga tanishmi?</div>
          <div className="desc">
            Bizning agentlik mukammal tizimlashgan va deadlinelarga qattiq rioya
            qiladi jamoamiz azolari esa 5 yillik tajribaga ega masterlar
          </div>
        </div>
        <div className="slider">
          <Slider {...settings}>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default Our;
