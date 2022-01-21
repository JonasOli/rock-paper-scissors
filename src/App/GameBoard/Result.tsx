import React, { useContext } from "react";
import { animated } from "react-spring";
import styled from "styled-components";
import PlayButtonType from "../../Helper/PlayButtonType";
import Winner from "../../Helper/Winner";
import { AppContext } from "../Context/AppContext";
import PlayButton from "./PlayButton";

const StyledResultWrapper = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 0;
  gap: 0 3rem;
  position: relative;
`;

const Picks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: white;
    text-transform: uppercase;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    margin: 0;
    margin-top: 2rem;
    letter-spacing: 2px;
  }

  @media only screen and (min-width: 48em) {
    flex-direction: column-reverse;

    h2 {
      margin: 0;
      margin-bottom: 2rem;
    }
  }
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem 0;
  margin: 0 clamp(0, 2.5vw, 3rem);
  position: absolute;
  top: calc(100% + 7rem);

  h2 {
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    line-height: 0.8;
    letter-spacing: 2px;
    font-size: 4rem;
  }

  @media only screen and (min-width: 48em) {
    position: relative;
  }
`;

const PlayAgainButton = styled.button`
  margin-top: auto;
  width: 15rem;
  padding: 0.5rem 0;
  border-radius: 5px;
  font-size: clamp(1.5rem, 2.5vw, 1.5rem);
  border: none;
  color: var(--darkText);
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
`;

const Result = ({ style }: { style: any }) => {
  const { yourPick, pcPick, winner, resetValues } = useContext(AppContext);

  function renderPick(buttonType: PlayButtonType | null): JSX.Element {
    switch (buttonType) {
      case PlayButtonType.PAPER:
        return <PlayButton buttonType={PlayButtonType.PAPER} />;
      case PlayButtonType.ROCK:
        return <PlayButton buttonType={PlayButtonType.ROCK} />;
      case PlayButtonType.SCISSORS:
        return <PlayButton buttonType={PlayButtonType.SCISSORS} />;
      default:
        return <div>empty</div>;
    }
  }

  function getResultText(): string | undefined {
    switch (winner) {
      case Winner.PLAYER:
        return "You won";
      case Winner.MACHINE:
        return "You lose";
      case Winner.DRAW:
        return "Draw";
    }
  }

  return (
    <StyledResultWrapper style={style}>
      <Picks>
        {renderPick(yourPick)}
        <h2>Your picked</h2>
      </Picks>

      {!!winner && (
        <ResultsContainer>
          <h2>{getResultText()}</h2>
          <PlayAgainButton
            onClick={() => {
              resetValues();
            }}
          >
            Play again
          </PlayAgainButton>
        </ResultsContainer>
      )}

      <Picks>
        {renderPick(pcPick)}
        <h2>The house picked</h2>
      </Picks>
    </StyledResultWrapper>
  );
};

export default Result;
