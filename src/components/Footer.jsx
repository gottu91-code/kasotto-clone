import styled from "styled-components";
import { Logo } from "./Logo";

const SFooter = styled.footer`
  padding: 40px 0;
  display: grid;
  place-content: center;
  background-color: #fafafa;
  .logo {
    text-align: center;
    img {
      width: 200px;
      @media (max-width: 428px) {
        width: 140px;
      }
    }
    .text {
      text-align: center;
      font-weight: bold;
      font-size: 1.3rem;
      margin-top: 4px;
      @media (max-width: 428px) {
        font-size: 1.1rem;
      }
    }
  }
  .copyright {
    font-size: 0.8rem;
    margin-top: 24px;
    @media (max-width: 428px) {
      font-size: 10px;
    }
  }
`;

export const Footer = () => {
  return (
    <SFooter>
      <Logo />
      <p className="copyright">
        &copy; 2022 KASOTTO NO CLONE All Rights Reserved.
      </p>
    </SFooter>
  );
};
