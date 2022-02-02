// UseContext test, as boilerplate for later use. Tutorial:
// https://designcode.io/react-hooks-handbook-usecontext-hook

import React, { useState, createContext, useContext } from 'react';

// Setting up the light and dark theme. We use them for setting
// or changing the initial (default) theme of the app
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

// Setting up the initial theme of the app
const initialState = {
  theme: themes.light,
  setTheme: () => {},
};

// Setting up the Context. Initial/default state is needed.
const ThemeContext = createContext(initialState);

// Exporting the provider to wrap the app/component wanted.
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// needs comment
const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default useTheme;
