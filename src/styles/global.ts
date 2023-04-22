import { Lato } from 'next/font/google';
import { createGlobalStyle, css } from 'styled-components';

const latoFont = Lato({ subsets: ['latin'], weight: ['400', '700', '900'] });

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}

body {
  ${({ theme }) => css`
    background: ${theme.colors.backgroundLight};
    color: ${theme.colors.text};
  `}
  font-family: ${latoFont.style.fontFamily};
  font-size: 1rem;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

input, button {
  font-weight: 400;
  font-size: 1rem;
  font-family: inherit;
  color: inherit;
}
`;
