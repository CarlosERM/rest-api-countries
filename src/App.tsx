import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useMyContext } from './context';
import { GlobalStyle } from './styles/GlobalStyles';
import themeDark from './styles/themeDark';
import themeLight from './styles/themeLight';
import Template from './template';

const App = () => {
  const [theme, setTheme] = useState(themeLight);
  const { toggle } = useMyContext();

  React.useEffect(() => {
    if (toggle) {
      setTheme(themeDark);
    } else {
      setTheme(themeLight);
    }
  }, [toggle]);
  return (
    <ThemeProvider theme={theme}>
      <Template />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
