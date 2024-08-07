import React from "react";
import { Container, Icon } from "./style";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation();

  return (
    <div className="container">
      <Container>
        <div className="menu">
          <Icon />
        </div>
        <img src={logo} className="logo" alt="" />
        <div className="sidebar">
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
