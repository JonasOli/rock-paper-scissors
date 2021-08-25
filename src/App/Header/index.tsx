import React from "react";
import styled from "styled-components";
import Score from "./Score";
import Title from "./Title";

const StyledHeader = styled.header`
  align-items: center;
  border: 3px solid var(--headerOutline);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  width: ${"min(100%, 70rem)"};
  align-self: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Title />
      <Score />
    </StyledHeader>
  );
};

export default Header;
