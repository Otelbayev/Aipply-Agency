import React from "react";
import { Container, Icon, X } from "./style";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = ({ open, setOpen }) => {
  const { i18n } = useTranslation();

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
                <NavLink>Biz haqimizda</NavLink>
              </li>
              <li>
                <NavLink>Xizmatlari</NavLink>
              </li>
              <li>
                <NavLink>Portfolio</NavLink>
              </li>
              <li>
                <NavLink>FAQ</NavLink>
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
