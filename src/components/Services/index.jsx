import React from "react";
import { Container } from "./style";
import i1 from "../../assets/i1.svg";
import i2 from "../../assets/i2.svg";
import i3 from "../../assets/i3.svg";
import i4 from "../../assets/i4.svg";
import i5 from "../../assets/i5.svg";
import i6 from "../../assets/i6.svg";
import i7 from "../../assets/i7.svg";
import i8 from "../../assets/i8.svg";
import i9 from "../../assets/i9.svg";
import { useTranslation } from "react-i18next";

const Services = ({ serviceRef }) => {
  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      img: i1,
      title: t("services.item1"),
      desc: t("services.item1-desc"),
    },
    {
      id: 2,
      img: i2,
      title: t("services.item2"),
      desc: t("services.item2-desc"),
    },
    {
      id: 3,
      img: i3,
      title: t("services.item3"),
      desc: t("services.item3-desc"),
    },
    {
      id: 4,
      img: i4,
      title: t("services.item4"),
      desc: t("services.item4-desc"),
    },
    {
      id: 5,
      img: i5,
      title: t("services.item5"),
      desc: t("services.item5-desc"),
    },
    {
      id: 6,
      img: i6,
      title: t("services.item6"),
      desc: t("services.item6-desc"),
    },
    {
      id: 7,
      img: i7,
      title: t("services.item7"),
      desc: t("services.item7-desc"),
    },
    {
      id: 8,
      img: i8,
      title: t("services.item8"),
      desc: t("services.item8-desc"),
    },
    {
      id: 9,
      img: i9,
      title: t("services.item9"),
      desc: t("services.item9-desc"),
    },
  ];

  return (
    <Container>
      <div className="container">
        <div className="min" ref={serviceRef}>
          {t("services.min")}
        </div>
        <div className="title">{t("services.title")}</div>
        <div className="buttons">
          <button className="buttons__item active-btn">
            {t("services.btns.a")}
          </button>
          <button className="buttons__item active-btn">
            {t("services.btns.b")}
          </button>
          <button className="buttons__item active-btn">
            {t("services.btns.c")}
          </button>
          <button className="buttons__item active-btn">
            {t("services.btns.d")}
          </button>
          <button className="buttons__item active-btn">
            {t("services.btns.e")}
          </button>
          <button className="buttons__item active-btn">
            {t("services.btns.f")}
          </button>
          <button className="buttons__item active-btn">
            {t("services.btns.g")}
          </button>
          <button className="buttons__item active-btn">
            {t("services.btns.h")}
          </button>
          <button className="buttons__item active-btn">
            {t("services.btns.i")}
          </button>
          <button className="buttons__item active-btn">
            {t("services.btns.j")}
          </button>
          <button className="buttons__item active-btn">
            {t("services.btns.k")}
          </button>
        </div>
        <div className="promise">
          <div className="min">{t("services.min1")}</div>
          <div className="promise__content">
            <div className="promise__content--title">
              {t("services.title1")}
            </div>
            <div className="promise__content--right">
              <p>{t("services.desc1")}</p>
              <button className="active-btn">{t("services.btn")}</button>
            </div>
          </div>
          <div className="promise__carts">
            {data.map((e) => (
              <div className="promise__carts__item" key={e.id}>
                <img src={e.img} alt="" className="promise__carts__item--img" />
                <div className="promise__carts__item--title">
                  {e.id}. {e.title}
                </div>
                <div className="promise__carts__item--desc">{e.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;
