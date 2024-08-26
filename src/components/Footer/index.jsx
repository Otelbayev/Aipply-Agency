import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Container, Icons } from "./style";
import { Button } from "../Generics";
import { useScroll } from "../../hooks/useScroll";
import { useTranslation } from "react-i18next";

const Footer = ({ faqRef, portfolioRef, serviceRef, aboutRef }) => {
  const { t } = useTranslation();
  return (
    <Container>
      <div className="container">
        <div className="footer-box">
          <div className="footer-box__title">{t("footer.title")}</div>
          <div className="footer-box__desc">{t("footer.desc")}</div>
          <button className="active-btn">
            {t("footer.btn")} <Icons.Next />
          </button>
        </div>
        <div className="content">
          <div className="content__left">
            <div className="logo">
              <img src={logo} alt="" />
              <p>{t("footer.desc1")}</p>
            </div>
          </div>
          <div className="content__right">
            <div className="content__right__item">
              <Icons.Email />
              <p>aipply agency</p>
            </div>
            <div className="content__right__item">
              <Icons.Phone />
              <p>
                <NavLink to="tel:+998935960246">99 894 365 36 32</NavLink>
              </p>
            </div>
            <div className="div">
              <NavLink>
                <Icons.Facebook />
              </NavLink>
              <NavLink>
                <Icons.Insta />
              </NavLink>
              <NavLink>
                <Icons.In />
              </NavLink>
              <NavLink>
                <Icons.Web />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom__left">
            <ul>
              <li>
                <NavLink onClick={() => useScroll(aboutRef)}>
                  {t("nav.about")}
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => useScroll(serviceRef)}>
                  {t("nav.service")}
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => useScroll(portfolioRef)}>
                  {t("nav.portfolio")}
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => useScroll(faqRef)}>
                  {t("nav.faq")}
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="bottom__right">© 2024 All Right Reserved</div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
