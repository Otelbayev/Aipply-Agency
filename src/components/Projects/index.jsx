import React from "react";
import { Container } from "./style";
import loading from "../../assets/loading.gif";
import img from "../../assets/project.png";
import img1 from "../../assets/project1.png";
import img2 from "../../assets/project2.png";
import img3 from "../../assets/project3.png";

const Projects = () => {
  return (
    <Container>
      <div className="title">Bizning ishlarimiz</div>
      <p className="desc">
        Bizni tanlashganlar bizdan hursand siz ham natijaga chiqishni istasangiz
        bizni tanlang
      </p>
      <div className="button">
        <button className="active-btn">
          <img src={loading} alt="" />
          Barchasini ko‘rish
        </button>
      </div>
      <div className="projects">
        <div className="projects--wrap">
          <div className="projects--wrap--item">
            <img src={img} alt="" className="projects--wrap--item--img" />
            <img src={img} alt="" className="projects--wrap--item--img" />
            <img src={img} alt="" className="projects--wrap--item--img" />
            <img src={img} alt="" className="projects--wrap--item--img" />
            <img src={img} alt="" className="projects--wrap--item--img" />
            <img src={img} alt="" className="projects--wrap--item--img" />
            <img src={img} alt="" className="projects--wrap--item--img" />
            <img src={img} alt="" className="projects--wrap--item--img" />
            <img src={img} alt="" className="projects--wrap--item--img" />
            <img src={img} alt="" className="projects--wrap--item--img" />
            <img src={img} alt="" className="projects--wrap--item--img" />
            <img src={img} alt="" className="projects--wrap--item--img" />
          </div>
          <div className="projects--wrap--item">
            <img src={img1} alt="" className="projects--wrap--item--img" />
            <img src={img1} alt="" className="projects--wrap--item--img" />
            <img src={img1} alt="" className="projects--wrap--item--img" />
            <img src={img1} alt="" className="projects--wrap--item--img" />
            <img src={img1} alt="" className="projects--wrap--item--img" />
            <img src={img1} alt="" className="projects--wrap--item--img" />
            <img src={img1} alt="" className="projects--wrap--item--img" />
            <img src={img1} alt="" className="projects--wrap--item--img" />
            <img src={img1} alt="" className="projects--wrap--item--img" />
            <img src={img1} alt="" className="projects--wrap--item--img" />
            <img src={img1} alt="" className="projects--wrap--item--img" />
            <img src={img1} alt="" className="projects--wrap--item--img" />
          </div>
        </div>
        <div className="projects--wrap">
          <div className="projects--wrap--item">
            <img src={img2} alt="" className="projects--wrap--item--img" />
            <img src={img2} alt="" className="projects--wrap--item--img" />
            <img src={img2} alt="" className="projects--wrap--item--img" />
            <img src={img2} alt="" className="projects--wrap--item--img" />
            <img src={img2} alt="" className="projects--wrap--item--img" />
            <img src={img2} alt="" className="projects--wrap--item--img" />
            <img src={img2} alt="" className="projects--wrap--item--img" />
            <img src={img2} alt="" className="projects--wrap--item--img" />
            <img src={img2} alt="" className="projects--wrap--item--img" />
            <img src={img2} alt="" className="projects--wrap--item--img" />
            <img src={img2} alt="" className="projects--wrap--item--img" />
            <img src={img2} alt="" className="projects--wrap--item--img" />
          </div>
          <div className="projects--wrap--item">
            <img src={img3} alt="" className="projects--wrap--item--img" />
            <img src={img3} alt="" className="projects--wrap--item--img" />
            <img src={img3} alt="" className="projects--wrap--item--img" />
            <img src={img3} alt="" className="projects--wrap--item--img" />
            <img src={img3} alt="" className="projects--wrap--item--img" />
            <img src={img3} alt="" className="projects--wrap--item--img" />
            <img src={img3} alt="" className="projects--wrap--item--img" />
            <img src={img3} alt="" className="projects--wrap--item--img" />
            <img src={img3} alt="" className="projects--wrap--item--img" />
            <img src={img3} alt="" className="projects--wrap--item--img" />
            <img src={img3} alt="" className="projects--wrap--item--img" />
            <img src={img3} alt="" className="projects--wrap--item--img" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
