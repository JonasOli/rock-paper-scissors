import { createContext, useEffect, useState } from "react";
import PlayButtonType from "../../Helper/PlayButtonType";
import Winner from "../../Helper/Winner";

interface IContext {
  showResult: boolean;
  score: number;
  yourPick: PlayButtonType | null;
  pcPick: PlayButtonType | null;
  winner: Winner | null;
  play: (choice: PlayButtonType) => void;
  resetValues: () => void;
}

export const AppContext = createContext<IContext>({
  score: 0,
  showResult: false,
  yourPick: null,
  pcPick: null,
  winner: null,
  play: () => {},
  resetValues: () => {},
});

const AppProvider = ({ children }: { children: any }) => {
  const [showResult, setShowResult] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [yourPick, setYourPick] = useState<PlayButtonType | null>(0);
  const [pcPick, setPcPick] = useState<PlayButtonType | null>(null);
  const [winner, setWinner] = useState<Winner | null>(null);

  useEffect(() => {
    if (!!pcPick) checkResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pcPick]);

  function play(choice: PlayButtonType): void {
    const randomChoiceByPC = randomIntFromInterval(1, 3);

    setYourPick(choice);
    setShowResult(true);
    setTimeout(() => {
      setPcPick(randomChoiceByPC);
    }, 2000);
  }

  function resetValues() {
    setYourPick(null);
    setPcPick(null);
    setWinner(null);
    setShowResult(false);
  }

  function checkResult() {
    if (yourPick === pcPick) {
      setWinner(Winner.DRAW);
    } else if (
      (yourPick === PlayButtonType.PAPER &&
        pcPick === PlayButtonType.SCISSORS) ||
      (yourPick === PlayButtonType.ROCK && pcPick === PlayButtonType.PAPER) ||
      (yourPick === PlayButtonType.SCISSORS && pcPick === PlayButtonType.ROCK)
    ) {
      setWinner(Winner.MACHINE);
    } else if (
      (yourPick === PlayButtonType.PAPER && pcPick === PlayButtonType.ROCK) ||
      (yourPick === PlayButtonType.ROCK &&
        pcPick === PlayButtonType.SCISSORS) ||
      (yourPick === PlayButtonType.SCISSORS && pcPick === PlayButtonType.PAPER)
    ) {
      setScore(score + 1);
      setWinner(Winner.PLAYER);
    }
  }

  function randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <AppContext.Provider
      value={{
        showResult,
        score,
        yourPick,
        pcPick,
        winner,
        play,
        resetValues,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
