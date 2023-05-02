import React, { useEffect } from 'react';
import classes from './Backdrop.module.scss';

const Backdrop = ({ toggleShowPopup, handleKeyDown }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
  return <div onKeyDown={handleKeyDown} onClick={toggleShowPopup} className={classes.backdrop} />;
};

export default Backdrop;
