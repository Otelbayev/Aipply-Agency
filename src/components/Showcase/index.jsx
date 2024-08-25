import { Container } from "./style";
import star from "../../assets/star.png";

const Showcase = () => {
  return (
    <Container>
      <div className="container">
        <div className="showcase">
          <div className="showcase--title">
            <span>Aipply agency</span> - Innovatsion yechimlarga yo’l
          </div>
          <div className="showcase--desc">
            Biz bilan birga sizning brendingiz raqamli olamda ajralib turishi
            uchun safarga chiqing. Har safar mukammallikni taqdim etishimizga
            ishonishingiz mumkin.
          </div>
          <button className="showcase--button active-btn">
            Hoziroq bog‘lanish
          </button>
          <div className="showcase--brends">
            <span></span> Bizni tanlagan brendlar <span></span>
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
