import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../Context/AppContext";

const StyledScore = styled.div`
  background-color: var(--backgroundColor);
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 2.5rem;
  margin: 1rem;
  border-radius: 5px;
  text-align: center;

  .score-title {
    font-size: 1.2rem;
    color: var(--scoreText);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .score-count {
    font-size: 4.3rem;
    font-weight: 700;
    line-height: 1;
    color: var(--darkText);
  }
`;

const Score = () => {
  const { score } = useContext(AppContext);

  return (
    <StyledScore>
      <h2 className="score-title">Score</h2>
      <div className="score-count">{score}</div>
    </StyledScore>
  );
};

export default Score;
