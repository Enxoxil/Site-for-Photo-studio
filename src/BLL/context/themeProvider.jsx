import { createContext, useMemo, useState } from 'react';
import { getTheme } from '../../Helpers/GetTheme';

export const ThemeContext = createContext({
  theme: ''
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);
  const toggleThemeHandler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  const value = useMemo(() => ({
    theme,
    toggleThemeHandler
  }), [theme]);

  return (
      <ThemeContext.Provider value={value}>
          {children}
      </ThemeContext.Provider>
  );
};
