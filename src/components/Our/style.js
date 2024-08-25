import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  color: var(--secondaryColor);
  padding: 100px 0;
  .top {
    width: 50%;
    margin: 0 auto;
  }
  .slider {
    margin-top: 50px;
  }

  @media (max-width: 900px) {
    .top {
      width: 100%;
    }
  }
`;

export const SliderItem = styled.div`
  border: 1px solid rgba(217, 217, 217, 1);
  padding: 10px;
  margin: 0 50px;
  box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.05);
  background: rgba(249, 249, 249, 1);
  border-radius: 40px;
  padding: 55px;
  display: flex;
  align-items: center;
  gap: 50px;
  .left {
    width: 65%;
    &__title {
      color: rgba(20, 20, 43, 1);
      font-size: 26px;
      font-weight: 700;
    }
    &__desc {
      font-size: 18px;
      font-weight: 400;
      padding: 10px 0 30px;
    }
    &__degree {
      font-size: 20px;
      font-weight: 700;
      color: rgba(20, 20, 43, 1);
    }
    &__name {
      color: rgba(17, 18, 4, 0.8);
      font-size: 16px;
      font-weight: 400;
      padding-top: 5px;
    }
  }
  .right {
    width: 35%;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
    margin: 0;
    padding: 25px;
    gap: 20px;
    .left {
      width: 100%;
      &__title {
        font-size: 24px;
      }
      &__desc {
        font-size: 18px;
      }
    }
    .right {
      width: 50%;
    }
  }
`;
