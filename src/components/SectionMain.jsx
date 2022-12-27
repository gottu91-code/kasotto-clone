import styled from "styled-components";

const SSectionMain = styled.div`
  padding-block: 100px;
  @media (max-width: 428px) {
    padding-block: 50px;
  }
`;

export const SectionMain = ({ children }) => {
  return <SSectionMain>{children}</SSectionMain>;
};
