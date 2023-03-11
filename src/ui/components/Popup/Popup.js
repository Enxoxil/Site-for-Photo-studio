import React, {Component} from 'react';
import {createPortal} from "react-dom";
import Backdrop from "./Backdrop/Backdrop";

class Popup extends Component {
    render() {
        const {toggleShowPopup, isShowPopup} = this.props;
        return (
            <>
                {isShowPopup && createPortal( <Backdrop
                    toggleShowPopup={toggleShowPopup}/>, document.querySelector('#backdrop-root'))};
                {isShowPopup && createPortal(this.props.children, document.querySelector('#modal-root'))}
            </>
        );
    }
}

export default Popup;