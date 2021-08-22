import React from "react";
import styled from "styled-components";

const StyledRulesContainer = styled.div`
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    text-transform: uppercase;
    font-weight: 700;
    color: var(--darkText);
    font-size: 3rem;
    margin-bottom: 4rem;
  }

  button {
    all: unset;
    width: 10rem;
    height: fit-content;
    cursor: pointer;
    padding: 2rem;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 5rem;
  }

  @media only screen and (min-width: 48em) {
    max-width: 40rem;
    height: 50vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1.5rem 3rem;
    border-radius: 5px;
    align-items: center;
    gap: 2rem;

    h2 {
      align-self: flex-start;
      margin-bottom: 0;
    }

    button {
      top: 1.8rem;
      right: 2.8rem;
      width: fit-content;
      padding: 1rem;
    }
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
