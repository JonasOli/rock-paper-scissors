import React from "react";
import styled, { css } from "styled-components";
import PlayButtonType from "../../Helper/PlayButtonType";

const boxShadow = (color: string): string => {
  return `inset 0 4px 0px 0px #b4b4b4, 0px 5px ${color}`;
};

const StyledPlayButton = styled.button<IProps>`
  width: ${"clamp(8.5rem, 10vw, 12rem)"};
  height: ${"clamp(8.5rem, 10vw, 12rem)"};
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
    transform: scale(0.95);
  }

  ${(props) => {
    if (props.buttonType === PlayButtonType.PAPER) {
      return css`
        border-color: var(--paperGradient2);
        box-shadow: ${boxShadow("var(--paperGradient1)")};
        grid-area: paperButton;
      `;
    }
    if (props.buttonType === PlayButtonType.ROCK) {
      return css`
        border-color: var(--rockGradient2);
        box-shadow: ${boxShadow("var(--rockGradient1)")};
        grid-area: rockButton;
      `;
    }
    if (props.buttonType === PlayButtonType.SCISSORS) {
      return css`
        border-color: var(--scissorsGradient2);
        box-shadow: ${boxShadow("var(--scissorsGradient1)")};
        grid-area: scissorsButton;
      `;
    }
  }}
`;

interface IProps {
  buttonType: PlayButtonType;
}

const PlayButton = ({ buttonType }: IProps) => {
  function getImageAtributes(): { link: string; alt: string } {
    switch (buttonType) {
      case PlayButtonType.PAPER:
        return { link: "icon-paper.svg", alt: "paper play button" };
      case PlayButtonType.ROCK:
        return { link: "icon-rock.svg", alt: "rock play button" };
      case PlayButtonType.SCISSORS:
        return { link: "icon-scissors.svg", alt: "scissors play button" };
    }
  }

  return (
    <StyledPlayButton {...{ buttonType }}>
      <img
        src={`./img/${getImageAtributes().link}`}
        alt={getImageAtributes().alt}
      />
    </StyledPlayButton>
  );
};

export default PlayButton;
