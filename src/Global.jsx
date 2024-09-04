import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`

  :root {
    --color-100: #5af6a3;
    --color-200: #44e392;
    --color-300: #2dd080;
    --color-400: #17bc6f;
    --color-500: #00a95d;
    --color-700: #26874E;

    --color-white: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica, sans-serif;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
  }
`;