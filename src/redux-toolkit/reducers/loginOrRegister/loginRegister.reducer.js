import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginTab: true,
};

const loginOrRegisterSlice = createSlice({
  name: 'loginOrRegisterTab',
  initialState,
  reducers: {
    changeLoginOrRegister: (state, action) => {
      const { loginTab } = action.payload;
      state.loginTab = loginTab;
    },
  },
});
// Three arguments
// name - jut the name of the reducer. this will be the key in the store
// an object the the initial state
// the reducers - an object, We define multiple functions to add user data to the store or delete or update. we will get the payload. now we need to set the payload to the state, so we do state.loginTab = loginTab. OOnce called just pas in the payload

// exports
// we export the action - dispatch an action for this
export const { changeLoginOrRegister } = loginOrRegisterSlice.actions;

// to use the actual reducer in the tore we export this reducer right here
export default loginOrRegisterSlice.reducer;
