import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyles";
import themeLight from "./styles/themeLight";

function App() {
  return (
    <>
      <ThemeProvider theme={themeLight}>
        <p>Hello World</p>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
