import React, { useContext } from "react";
import { useTransition } from "react-spring";
import { AppContext } from "../Context/AppContext";
import Choices from "./Choices";
import Result from "./Result";

const GameBoard = () => {
  const { showResult } = useContext(AppContext);
  const transition = useTransition(showResult, {
    from: { x: 0, y: 100, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: 100, display: "none" },

  });

  return transition((style, wasPlayed) =>
    wasPlayed ? <Result style={style} /> : <Choices style={style} />
  );
};

export default GameBoard;
