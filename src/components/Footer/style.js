import styled from "styled-components";
import email from "../../assets/email.svg?react";
import phone from "../../assets/phone.svg?react";
import face from "../../assets/facebook.svg?react";
import insta from "../../assets/insta.svg?react";
import linkedin from "../../assets/linkedin.svg?react";
import news from "../../assets/new.svg?react";
import next from "../../assets/next.svg?react";

export const Container = styled.div`
  .footer-box {
    transform: translateY(-40%);
    background: #081920;
    border-radius: 35px;
    text-align: center;
    padding: 25px 25px 50px;
    &__title {
      font-size: 64px;
      font-weight: 700;
    }
    &__desc {
      font-size: 18px;
      padding: 20px 35% 60px;
      font-weight: 400;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 100px;
    border-bottom: 1px solid #404040;
    &__left {
      width: 300px;
      p {
        font-size: 14px;
        margin-top: 10px;
      }
    }
    &__right {
      width: 160px;
      &__item {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 15px;
        p {
          font-size: 16px;
          font-weight: 400;
          a {
            text-decoration: none;
            color: #ffff;
          }
        }
      }
      .div {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    &__right {
      font-size: 16px;
      font-weight: 500;
    }
    &__left {
      ul {
        display: flex;
        align-items: center;
        gap: 20px;
        list-style-type: none;
        li {
          a {
            text-decoration: none;
            color: #ffff;
          }
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    .footer-box {
      &__title {
        font-size: 50px;
      }
    }
  }
  @media screen and (max-width: 700px) {
    .footer-box {
      padding: 20px 20px 30px;
      border-radius: 15px;
      &__title {
        font-size: 26px;
      }
      &__desc {
        font-size: 14px;
        padding: 20px 20% 30px;
      }
    }
    .content {
      padding-bottom: 20px;
      flex-direction: column;
      gap: 20px;
    }
    .bottom {
      flex-direction: column;
      gap: 8px;
    }
  }
`;

export const Icons = styled.div``;

Icons.Email = styled(email)``;
Icons.Phone = styled(phone)``;
Icons.Facebook = styled(news)``;
Icons.Insta = styled(face)``;
Icons.In = styled(insta)``;
Icons.Web = styled(linkedin)``;
Icons.Next = styled(next)`
  vertical-align: middle;
`;
