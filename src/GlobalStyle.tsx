import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    // Primary
    --scissorsGradient1: hsl(39, 89%, 49%);
    --scissorsGradient2: hsl(40, 84%, 53%);
    --paperGradient1: hsl(230, 89%, 62%);
    --paperGradient2: hsl(230, 89%, 65%);
    --rockGradient1: hsl(349, 71%, 52%);
    --rockGradient2: hsl(349, 70%, 56%);

    // Neutral
    --darkText: hsl(229, 25%, 31%);
    --scoreText: hsl(229, 64%, 46%);
    --headerOutline: hsl(217, 16%, 45%);

    --backgroundColor: hsl(0, 0%, 82%);
  }
  
  html {
    font-size: 62.5%;
    font-family: 'Barlow Semi Condensed', sans-serif;
  }

  /*************  RESET  *************/

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyle;
