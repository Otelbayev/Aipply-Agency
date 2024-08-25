import React from "react";
import { Container } from "./style";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import next from "../../assets/nex.svg";

const About = () => {
  return (
    <Container>
      <div className="container">
        <div className="services">
          <div className="services--min min">Bizning yechimlar:</div>
          <div className="services--center">
            <div className="services--center--title">
              <span>Sizning</span> <span>muvaffaqiyatingiz</span>{" "}
              <span>yo’lidagi hamkoringizmiz!</span>
            </div>
            <div className="services--center--right">
              <p className="services--center--right--title">
                Bizning xizmatlarimiz sizning biznesingizni yangi cho’qqilarga
                olib chiqishga mo’ljallangan.
              </p>
              <button className="services--center--right--button active-btn">
                Bepul konsultatsiya
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
              <div className="items--item--title">Dasturlash</div>
              <div className="items--item--desc">
                Korporativ veb saytlardan tortib veb ilovalargacha bolgan
                murakkablikdagi internet saytlarni sifat kafolati bilan ishlab
                chiqamiz
              </div>
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
              <div className="items--item--title">Dizayn</div>
              <div className="items--item--desc">
                Biznesni ilgari surish uchun asosiy vositalar va marketing
                materiallari to'plamini noldan yaratish.
              </div>
            </div>
          </div>
          <div className="items--item">
            <div className="items--item--top">
              <div className="items--item--top--img">
                <img src={icon3} alt="" />
              </div>
            </div>
            <div>
              <div className="items--item--title">Marketing</div>
              <div className="items--item--desc">
                Biznesingizni marketing strategiyasini ishlab chiqish va qisqa
                vaqt ichida biznesni marketing bo’limini tizimlashtirish
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
