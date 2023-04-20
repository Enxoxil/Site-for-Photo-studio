import React, {Component} from 'react';
import withPopup from "../../HOC/WithPopup";
import MainScreen from "./MainScreen";
import Popup from "../../ui/components/Popup/Popup";
import MainPopup from "../Popups/MainPopup/MainPopup";
import {api} from "../../DAL/Api/api";

class MainScreenContainer extends Component {

    formHandler = (data) => {
        this.setState({...this.state, data});
        this.props.toggleShowPopup();
        api.saveUser(data);
        console.log('Thank you! Your data was send to Firebase :', data)
    }

    render() {
        //Props will take HOC
        const {toggleShowPopup, isShowPopup} = this.props;
        return (
            <>
                <MainScreen toggleShowPopup={toggleShowPopup}/>
                <Popup toggleShowPopup={toggleShowPopup} isShowPopup={isShowPopup}>
                    <MainPopup formHandler={this.formHandler}/>
                </Popup>
            </>
        );
    }
}

//HOC withPopup will add state for argument (component) method closure
export default withPopup(MainScreenContainer);
