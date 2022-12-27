import styled from "styled-components";
import { Logo } from "./Logo";

const SLoading = styled.div`
  display: grid;
  place-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: #fff;
  transition-duration: 0.8s;
  visibility: hidden;
  opacity: 0;
  &.is_loading {
    visibility: visible;
    opacity: 1;
  }
  .logo {
    width: 20vw;
    .text {
      text-align: center;
      font-weight: bold;
      font-size: 1.6rem;
      margin-top: 4px;
    }
  }
`;

export const Loading = ({ isLoading }) => {
  return (
    <SLoading className={isLoading ? "is_loading" : null}>
      <Logo />
    </SLoading>
  );
};
