import React from "react";
import styled from "styled-components";
import AppProvider from "./Context/AppContext";
import GameBoard from "./GameBoard";
import Header from "./Header";
import RulesButton from "./RulesButton";

const StyledApp = styled.main`
  background-image: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  min-width: 100vw;
  min-height: 100vh;
  padding: 3rem;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppProvider>
      <StyledApp>
        <Header />
        <GameBoard />
        <RulesButton />
      </StyledApp>
    </AppProvider>
  );
}

export default App;
