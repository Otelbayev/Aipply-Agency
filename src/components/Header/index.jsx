import React from "react";
import { Container, Icon, X } from "./style";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useScroll } from "../../hooks/useScroll";

const Header = ({
  open,
  setOpen,
  faqRef,
  portfolioRef,
  serviceRef,
  aboutRef,
}) => {
  const { i18n, t } = useTranslation();

  return (
    <div className="container">
      <Container open={open}>
        <div className="menu">
          <Icon onClick={() => setOpen(true)} />
        </div>
        <img src={logo} className="logo" alt="" />
        <div className="sidebar">
          <div className="sidebar__top">
            <div className="sidebar__top__content container">
              <div className="menu">
                <X onClick={() => setOpen(false)} />
              </div>
              <img src={logo} className="logo" alt="" />
              <select
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                className="language"
                value={i18n.language}
              >
                <option value="uz">Uzbek</option>
                <option value="ru">Russian</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
          <nav className="sidebar__nav">
            <ul>
              <li>
                <NavLink
                  onClick={() => {
                    setOpen(false);
                    setTimeout(() => {
                      useScroll(aboutRef);
                    }, 500);
                  }}
                >
                  {t("nav.about")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => {
                    setOpen(false);
                    setTimeout(() => {
                      useScroll(serviceRef);
                    }, 500);
                  }}
                >
                  {t("nav.service")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => {
                    setOpen(false);
                    setTimeout(() => {
                      useScroll(portfolioRef);
                    }, 500);
                  }}
                >
                  {t("nav.portfolio")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => {
                    setOpen(false);
                    setTimeout(() => {
                      useScroll(faqRef);
                    }, 500);
                  }}
                >
                  {t("nav.faq")}
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="sidebar__phone">
            <NavLink to="tel:+998935960246">
              <span>+998 94 </span>365 36 32
            </NavLink>
          </div>
        </div>
        <select
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          className="language"
          value={i18n.language}
        >
          <option value="uz">Uzbek</option>
          <option value="ru">Russian</option>
          <option value="en">English</option>
        </select>
      </Container>
    </div>
  );
};

export default Header;
