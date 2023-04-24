import React from 'react';
import withPopup from "../../HOC/WithPopup";
import MainScreen from "./MainScreen";
import Popup from "../../ui/components/Popup/Popup";
import MainPopup from "../Popups/MainPopup/MainPopup";
import {api} from "../../DAL/Api/api";

const MainScreenContainer = ({toggleShowPopup, isShowPopup}) => {
    const formHandler = (data) => {
        toggleShowPopup();
        api.saveUser(data);
        console.log('Thank you! Your data was send to Firebase :', data)
    }

    return (
        <>
            <MainScreen toggleShowPopup={toggleShowPopup}/>
            <Popup toggleShowPopup={toggleShowPopup} isShowPopup={isShowPopup}>
                <MainPopup formHandler={formHandler}/>
            </Popup>
        </>
    );
}

export default withPopup(MainScreenContainer);
