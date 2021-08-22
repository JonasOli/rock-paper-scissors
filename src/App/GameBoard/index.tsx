import React from "react";
import styled from "styled-components";
import PlayButton from "../../components/PlayButton";
import PlayButtonType from "../../Helper/PlayButtonType";

const StyledGameBoard = styled.div`
  display: grid;
  grid-template-areas:
    "playButton1 . playButton2"
    ". playButton3 .";
`;

const GameBoard = () => {
  return (
    <StyledGameBoard>
      <PlayButton buttonType={PlayButtonType.ROCK} />
      <PlayButton buttonType={PlayButtonType.PAPER} />
      <PlayButton buttonType={PlayButtonType.SCISSOR} />
    </StyledGameBoard>
  );
};

export default GameBoard;
