import React from 'react';
import { useDispatch } from 'react-redux';
import MainScreen from './MainScreen';
import Popup from '../../ui/components/Popup/Popup';
import MainPopup from '../Popups/MainPopup/MainPopup';
import { sendClient } from '../../BLL/reducers/form/form.reducer';
import { usePopup } from '../../hooks/usePopup';

const MainScreenContainer = () => {
  const dispatch = useDispatch();
  const { isShowPopup, toggleShowPopup } = usePopup();
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

export default MainScreenContainer;
