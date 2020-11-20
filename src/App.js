import React from "react";
import Countries from "./Countries";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./style/theme.style";
import { GlobalStyles } from "./style/global.style";
import { useDarkMode } from "./helper/useDarkMode";

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div>
        <Countries toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
