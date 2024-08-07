import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Container, Icons } from "./style";
import { Button } from "../Generics";

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <div className="footer-box">
          <div className="footer-box__title">
            Aipply academy-Inovatision yechimlarga yo‘l
          </div>
          <div className="footer-box__desc">
            Jump on a membership and start requesting designs right away!
          </div>
          <Button>
            Hoziroq bog’laning <Icons.Next />
          </Button>
        </div>
        <div className="content">
          <div className="content__left">
            <div className="logo">
              <img src={logo} alt="" />
              <p>
                Kornix - the leading digital agency based in the UK, working
                with top-tier clients, from start-ups to enterprises.
              </p>
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
          </div>
          <div className="bottom__right">
            © 2023 shantogfx - All Right Reserved
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
