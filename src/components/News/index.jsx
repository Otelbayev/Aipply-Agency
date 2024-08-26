import React from "react";
import { Container } from "./style";
import Item from "./Item";
import { useTranslation } from "react-i18next";
import img from "../../assets/project.png";

const News = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <div className="container">
        <div className="min">{t("news.min")}</div>
        <div className="title">{t("news.title")}</div>
        <div className="news">
          <Item
            img={img}
            min={t("news.min")}
            title={t("news.title")}
            desc={t("news.desc")}
          />
        </div>
        <div className="button">
          <button className="active-btn">Ko’proq o’qish</button>
        </div>
      </div>
    </Container>
  );
};

export default News;
