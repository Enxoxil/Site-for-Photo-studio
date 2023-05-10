import { createContext, useMemo, useState } from 'react';

export const PopupContext = createContext({
  isShowPopup: false
});

export const PopupProvider = ({ children }) => {
  const [isShowPopup, setIsShowPopup] = useState(false);
  const value = useMemo(() => ({
    isShowPopup,
    setIsShowPopup
  }), [isShowPopup]);
  return (
      <PopupContext.Provider value={value}>
          {children}
      </PopupContext.Provider>
  );
};
