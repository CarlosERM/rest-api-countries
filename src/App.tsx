import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyles';
import themeLight from './styles/themeLight';
import Template from './template';

const App = () => {
  return (
    <ThemeProvider theme={themeLight}>
      <Template />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
