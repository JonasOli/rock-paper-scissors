import React from "react";
import styled from "styled-components";

const StyledRulesContainer = styled.div`
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  h2 {
    text-transform: uppercase;
    font-weight: 700;
    color: var(--darkText);
    font-size: ${"clamp(2.2rem, 2.5vw, 3rem)"};
  }

  button {
    all: unset;
  }

  @media only screen and (min-width: 48em) {
    max-width: 40rem;
    height: 50vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0 3rem;
    border-radius: 5px;
    align-items: flex-start;
  }
`;

interface IProps {
  closeContainer: () => void;
}

const RulesContainer = ({ closeContainer }: IProps) => {
  return (
    <StyledRulesContainer>
      <h2>Rules</h2>
      <img src="./img/image-rules.svg" alt="rules" />
      <button onClick={closeContainer}>
        <img src="./img/icon-close.svg" alt="close container" />
      </button>
    </StyledRulesContainer>
  );
};

export default RulesContainer;
