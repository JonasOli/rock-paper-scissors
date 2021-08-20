import React from "react";
import styled from "styled-components";
import GameBoard from "./GameBoard";
import Header from "./Header";

const StyledApp = styled.main`
  background-image: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  min-width: 100vw;
  min-height: 100vh;
  padding: 3rem;
`;

function App() {
  return (
    <StyledApp>
      <Header />
      <GameBoard />
    </StyledApp>
  );
}

export default App;
