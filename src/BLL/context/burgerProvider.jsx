import { createContext, useMemo, useState } from 'react';

export const BurgerContext = createContext({
  isShowBurger: false
});

export const BurgerProvider = ({ children }) => {
  const [isShowBurger, setIsShowBurger] = useState(false);
  const toggleIsShowBurger = () => {
    setIsShowBurger(!isShowBurger);
  };
  
  const value = useMemo(() => ({
    isShowBurger,
    toggleIsShowBurger,
  }), [isShowBurger]);

  return (
      <BurgerContext.Provider value={value}>
          {children}
      </BurgerContext.Provider>
  );
};
