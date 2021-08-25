import React, { useContext } from "react";
import { animated } from "react-spring";
import { AppContext } from "../Context/AppContext";

const Result = ({ style }: { style: any }) => {
  const { setShowResult } = useContext(AppContext);

  return (
    <animated.button style={style} onClick={() => setShowResult(false)}>
      Play again
    </animated.button>
  );
};

export default Result;
