import React, {cloneElement, Component} from 'react';
import {createPortal} from "react-dom";
import Backdrop from "./Backdrop/Backdrop";

class Popup extends Component {
    render() {
        const {toggleShowPopup, isShowPopup} = this.props;
        const children = cloneElement(this.props.children, {
            toggleShowPopup, isShowPopup
        });
        return (
            <>
                {isShowPopup && createPortal( <Backdrop
                    toggleShowPopup={toggleShowPopup}/>, document.querySelector('#backdrop-root'))};
                {isShowPopup && createPortal(children, document.querySelector('#modal-root'))}
            </>
        );
    }
}

export default Popup;