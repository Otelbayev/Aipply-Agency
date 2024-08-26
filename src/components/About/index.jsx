import React from "react";
import { Container } from "./style";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import next from "../../assets/nex.svg";
import { useTranslation } from "react-i18next";

const About = ({ aboutRef }) => {
  const { t } = useTranslation();
  return (
    <Container>
      <div className="container" ref={aboutRef}>
        <div className="services">
          <div className="services--min min">{t("brends.min")}</div>
          <div className="services--center">
            <div className="services--center--title">
              <span>{t("brends.title1")}</span>
              <span>{t("brends.title2")}</span>
              <span>{t("brends.title3")}</span>
            </div>
            <div className="services--center--right">
              <p className="services--center--right--title">
                {t("brends.desc")}
              </p>
              <button className="services--center--right--button active-btn">
                {t("brends.btn")}
              </button>
            </div>
          </div>
        </div>
        <div className="items">
          <div className="items--item">
            <div className="items--item--top">
              <div className="items--item--top--img">
                <img src={icon1} alt="" />
              </div>
              <img className="items--item--top--arrow" src={next} alt="" />
            </div>
            <div>
              <div className="items--item--title">{t("brends.item1")}</div>
              <div className="items--item--desc">{t("brends.item1-desc")}</div>
            </div>
          </div>
          <div className="items--item">
            <div className="items--item--top">
              <div className="items--item--top--img">
                <img src={icon2} alt="" />
              </div>
              <img className="items--item--top--arrow" src={next} alt="" />
            </div>
            <div>
              <div className="items--item--title">{t("brends.item2")}</div>
              <div className="items--item--desc">{t("brends.item2-desc")}</div>
            </div>
          </div>
          <div className="items--item">
            <div className="items--item--top">
              <div className="items--item--top--img">
                <img src={icon3} alt="" />
              </div>
            </div>
            <div>
              <div className="items--item--title">{t("brends.item3")}</div>
              <div className="items--item--desc">{t("brends.item3-desc")}</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
