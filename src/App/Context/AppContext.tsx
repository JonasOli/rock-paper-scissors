import { createContext, useState } from "react";

interface IContext {
  showResult: boolean;
  setShowResult: (togge: boolean) => void;
  score: number;
  setScore: (score: number) => void;
}

export const AppContext = createContext<IContext>({
  score: 0,
  showResult: false,
  setShowResult: () => {},
  setScore: () => {},
});

const AppProvider = ({ children }: { children: any }) => {
  const [showResult, setShowResult] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  return (
    <AppContext.Provider value={{ showResult, setShowResult, score, setScore }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
