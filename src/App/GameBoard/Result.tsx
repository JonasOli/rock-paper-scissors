import React, { useContext, useEffect, useState } from "react";
import { animated } from "react-spring";
import styled from "styled-components";
import PlayButtonType from "../../Helper/PlayButtonType";
import { AppContext } from "../Context/AppContext";
import PlayButton from "./PlayButton";

const StyledResult = styled(animated.div)`
  display: flex;
`;

const Picks = styled.div``;

const PlayAgainButton = styled.button`
  margin-top: auto;
`;

const Result = ({ style }: { style: any }) => {
  const { setShowResult, yourPick, pcPick, score, setScore } =
    useContext(AppContext);
  const [resultText, setResultText] = useState("");

  useEffect(() => {
    checkResult();
  }, []);

  const renderPick = (buttonType: PlayButtonType) => {
    switch (buttonType) {
      case PlayButtonType.PAPER:
        return <PlayButton buttonType={PlayButtonType.PAPER} />;
      case PlayButtonType.ROCK:
        return <PlayButton buttonType={PlayButtonType.ROCK} />;
      case PlayButtonType.SCISSORS:
        return <PlayButton buttonType={PlayButtonType.SCISSORS} />;
    }
  };

  const checkResult = () => {
    if (yourPick === pcPick) {
      setResultText("Draw");
    } else if (
      (yourPick === PlayButtonType.PAPER &&
        pcPick === PlayButtonType.SCISSORS) ||
      (yourPick === PlayButtonType.ROCK && pcPick === PlayButtonType.PAPER) ||
      (yourPick === PlayButtonType.SCISSORS && pcPick === PlayButtonType.ROCK)
    ) {
      setResultText("You lose");
    } else if (
      (yourPick === PlayButtonType.PAPER && pcPick === PlayButtonType.ROCK) ||
      (yourPick === PlayButtonType.ROCK &&
        pcPick === PlayButtonType.SCISSORS) ||
      (yourPick === PlayButtonType.SCISSORS && pcPick === PlayButtonType.PAPER)
    ) {
      setScore(score + 1);
      setResultText("You win");
    }
  };

  return (
    <StyledResult style={style}>
      <Picks>
        <h2>Your picked</h2>
        {renderPick(yourPick)}
      </Picks>

      <h2>{resultText}</h2>

      <Picks>
        <h2>The house picked</h2>
        {renderPick(pcPick)}
      </Picks>

      <PlayAgainButton onClick={() => setShowResult(false)}>
        Play again
      </PlayAgainButton>
    </StyledResult>
  );
};

export default Result;
