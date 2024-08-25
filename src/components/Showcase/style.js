import styled from "styled-components";

export const Container = styled.div`
  .showcase {
    height: calc(100dvh - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 50px 0;
    position: relative;
    &--title {
      font-size: 70px;
      text-align: center;
      font-weight: 800;
      span {
        font-style: italic;
        color: var(--primaryColor);
      }
    }
    &--desc {
      font-size: 18px;
      font-weight: 400;
      color: #ffffffcc;
      width: 50%;
      text-align: center;
    }
    &--button {
      color: #fff;
      background-color: var(--primaryColor);
      padding: 15px 25px;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 500;
      border: none;
      cursor: pointer;
    }
    &--brends {
      font-size: 15px;
      font-weight: 700;
      color: #fff;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 15px;
      span {
        width: 50px;
        height: 2px;
        background: var(--primaryColor);
      }
    }
    &--star1 {
      position: absolute;
      z-index: -1;
      top: 150px;
      right: 15%;
    }
    &--star2 {
      position: absolute;
      z-index: -1;
      left: 20%;
      bottom: 200px;
      width: 15px;
      height: 15px;
    }
    &--star3 {
      position: absolute;
      z-index: -1;
      left: 60%;
      bottom: 100px;
      width: 15px;
      height: 15px;
    }
  }
  @media screen and (max-width: 950px) {
    .showcase {
      &--title {
        font-size: 55px;
      }
    }
  }
  @media screen and (max-width: 750px) {
    .showcase {
      &--title {
        font-size: 32px;
      }
      &--desc {
        font-size: 16px;
        width: 80%;
      }
      &--brends {
        font-size: 12px;
        gap: 10px;
        letter-spacing: 1px;
      }
      &--star1 {
        right: 0;
      }
    }
  }
`;
