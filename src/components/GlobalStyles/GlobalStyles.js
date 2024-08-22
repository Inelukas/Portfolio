import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --primary-color: #973131;
    --secondary-color: #E0A75E;
    --background-color: #000000; //#151515
    --side-color: #F9D689;
    --shadow-color: rgba(151, 49, 49, 0.5);
    --text-color: #F5E7B2;
    --custom-image: url("https://www.transparenttextures.com/patterns/45-degree-fabric-light.png")
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  

  html, body {
    width: 100%;
    height: 100%;
    background-color: var(--background-color);
background-image: var(--custom-image);
    color: var(--text-color);
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

`;
