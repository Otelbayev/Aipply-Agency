import styled, { css } from "styled-components";

const flex = css`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
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
    border-radius: 8px;
    padding: 8px 10px;
    color: #ffffff;
    background-color: #ffffff70;
    outline: none;
    appearance: none;
    option {
      background-color: var(--secondaryColor);
    }
  }
`;
