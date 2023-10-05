import React, { createContext, useState,  Children } from "react";

const themes = {
  light: {
    backgroundColor: "#ffffff",
    textColor: "#000000",
  },
  dark: {
    backgroundColor: "#333333",
    textColor: "#ffffff",
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {Children.toArray(children)}
    </ThemeContext.Provider>
  );
};
