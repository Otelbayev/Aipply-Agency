import styled from "styled-components";
import arrow from "../../assets/arrow.svg?react";

export const Container = styled.div`
  background-color: #ffff;
  padding: 80px 0 250px;
  .content {
    margin: 50px 150px 0;
  }
`;

export const Accardion = styled.div`
  background: var(--secondaryColor);
  border-radius: 20px;
  margin: 20px 0;
  .accardion-header {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    .accardion-title {
      font-size: 15px;
      font-weight: 500;
    }
  }
  .accardion-content {
    transition: height 0.3s ease;
    height: ${({ open }) => (open ? "150px" : 0)};
    padding: 0 20px;
    overflow: hidden;
  }
`;

export const Arrow = styled(arrow)`
  background: var(--primaryColor);
  width: 45px;
  height: 45px;
  padding: 10px;
  border-radius: 50%;
  transition: transform 0.5s;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0)")};
`;
