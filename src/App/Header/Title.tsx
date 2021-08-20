import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  color: #fff;
  text-transform: uppercase;
  line-height: 0.8;
  font-size: ${"clamp(2.2rem, 2.5vw, 3rem)"};
  padding-left: 2.5rem;
`;

const Title = () => {
  return (
    <StyledTitle>
      <div>Rock</div>
      <div>Paper</div>
      <div>Scissors</div>
    </StyledTitle>
  );
};

export default Title;
