import React from "react";
import styled from "styled-components";
import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.png";
import b3 from "../../assets/b3.png";
import b4 from "../../assets/b4.png";
import b5 from "../../assets/b5.png";

const Container = styled.div`
  .brand {
    background: #222222;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px 40px;
    border-radius: 20px;
    flex-wrap: wrap;
    gap: 20px;
    &--item {
      max-width: 140px;
    }
  }
  @media screen and (max-width: 500px) {
    .brand {
      padding: 30px;
      &--item {
        max-width: 100px;
      }
    }
  }
`;

const Brand = () => {
  return (
    <Container>
      <div className="container">
        <div className="brand">
          <img src={b1} alt="" className="brand--item" />
          <img src={b2} alt="" className="brand--item" />
          <img src={b3} alt="" className="brand--item" />
          <img src={b4} alt="" className="brand--item" />
          <img src={b5} alt="" className="brand--item" />
        </div>
      </div>
    </Container>
  );
};

export default Brand;
