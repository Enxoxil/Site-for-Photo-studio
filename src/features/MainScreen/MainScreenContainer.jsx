import React from 'react';
import { useDispatch } from 'react-redux';
import withPopup from '../../HOC/WithPopup';
import MainScreen from './MainScreen';
import Popup from '../../ui/components/Popup/Popup';
import MainPopup from '../Popups/MainPopup/MainPopup';
import { sendClient } from '../../BLL/reducers/form/form.reducer';

const MainScreenContainer = ({ toggleShowPopup, isShowPopup }) => {
  const dispatch = useDispatch();
  const formHandler = (data) => {
    dispatch(sendClient(data));
    toggleShowPopup();
    console.log('Thank you! Your data was send to Firebase :', data);
  };

  return (
      <>
          <MainScreen toggleShowPopup={toggleShowPopup} />
          <Popup toggleShowPopup={toggleShowPopup} isShowPopup={isShowPopup}>
              <MainPopup formHandler={formHandler} />
          </Popup>
      </>
  );
};

export default withPopup(MainScreenContainer);
