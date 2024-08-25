import styled from "styled-components";

export const Container = styled.div`
  padding: 100px 0;
  .services {
    &--min {
      font-size: 16px;
      font-weight: 400;
      color: var(--primaryColor);
      text-transform: uppercase;
      padding-bottom: 20px;
    }
    &--center {
      display: flex;
      align-items: flex-end;
      gap: 30px;
      &--title {
        font-size: 45px;
        font-weight: 600;
        width: 50%;
        span {
          display: block;
        }
      }
      &--right {
        width: 50%;
        &--title {
          font-size: 24px;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 20px;
        }
        &--button {
          padding: 15px 25px;
          border-radius: 8px;
          font-size: 16px;
          color: var(--secondaryColor);
          background-color: var(--primaryColor);
          border: none;
          cursor: pointer;
        }
      }
    }
  }
  .items {
    display: flex;
    gap: 20px;
    margin-top: 80px;
    &--item {
      width: 33%;
      &--top {
        display: flex;
        align-items: center;
        &--img {
          background: var(--primaryColor);
          width: 93px;
          height: 93px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
        &--arrow {
          width: 65%;
          z-index: -1;
        }
      }
      &--title {
        font-size: 26px;
        font-weight: 500;
        padding: 20px 0;
      }
      &--desc {
        font-size: 18px;
        font-weight: 300;
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
  @media screen and (max-width: 888px) {
    .services {
      &--center {
        gap: 10px;
        &--title {
          width: 60%;
          font-size: 35px;
        }
        &--right {
          width: 40%;
          &--title {
            font-size: 18px;
          }
          &--button {
            padding: 8px 14px;
          }
        }
      }
    }
    .items {
      flex-direction: column;
      &--item {
        width: 100%;
        display: flex;
        gap: 20px;
        &--top {
          flex-direction: column;
          align-items: flex-start;
          &--img {
            background: var(--primaryColor);
            width: 50px;
            height: 50px;
            img {
              width: 23px;
            }
          }
          &--arrow {
            transform: translateX(-40px) rotate(90deg);
            display: none;
          }
        }
        &--title {
          padding: 0;
        }
      }
    }
  }
  @media screen and (max-width: 700px) {
    .services {
      &--center {
        flex-direction: column;
        &--title {
          width: 100%;
        }
        &--right {
          width: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 500px) {
    .services {
      &--center {
        &--title {
          font-size: 28px;
          span {
            display: inline;
          }
        }
        &--right {
          width: 100%;
          &--title {
            line-height: 28px;
          }
        }
      }
    }
  }
`;
