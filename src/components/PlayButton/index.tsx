import React from "react";
import styled, { css } from "styled-components";
import PlayButtonType from "../../Helper/PlayButtonType";

const boxShadow = (color: string): string => {
  return `inset 0 4px 0px 0px #b4b4b4, 0px 5px ${color}`;
};

const StyledPlayButton = styled.button<IProps>`
  padding: 2rem 2.5rem;
  cursor: pointer;
  background-color: var(--backgroundColor);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  border: 15px solid transparent;
  border-radius: 50%;

  &:active {
    outline: none;
    transform: scale(.95);
  }

  ${(props) => {
    if (props.buttonType === PlayButtonType.PAPER) {
      return css`
        border-color: var(--paperGradient2);
        box-shadow: ${boxShadow("var(--paperGradient1)")};
      `;
    }
  }}
`;

interface IProps {
  buttonType?: PlayButtonType;
}

const PlayButton = ({ buttonType = PlayButtonType.PAPER }: IProps) => {
  return (
    <StyledPlayButton {...{ buttonType }}>
      <img src="./img/icon-paper.svg" alt="paper icon" />
    </StyledPlayButton>
  );
};

export default PlayButton;
