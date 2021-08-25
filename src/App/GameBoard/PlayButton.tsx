import React, { HTMLProps } from "react";
import styled, { css } from "styled-components";
import PlayButtonType from "../../Helper/PlayButtonType";

const boxShadow = (color: string): string => {
  return `inset 0 4px 0px 0px #b4b4b4, 0px 5px ${color}`;
};

const playButtonAttributes = {
  [PlayButtonType.PAPER]: {
    style: css`
      border-color: var(--paperGradient2);
      box-shadow: ${boxShadow("var(--paperGradient1)")};
      grid-area: paperButton;
    `,
    imageLink: "icon-paper.svg",
    imageAlt: "paper play button",
  },
  [PlayButtonType.ROCK]: {
    style: css`
      border-color: var(--rockGradient2);
      box-shadow: ${boxShadow("var(--rockGradient1)")};
      grid-area: rockButton;
    `,
    imageLink: "icon-rock.svg",
    imageAlt: "rock play button",
  },
  [PlayButtonType.SCISSORS]: {
    style: css`
      border-color: var(--scissorsGradient2);
      box-shadow: ${boxShadow("var(--scissorsGradient1)")};
      grid-area: scissorsButton;
    `,
    imageLink: "icon-scissors.svg",
    imageAlt: "scissors play button",
  },
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
    return playButtonAttributes[props.buttonType].style;
  }}
`;

interface IProps extends HTMLProps<HTMLButtonElement> {
  buttonType: PlayButtonType;
}

const PlayButton = ({ buttonType, ...props }: IProps) => {
  return (
    // @ts-ignore
    <StyledPlayButton {...{ buttonType }} {...props}>
      <img
        src={`./img/${playButtonAttributes[buttonType].imageLink}`}
        alt={playButtonAttributes[buttonType].imageAlt}
      />
    </StyledPlayButton>
  );
};

export default PlayButton;
