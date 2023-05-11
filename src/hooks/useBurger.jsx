import { useContext } from 'react';
import { BurgerContext } from '../BLL/context/burgerProvider';

export const useBurger = () => {
  const value = useContext(BurgerContext);
  return value;
};
