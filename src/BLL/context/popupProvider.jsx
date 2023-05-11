import { createContext, useMemo, useState } from 'react';

export const PopupContext = createContext({
  isShowPopup: false,
});

export const PopupProvider = ({ children }) => {
  const [isShowPopup, setIsShowPopup] = useState(false);
  const toggleShowPopup = () => {
    setIsShowPopup(!isShowPopup);
  };
  const value = useMemo(() => ({
    isShowPopup,
    toggleShowPopup,
  }), [isShowPopup]);
  return (
      <PopupContext.Provider value={value}>
          {children}
      </PopupContext.Provider>
  );
};
