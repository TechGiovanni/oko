import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authModalState: false,
};

const authModalTriggerSlice = createSlice({
  name: 'authModalName',
  initialState,
  reducers: {
    closeAuthModal: (state, action) => {
      const { authModalState } = action.payload;
      state.authModalState = authModalState;
    },
  },
});

export const { closeAuthModal } = authModalTriggerSlice.actions;
export default authModalTriggerSlice.reducer;
