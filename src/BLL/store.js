import { configureStore } from '@reduxjs/toolkit';
import formReducer from './reducers/form/form.reducer';

const store = configureStore({
  reducer: { formReducer }
});

export default store;
