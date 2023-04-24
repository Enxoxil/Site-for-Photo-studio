import React, {Component, useState} from 'react'

const withPopup = (WrapComponent) => () => {
    const [isShowPopupOn, setIsShowPopupOn] = useState(false);
    const toggle = () => {
        setIsShowPopupOn(prevState => !prevState);
    }
    return <WrapComponent isShowPopup={isShowPopupOn} toggleShowPopup={toggle}/>
}
export default withPopup;