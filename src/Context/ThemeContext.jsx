import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const defaultTheme = {
    color: '#333',
    backgroundColor: '#fff',
  };

  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    setTheme(prevTheme =>
      prevTheme === defaultTheme
        ? { color: '#fff', backgroundColor: '#333' }
        : defaultTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
