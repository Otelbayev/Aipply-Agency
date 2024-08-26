import React from "react";
import { Container } from "./style";
import Slider from "react-slick";
import Item from "./Item";
import { useTranslation } from "react-i18next";

const Our = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      title: t("our.employee1.title"),
      desc: t("our.employee1.desc"),
      job: t("our.employee1.job"),
      name: t("our.employee1.name"),
    },
    {
      id: 2,
      title: t("our.employee1.title"),
      desc: t("our.employee1.desc"),
      job: t("our.employee1.job"),
      name: t("our.employee1.name"),
    },
  ];

  return (
    <Container>
      <div className="container">
        <div className="top">
          <div className="title">{t("our.title")}</div>
          <div className="desc">{t("our.desc")}</div>
        </div>
        <div className="slider">
          <Slider {...settings}>
            {data.map(({ id, title, desc, job, name }) => (
              <Item key={id} title={title} desc={desc} job={job} name={name} />
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default Our;
