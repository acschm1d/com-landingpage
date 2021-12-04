import React from 'react';
import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import { fontFace } from './lib/utils';
import settings from './lib/settings';
import { Landing, Header } from './components';

const fontVariants = settings.font.variants;

const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${fontVariants.map((fontFamily) =>
    fontFamily.variants.map(({ weight, style }) =>
      fontFace(fontFamily.name, weight, style)
    )
  )}
  * {
    box-sizing: content-box;
    -webkit-box-sizing: content-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: ${settings.font.family.text};
    font-size: 1.4rem;
    line-height: 1.79em;
    background-color: ${settings.color.blue};
    color: #fff;

    @media screen and (min-width: ${settings.breakpoints.s}) {
      font-size: 1.6rem;
    }

    @media screen and (min-width: ${settings.breakpoints.l}) {
      font-size: 2rem;
    }
  }
`;

const App = () => (
  <>
    <GlobalStyles />
    <Header />
    <Landing />
  </>
);

export default App;
