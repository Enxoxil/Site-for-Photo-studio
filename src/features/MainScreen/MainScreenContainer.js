import React, {Component} from 'react';
import withPopup from "../../HOC/WithPopup";
import MainScreen from "./MainScreen";
import Popup from "../../ui/components/Popup/Popup";
import MainPopup from "../Popups/MainPopup/MainPopup";


class MainScreenContainer extends Component {

    render() {
        const {toggleShowPopup, isShowPopup} = this.props;
        return (
            <>
                <MainScreen toggleShowPopup={toggleShowPopup}/>
                <Popup toggleShowPopup={toggleShowPopup} isShowPopup={isShowPopup}>
                    <MainPopup/>
                </Popup>
            </>
        );
    }
}

export default withPopup(MainScreenContainer);