import { Link } from "react-router-dom";
import styled from "styled-components";
import { Frame } from "./Frame";
import { Logo } from "./Logo";

const SHeader = styled.header`
  padding: 20px 0;
  background-color: #fafafa;
  .logo {
    display: flex;
    align-items: center;
    column-gap: 2px;
    .text {
      font-size: 1.2rem;
      font-weight: bold;
      translate: 0 13px;
      @media (max-width: 428px) {
        font-size: 1rem;
        translate: 0 11px;
      }
    }
    img {
      width: 170px;
      @media (max-width: 428px) {
        width: 120px;
      }
    }
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Frame>
        <div className="header_container">
          <Logo />
        </div>
      </Frame>
    </SHeader>
  );
};
