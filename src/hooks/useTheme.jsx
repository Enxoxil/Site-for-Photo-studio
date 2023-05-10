import { useContext } from 'react';
import { ThemeContext } from '../BLL/context/themeProvider';

export const useTheme = () => {
  const value = useContext(ThemeContext);
  return value;
};
