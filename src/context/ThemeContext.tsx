import React, { createContext, ReactNode, useEffect, useState } from "react";
import useIsBrowser from "../hooks/useIsBrowser";
import useLocalStorage from "../hooks/useLocalStorage";

// Use context as follows:
// ThemeProvider > ThemeContext > themeContext > theme & setTheme

type ProviderProps = {
  children: ReactNode;
};

type Theme = {
  darkMode: boolean;
};

type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>> | null;
};

let initialTheme: Theme = { darkMode: false };

const initialThemeContext: ThemeContextType = {
  theme: initialTheme,
  setTheme: null,
};

export const ThemeContext =
  createContext<ThemeContextType>(initialThemeContext);

export const ThemeProvider = ({ children }: ProviderProps) => {
  const isBrowser = useIsBrowser();
  if (isBrowser) {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      initialTheme = { darkMode: true };
    }
  }

  const [storedTheme, storeTheme] = useLocalStorage<Theme>(
    "theme",
    initialTheme
  );

  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    storeTheme(theme);
  }, [storeTheme, theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
