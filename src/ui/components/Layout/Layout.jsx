import { useLayoutEffect } from 'react';
import cn from 'classnames';
import classes from './Layout.module.scss';
import { useTheme } from '../../../hooks/useTheme';

const Layout = ({ children }) => { 
  const { theme } = useTheme();

  useLayoutEffect(() => {
    document.documentElement.classList.remove('theme-light', 'theme-dark');
    document.documentElement.classList.add(`theme-${theme}`);
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  return (
      <div className={cn(classes.layout, theme === 'dark' ? classes.dark : classes.light)}>
          { children }
      </div>
  );
};

export default Layout;
