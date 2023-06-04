import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slices/form (old ver. for RTK)/form.reducer';
import { formApi } from './apis/formApi';

const store = configureStore({
  reducer: {
    [formApi.reducerPath]: formApi.reducer,
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(formApi.middleware)
});

export default store;
