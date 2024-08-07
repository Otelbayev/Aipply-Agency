import styled, { css } from "styled-components";
import menu from "../../assets/menu.svg?react";

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
      display: none;
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
