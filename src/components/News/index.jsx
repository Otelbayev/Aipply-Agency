import React from "react";
import { Container } from "./style";
import Item from "./Item";
import { useTranslation } from "react-i18next";
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import s4 from "../../assets/s4.png";
import s5 from "../../assets/s5.png";
import s6 from "../../assets/s6.png";

const News = () => {
  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      img: s1,
      min: t("news.min"),
      title: t("news.title"),
      desc: t("news.desc"),
    },
    {
      id: 2,
      img: s2,
      min: t("news.min"),
      title: t("news.title"),
      desc: t("news.desc"),
    },
    {
      id: 3,
      img: s3,
      min: t("news.min"),
      title: t("news.title"),
      desc: t("news.desc"),
    },
    {
      id: 4,
      img: s4,
      min: t("news.min"),
      title: t("news.title"),
      desc: t("news.desc"),
    },
    {
      id: 5,
      img: s5,
      min: t("news.min"),
      title: t("news.title"),
      desc: t("news.desc"),
    },
    {
      id: 6,
      img: s6,
      min: t("news.min"),
      title: t("news.title"),
      desc: t("news.desc"),
    },
  ];

  return (
    <Container>
      <div className="container">
        <div className="min">{t("news.min")}</div>
        <div className="title">{t("news.title")}</div>
        <div className="news">
          {data.map((e) => (
            <Item img={e.img} min={e.min} title={e.title} desc={e.desc} />
          ))}
        </div>
        <div className="button">
          <button className="active-btn">Ko’proq o’qish</button>
        </div>
      </div>
    </Container>
  );
};

export default News;
