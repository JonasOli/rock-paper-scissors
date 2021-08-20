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
  margin: auto;
  width: ${"min(100%, 70rem)"};
`;

const Header = () => {
  return (
    <StyledHeader>
      <Title />
      <Score scoreCount={12} />
    </StyledHeader>
  );
};

export default Header;
