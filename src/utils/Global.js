/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { bbFonts } from './typography';
import '../styles/fonts.css';

export const GlobalStyle = createGlobalStyle`
${normalize()}
html {
  box-sizing: border-box;
  font-size: 16px;
}
*, 
*:before, 
*:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 20px;
  font-family: ${bbFonts.primaryFont};
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight:400;
}
main {
  width: 90%;
  margin: 0 auto;
}
`;
