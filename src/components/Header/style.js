import styled, { css } from "styled-components";
import menu from "../../assets/menu.svg?react";
import x from "../../assets/x.svg?react";

const flex = css`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  .menu {
    display: none;
    cursor: pointer;
    width: 50px;
  }
  .logo {
  }

  .sidebar {
    ${flex}
    gap: 50px;

    &__top {
      display: none;
    }
    &__nav {
      ul {
        ${flex}
        gap: 20px;
        list-style-type: none;

        a {
          font-size: 18px;
          font-weight: 400;
          text-decoration: none;
          color: #fff;
        }
      }
    }

    &__phone {
      a {
        font-size: 24px;
        font-weight: 600;
        color: #fff;
        text-decoration: none;
      }
    }
  }

  .language {
    border: 1px solid #ffffff;
    border-radius: 4px;
    padding: 8px 10px;
    color: #ffffff;
    background-color: #ffffff70;
    outline: none;
    appearance: none;
    option {
      background-color: var(--secondaryColor);
    }
  }
  @media (max-width: 950px) {
    .sidebar {
      position: fixed;
      transition: 0.3s;
      top: 0;
      left: 0;
      /* opacity: ${({ open }) => (open ? 1 : 0)}; */
      z-index: ${({ open }) => (open ? 99 : -99)};
      opacity: ${({ open }) => (open ? 1 : 0)};
      width: 100%;
      height: 100dvh;
      background: rgba(217, 217, 217, 0.06);
      backdrop-filter: blur(5px);
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &__top {
        display: block;
        position: absolute;
        top: 30px;
        left: 0;
        width: 100%;
        &__content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
    .sidebar ul {
      flex-direction: column;
    }
    .menu {
      display: block;
    }
  }
`;

export const Icon = styled(menu)`
  font-size: 25px;
  color: #fff;
  width: 30px;
  fill: #fff;
`;

export const X = styled(x)`
  font-size: 25px;
  color: #fff;
  width: 30px;
  fill: #fff;
`;
