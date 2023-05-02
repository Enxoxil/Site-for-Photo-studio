import React, { cloneElement } from 'react';
import { createPortal } from 'react-dom';
import Backdrop from './Backdrop/Backdrop';

const Popup = (props) => {
  const { toggleShowPopup, isShowPopup, children } = props;
  const child = cloneElement(children, {
    toggleShowPopup, isShowPopup
  });
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      toggleShowPopup();
    }
  };
  
  return (
      <>
          {isShowPopup && createPortal(<Backdrop
            toggleShowPopup={toggleShowPopup}
            handleKeyDown={handleKeyDown}
          />, document.querySelector('#backdrop-root'))}
          ;
          {isShowPopup && createPortal(child, document.querySelector('#modal-root'))}
      </>
  );
};

export default Popup;
