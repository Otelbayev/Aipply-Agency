import { Container } from "./style";
import { Button } from "./../Generics";

const Showcase = () => {
  return (
    <Container>
      <div className="container">
        <div className="showcase-title">
          <span>Aipply agency</span> - Innovatsion yechimlarga yo’l
        </div>
        <div className="showcase-desc">
          Biz bilan birga sizning brendingiz raqamli olamda ajralib turishi
          uchun safarga chiqing. Har safar mukammallikni taqdim etishimizga
          ishonishingiz mumkin.
        </div>
        <Button>Hoziroq bog‘lanish</Button>
      </div>
    </Container>
  );
};

export default Showcase;
