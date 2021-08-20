import React from "react";
import styled from "styled-components";

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
    letter-spacing: 0.1rem;
  }

  .score-count {
    font-size: 4.3rem;
    font-weight: 700;
    line-height: 1;
    color: var(--darkText);
  }
`;

interface IProps {
  scoreCount: number;
}

const Score = ({ scoreCount }: IProps) => {
  return (
    <StyledScore>
      <h2 className="score-title">Score</h2>
      <div className="score-count">{scoreCount}</div>
    </StyledScore>
  );
};

export default Score;
