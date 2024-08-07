import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled(NavLink)`
  background: var(--primaryColor);
  color: var(--secondaryColor);
  border: none;
  text-decoration: none;
  padding: 8px 14px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:active {
    transform: scale(0.98);
  }
`;

const Button = ({ children, to }) => {
  return <Container to={to}>{children}</Container>;
};

export default Button;
