import { Container } from "./style";
import star from "../../assets/star.png";
import { useTranslation } from "react-i18next";

const Showcase = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <div className="container">
        <div className="showcase">
          <div className="showcase--title">
            <span>Aipply agency</span> - {t("showcase.title")}
          </div>
          <div className="showcase--desc">{t("showcase.desc")}</div>
          <button className="showcase--button active-btn">
            {t("showcase.btn")}
          </button>
          <div className="showcase--brends">
            <span></span> {t("brends.top")} <span></span>
          </div>
          <img className="showcase--star1" src={star} />
          <img className="showcase--star2" src={star} />
          <img className="showcase--star3" src={star} />
        </div>
      </div>
    </Container>
  );
};

export default Showcase;
