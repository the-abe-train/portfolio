import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

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

const initialTheme: Theme = { darkMode: false };

const initialThemeContext: ThemeContextType = {
  theme: initialTheme,
  setTheme: null,
};

export const ThemeContext =
  createContext<ThemeContextType>(initialThemeContext);

export const ThemeProvider = ({ children }: ProviderProps) => {
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
