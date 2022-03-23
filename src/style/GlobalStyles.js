import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100vh;
    font-family: 'Open Sans', 'Merriweather', 'Outfit', sans-serif;
    -webkit-font-smoothing: antialiased;
    text-shadow: 1.5px 1.5px 7px #000000;
  }

`;
