import React from 'react';
import classes from './Backdrop.module.scss';

const Backdrop = props => {
    const {toggleShowPopup} = props;
    return <div onClick={toggleShowPopup} className={classes.backdrop}/>
};

export default Backdrop;