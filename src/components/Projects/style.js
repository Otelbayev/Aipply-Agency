import styled from "styled-components";

export const Container = styled.div`
  padding: 150px 0;
  background-color: #fff;
  color: var(--secondaryColor);
  p {
    width: 50%;
    margin: 20px auto;
  }
  .button {
    display: flex;
    justify-content: center;
    button {
      border: 1px solid var(--secondaryColor);
      border-radius: 5px;
      padding: 10px 20px;
      font-size: 16px;
      color: var(--secondaryColor);
      background: transparent;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      img {
        width: 20px;
      }
    }
  }
  .projects {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    gap: 20px;
    &--wrap {
      display: flex;
      gap: 20px;
      &--item {
        display: flex;
        flex-direction: column;
        gap: 20px;
        transition: 0.3s;
        &:nth-child(odd) {
          animation: anim 4s ease-in-out infinite alternate;
        }
        &:nth-child(even) {
          animation: anim1 4s ease-in-out infinite alternate;
        }
        &--img {
          width: 100%;
        }
      }
    }
  }

  @keyframes anim {
    from {
      transform: translateY(150px);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes anim1 {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(150px);
    }
  }

  @media screen and (max-width: 900px) {
    .projects {
      flex-direction: column;
      gap: 5px;
      &--wrap {
        gap: 5px;
        margin: 0 5px;
        &--item {
          width: 50%;
          gap: 5px;
        }
      }
    }
  }
`;
