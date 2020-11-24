import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0;
    font-family: proxima-nova, Tahoma, Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyles;
