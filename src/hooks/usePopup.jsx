import { useContext } from 'react';
import { PopupContext } from '../BLL/context/popupProvider';

export const usePopup = () => {
  const value = useContext(PopupContext);
  return value;
};
