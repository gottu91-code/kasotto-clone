import styled from "styled-components";

const SSectionTitle = styled.div`
  text-align: center;
  h2 {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0.04em;
    @media (max-width: 428px) {
      font-size: 20px;
    }
  }
  .sub_text {
    margin-top: 5px;
  }
`;

export const SectionTitle = ({ jaText, subText = null }) => {
  return (
    <SSectionTitle>
      <h2 className="title">{jaText}</h2>
      {subText && <p className="sub_text">{subText}</p>}
    </SSectionTitle>
  );
};
