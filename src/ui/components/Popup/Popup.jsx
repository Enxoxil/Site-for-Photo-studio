import React, {cloneElement} from 'react';
import {createPortal} from "react-dom";
import Backdrop from "./Backdrop/Backdrop";

const Popup = props => {
    const {toggleShowPopup, isShowPopup} = props;
    const children = cloneElement(props.children, {
        toggleShowPopup, isShowPopup
    });
    return (
        <>
            {isShowPopup && createPortal(<Backdrop
                toggleShowPopup={toggleShowPopup}/>, document.querySelector('#backdrop-root'))};
            {isShowPopup && createPortal(children, document.querySelector('#modal-root'))}
        </>
    );
};

export default Popup;