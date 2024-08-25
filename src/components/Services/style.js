import styled from "styled-components";

const btnstyle = `
  border: none;
  background: var(--primaryColor);
  color: var(--secondaryColor);
  padding: 8px 15px;
  font-size: 18px;
  font-weight: 300;
  border-radius: 8px;
  cursor: pointer;
`;

const $border = `1px solid #50a4fd17`;

export const Container = styled.div`
  margin: 100px 0;
  .min {
    text-align: center;
    margin-bottom: 15px;
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 30px;
    &__item {
      ${btnstyle}
    }
  }
  .promise {
    margin-top: 100px;
    .min {
      text-align: left;
    }
    &__content {
      display: flex;
      gap: 30px;
      &--title {
        width: 50%;
        font-size: 48px;
        font-weight: 600;
      }
      &--right {
        width: 50%;
        p {
          padding-top: 10px;
          font-size: 20px;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.8);
        }
        button {
          ${btnstyle}
          margin-top: 15px;
          padding: 10px 20px;
          border-radius: 5px;
        }
      }
    }
    &__carts {
      display: flex;
      flex-wrap: wrap;
      margin-top: 50px;
      &__item {
        width: 33.333333%;
        &--title {
          font-size: 20px;
          font-weight: 500;
          padding: 10px 0;
        }
        &--desc {
          font-size: 16px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
        }
        &:nth-child(1) {
          padding: 0 30px 30px 0;
          border-right: ${$border};
          border-bottom: ${$border};
        }
        &:nth-child(2) {
          padding: 0 30px 30px 30px;
          border-right: ${$border};
          border-bottom: ${$border};
        }
        &:nth-child(3) {
          padding: 0 30px 30px 30px;
          border-bottom: ${$border};
        }
        &:nth-child(4) {
          padding: 30px 30px 30px 0;
          border-right: ${$border};
          border-bottom: ${$border};
        }
        &:nth-child(5) {
          padding: 30px;
          border-right: ${$border};
          border-bottom: ${$border};
        }
        &:nth-child(6) {
          padding: 30px;
          border-bottom: ${$border};
        }
        &:nth-child(7) {
          padding: 30px 30px 30px 0;
          border-right: ${$border};
        }
        &:nth-child(8) {
          padding: 30px;
          border-right: ${$border};
        }
        &:nth-child(9) {
          padding: 30px;
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .promise {
      &__carts {
        &__item {
          width: 50%;
          &:nth-child(1) {
            padding: 0 30px 30px 0;
            border-right: ${$border};
            border-bottom: ${$border};
          }
          &:nth-child(2) {
            padding: 0 30px 30px 30px;
            border-right: none;
            border-bottom: ${$border};
          }
          &:nth-child(3) {
            padding: 30px 30px 30px 0;
            border-bottom: ${$border};
            border-right: ${$border};
          }
          &:nth-child(4) {
            padding: 30px;
            border-right: none;
            border-bottom: ${$border};
          }
          &:nth-child(5) {
            padding: 30px 30px 30px 0;
            border-right: ${$border};
            border-bottom: ${$border};
          }
          &:nth-child(6) {
            padding: 30px;
            border-bottom: ${$border};
          }
          &:nth-child(7) {
            padding: 30px 30px 30px 0;
            border-right: ${$border};
            border-bottom: ${$border};
          }
          &:nth-child(8) {
            padding: 30px;
            border-right: none;
            border-bottom: ${$border};
          }
          &:nth-child(9) {
            padding: 30px 30px 30px 0;
            border-right: ${$border};
          }
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    .promise {
      margin-top: 60px;
      .min {
        text-align: center;
      }
      &__content {
        flex-direction: column;
        justify-content: center;
        text-align: center;
        gap: 0px;
        &--title {
          width: 100%;
          font-size: 28px;
        }
        &--right {
          width: 100%;
          font-size: 20px;
        }
      }
    }
  }
  @media screen and (max-width: 650px) {
    .promise {
      &__carts {
        &__item {
          width: 100%;
          border: none !important;
          padding: 20px 0 !important;
        }
      }
    }
  }
`;
