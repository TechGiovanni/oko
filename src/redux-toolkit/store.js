import { configureStore } from '@reduxjs/toolkit';

// import the reducers
// LoginTab
import loginOrRegisterReducer from '@redux/reducers/loginOrRegister/loginRegister.reducer';

// Login Modal
import authModalReducer from '@redux/reducers/loginModal/loginModal.reducer';

export const store = configureStore({
  reducer: {
    loginOrRegisterTab: loginOrRegisterReducer,
    authModalName: authModalReducer,
  },
});
