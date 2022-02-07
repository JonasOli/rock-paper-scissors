import React, { HTMLProps } from "react";
import styled, { css } from "styled-components";
import PlayButtonType from "../../Helper/PlayButtonType";

const boxShadow = (color: string): string => {
  return `inset 0 4px 0px 0px #b4b4b4, 0px 5px ${color}`;
};

const playButtonAttributes = {
  [PlayButtonType.ROCK]: {
    style: css`
      border-color: var(--rockGradient2);
      box-shadow: ${boxShadow("var(--rockGradient1)")};
      grid-area: rockButton;
    `,
    imageLink: "icon-rock.svg",
    imageAlt: "rock play button",
  },
  [PlayButtonType.PAPER]: {
    style: css`
      border-color: var(--paperGradient2);
      box-shadow: ${boxShadow("var(--paperGradient1)")};
      grid-area: paperButton;
    `,
    imageLink: "icon-paper.svg",
    imageAlt: "paper play button",
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
  transform: scale(1);

  &:active {
    outline: none;
    transform: scale(0.95);
  }

  ${(props) => {
    if (!!props.buttonType) return playButtonAttributes[props.buttonType].style;
  }}

  ${(props) => {
    if (props.winner) {
      return css`
        animation: pulse-effect 2s infinite;
      `;
    }
  }}

  @keyframes pulse-effect {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 30px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
`;

interface IProps extends HTMLProps<HTMLButtonElement> {
  buttonType: PlayButtonType;
  winner?: boolean;
}

const PlayButton = ({ buttonType, winner, ...props }: IProps) => (
  // @ts-ignore
  <StyledPlayButton {...{ buttonType, winner }} {...props} data-testid="play-button">
    <img
      src={`./img/${playButtonAttributes[buttonType]?.imageLink}`}
      alt={playButtonAttributes[buttonType]?.imageAlt}
    />
  </StyledPlayButton>
);

export default PlayButton;
