import { createContext } from "react";
import { EUITheme } from "..";

interface ThemeContextProps {
  theme: EUITheme;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light"
});

const ThemeProvider = ThemeContext.Provider;

export { ThemeContext, ThemeProvider };
