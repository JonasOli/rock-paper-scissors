import { createContext, useState } from "react";
import PlayButtonType from "../../Helper/PlayButtonType";

interface IContext {
  showResult: boolean;
  setShowResult: (togge: boolean) => void;
  score: number;
  setScore: (score: number) => void;
  play: (choice: PlayButtonType) => void;
  yourPick: PlayButtonType;
  pcPick: PlayButtonType;
}

export const AppContext = createContext<IContext>({
  score: 0,
  showResult: false,
  setShowResult: () => {},
  setScore: () => {},
  play: () => {},
  yourPick: 0,
  pcPick: 0
});

const AppProvider = ({ children }: { children: any }) => {
  const [showResult, setShowResult] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [yourPick, setYourPick] = useState<PlayButtonType>(0);
  const [pcPick, setPcPick] = useState<PlayButtonType>(0);

  const play = (choice: PlayButtonType): void => {
    const randomChoiceByPC = randomIntFromInterval(0, 2);

    setYourPick(choice);
    setPcPick(randomChoiceByPC)
    setShowResult(true);
  };

  function randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <AppContext.Provider value={{ showResult, setShowResult, score, setScore, play, yourPick, pcPick }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
