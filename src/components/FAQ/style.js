import styled from "styled-components";
import arrow from "../../assets/arrow.svg?react";

export const Container = styled.div`
  background-color: #ffff;
  color: var(--secondaryColor);
  padding: 80px 0 250px;

  .accardion-content {
    margin: 50px 150px 0;
  }
  @media screen and (max-width: 850px) {
    .accardion-content {
      margin: 50px 0px 0;
    }
  }
`;

export const Icon = styled(arrow)``;

export const AccordionContainer = styled.div`
  margin: 20px 0;
  .accordion {
    background: var(--secondaryColor);
    color: #fff;
    border-radius: 20px;
    &__top {
      padding: 30px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &--title {
        width: 80%;
        font-size: 18px;
        font-weight: 500;
      }
      &__icons {
        width: 20%;
        display: flex;
        justify-content: flex-end;
        &--icon {
          background: var(--primaryColor);
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
          transform: ${({ open }) =>
            open ? "rotate(180deg)" : "rotate(0deg)"};
        }
      }
    }
    &__desc {
      position: relative;
      padding: ${({ open }) => (open ? "0 30px 30px 30px" : 0)};
      font-size: 19px;
      font-weight: 400;
      transition: max-height 0.3s ease-out, padding 0.3s ease-out;
      opacity: ${({ open }) => (open ? 1 : 0)};
      z-index: ${({ open }) => (open ? 99 : -99)};
      max-height: ${({ open }) => (open ? "auto" : 0)};
    }
  }

  @media screen and (max-width: 600px) {
    margin: 10px 0;
    .accordion {
      &__top {
        gap: 0;
        padding: 20px;
        &--title {
          font-size: 16px;
        }
        &__icons {
          &--icon {
            width: 40px;
            height: 40px;
          }
        }
      }
      &__desc {
        padding: ${({ open }) => (open ? "0 20px 20px 20px" : 0)};
      }
    }
  }
`;

export const FormContainer = styled.div`
  .faq-form {
    &__input {
      width: 100%;
      outline: none;
      border-radius: 15px;
      font-size: 18px;
      border: 1.5px solid rgba(17, 18, 4, 1);
      padding: 20px;
      height: 200px;
      &::placeholder {
        font-size: 16px;
        font-weight: 400;
        color: rgba(141, 141, 141, 1);
      }
    }

    &__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      &--txt {
        font-weight: 400;
        font-size: 16px;
        width: 70%;
      }
      &--btn {
        cursor: pointer;
        border: none;
        background: var(--primaryColor);
        color: var(--secondaryColor);
        font-size: 16px;
        font-weight: 600;
        padding: 15px 30px;
        border-radius: 30px;
      }
    }
  }
`;
