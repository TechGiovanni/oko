import { configureStore } from '@reduxjs/toolkit';

// import the reducer
import loginOrRegisterReducer from '@redux/reducers/loginOrRegister/loginRegister.reducer';

export const store = configureStore({
  reducer: {
    loginOrRegisterTab: loginOrRegisterReducer,
  },
});
