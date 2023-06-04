import React from 'react';
// import { useDispatch } from 'react-redux';
import MainScreen from './MainScreen';
import Popup from '../../ui/components/Popup/Popup';
import MainPopup from '../Popups/MainPopup/MainPopup';
// import { sendClient } from '../../BLL/slices/formApi (old ver. for RTK)/formApi (old ver. for RTK).reducer';
import { usePopup } from '../../hooks/usePopup';
import { useAddNewUserMutation } from '../../BLL/slices/form/apis/AddNewUserApi';

const MainScreenContainer = () => {
  // const dispatch = useDispatch();
  const { isShowPopup, toggleShowPopup } = usePopup();
  const [addUser] = useAddNewUserMutation();
  const formHandler = (data) => {
    addUser(data);
    // dispatch(sendClient(data));
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
