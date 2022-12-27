import { Link } from "react-router-dom";
import styled from "styled-components";

const SBtn = styled.button`
  background-color: #e0791b;
  color: #fff;
  border-radius: 4px;
  margin: 0 auto;
  width: fit-content;
  display: block;
  a {
    display: block;
    padding: 10px 28px;
    @media (max-width: 428px) {
      font-size: 0.9rem;
    }
  }
`;

export const Btn = ({ to, children }) => {
  return (
    <SBtn>
      <Link to={to}>{children}</Link>
    </SBtn>
  );
};
