import styled from "styled-components";

export const Container = styled.div`
  padding: 100px 0;
  .min {
    text-align: center;
  }
  .news {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 50px 0 30px;
  }
  .button {
    text-align: center;
    button {
      background: transparent;
      color: var(--primaryColor);
      border: 1px solid var(--primaryColor);
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      padding: 15px 35px;
      border-radius: 15px;
    }
  }
`;

export const NewsItem = styled.div`
  width: 48%;
  margin: 20px 0;
  background: linear-gradient(
    224.65deg,
    rgba(185, 253, 80, 0.03) -17.42%,
    rgba(0, 0, 0, 0.04) 132.65%
  );
  border: 1px solid rgba(80, 201, 253, 0.37);
  display: flex;
  align-items: center;
  border-radius: 10px;
  gap: 20px;
  img {
    width: 200px;
    height: 100%;
    border-radius: 10px;
  }
  .content {
    padding-right: 20px;
    &__min {
      padding-top: 20px;
      text-transform: uppercase;
      color: var(--primaryColor);
      font-size: 18px;
      font-weight: 400;
    }
    &__title {
      font-size: 24px;
      font-weight: 700;
      padding: 10px 0;
    }
    &__desc {
      font-size: 16px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.8);
      padding-bottom: 20px;
    }
  }

  @media screen and (max-width: 1100px) {
    .content {
      &__min {
        font-size: 16px;
      }
      &__title {
        font-size: 20px;
      }
      &__desc {
        font-size: 14px;
      }
    }
  }
  @media screen and (max-width: 986px) {
    width: 100%;
    margin: 15px 0;
  }
  @media screen and (max-width: 500px) {
    gap: 10px;
    img {
      width: 150px;
    }
    padding-right: 10px;
    .content {
      &__min {
        padding-top: 10px;
      }
      &__desc {
        padding-bottom: 10px;
      }
    }
  }
`;
