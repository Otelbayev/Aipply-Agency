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

const data = [
  {
    id: 1,
    img: i1,
    title: "Web sayt",
    desc: "Korporativ veb saytlardan tortib veb ilovalargacha bolgan murakkablikdagi internet saytlarni sifat kafolati bilan ishlab chiqamiz",
  },
  {
    id: 2,
    img: i2,
    title: "Mobil app",
    desc: "Istalgan qiyinchilikdagi mobil ilovalarni ishlab chiqish va ularni texnik qo'llab-quvvatlash",
  },
  {
    id: 3,
    img: i3,
    title: "UI/UX dizayn",
    desc: "Loyiha MindMap'ini ishlab chiqish va ushbu arxitektura asosida optimal yechimga ega dizaynlarni chizish",
  },
  {
    id: 4,
    img: i4,
    title: "Branding",
    desc: "Loyiha MindMap'ini ishlab chiqish va ushbu arxitektura asosida optimal yechimga ega dizaynlarni chizish",
  },
  {
    id: 5,
    img: i5,
    title: "Marketing",
    desc: "Biznesni ilgari surish uchun asosiy vositalar va marketing materiallari to'plamini noldan yaratish.",
  },
  {
    id: 6,
    img: i6,
    title: "Targeting",
    desc: "Mahsulot va xizmatingizni sotuvini oshirish va qo’shimcha yangi mijozlarni jalb qilish uchun biz yordam beramiz.",
  },
  {
    id: 7,
    img: i7,
    title: "Interyer/Ekeneryer dizayn",
    desc: "Uyingizni ichki va tashki ko’rinishini dizaynni mukammal holatda yasab topshiramiz bu orqani ishingiz ancha osonlashadi.",
  },
  {
    id: 8,
    img: i8,
    title: "Motion dizayn",
    desc: "Reklama ro’liklaringizi animatsiyalar bilan qiziqarliroq va kreativ chiqishiga yordam beramiz.",
  },
  {
    id: 9,
    img: i9,
    title: "Video montaj",
    desc: "Deadline va texnik topshiriqlar asosida sizning video va reelslaringni qisqa vaqtda tayyorlab beramiz.",
  },
];

const Services = () => {
  return (
    <Container>
      <div className="container">
        <div className="min">Natijangiz uchun</div>
        <div className="title">Qaysi hizmatimizdan foyladanmoqchisiz ?</div>
        <div className="buttons">
          <button className="buttons__item active-btn">Web sayt</button>
          <button className="buttons__item active-btn">Mobil app</button>
          <button className="buttons__item active-btn">UI/UX dizayn</button>
          <button className="buttons__item active-btn">Logo branding</button>
          <button className="buttons__item active-btn">Packaging</button>
          <button className="buttons__item active-btn">
            Qo’shimcha dizayn xizmatlari
          </button>
          <button className="buttons__item active-btn">
            Interyer/Eksteryer dizayn
          </button>
          <button className="buttons__item active-btn">Vioodeo montaj</button>
          <button className="buttons__item active-btn">SMM</button>
          <button className="buttons__item active-btn">Target reklama</button>
          <button className="buttons__item active-btn">Marketing analiz</button>
        </div>
        <div className="promise">
          <div className="min">Taklifimiz</div>
          <div className="promise__content">
            <div className="promise__content--title">
              Biz sizga nimani vada beramiz
            </div>
            <div className="promise__content--right">
              <p>
                Aipply Agency sizning g‘oyalaringizni raqamli dunyoda haqiqatga
                aylantiradi. Biz quyidagi xizmatlar orqali biznesingizni
                rivojlantirishga yordam beramiz:
              </p>
              <button className="active-btn">Ariza qoldirish</button>
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
