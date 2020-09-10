import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../style/theme";
import { GlobalStyles } from "../style/global";
export const PortfolioContext = createContext();

const PortfolioProvider = ({ children }) => {
  const [dTheme, setDTheme] = useState(true);

  return (
    <PortfolioContext.Provider value={{ dTheme, setDTheme }}>
      <ThemeProvider theme={dTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
