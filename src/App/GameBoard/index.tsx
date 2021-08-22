import React from "react";
import styled from "styled-components";
import PlayButtonType from "../../Helper/PlayButtonType";
import PlayButton from "./PlayButton";

const StyledGameBoard = styled.div`
  display: grid;
  grid-column-gap: ${"clamp(1rem, 5vw, 7rem)"};
  grid-row-gap: ${"clamp(1rem, 5vw, 3rem)"};
  place-items: center;
  margin: auto;
  grid-template-areas:
    "paperButton rockButton"
    "scissorsButton scissorsButton";
`;

const GameBoard = () => {
  return (
    <StyledGameBoard>
      <PlayButton buttonType={PlayButtonType.ROCK} />
      <PlayButton buttonType={PlayButtonType.PAPER} />
      <PlayButton buttonType={PlayButtonType.SCISSORS} />
    </StyledGameBoard>
  );
};

export default GameBoard;
