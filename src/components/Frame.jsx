import styled from "styled-components";

const SFrame = styled.div`
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: 5%;
  @media (min-width: 1921px) {
    max-width: 70%;
  }
`;

export const Frame = ({ children }) => {
  return <SFrame>{children}</SFrame>;
};
