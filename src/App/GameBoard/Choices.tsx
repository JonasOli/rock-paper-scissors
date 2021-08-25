import React, { useContext } from "react";
import { animated } from "react-spring";
import styled from "styled-components";
import PlayButtonType from "../../Helper/PlayButtonType";
import { AppContext } from "../Context/AppContext";
import PlayButton from "./PlayButton";

const StyledGameBoard = animated(styled.div`
  display: grid;
  grid-column-gap: ${"clamp(1rem, 5vw, 7rem)"};
  grid-row-gap: ${"clamp(1rem, 5vw, 3rem)"};
  place-items: center;
  margin: auto;
  grid-template-areas:
    "paperButton rockButton"
    "scissorsButton scissorsButton";
`);

const Choices = ({ style }: { style: any }) => {
  const { setShowResult } = useContext(AppContext);

  return (
    <StyledGameBoard style={style}>
      <PlayButton
        buttonType={PlayButtonType.ROCK}
        onClick={() => setShowResult(true)}
      />
      <PlayButton
        buttonType={PlayButtonType.PAPER}
        onClick={() => setShowResult(true)}
      />
      <PlayButton
        buttonType={PlayButtonType.SCISSORS}
        onClick={() => setShowResult(true)}
      />
    </StyledGameBoard>
  );
};

export default Choices;