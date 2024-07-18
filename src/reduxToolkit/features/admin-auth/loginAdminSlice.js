import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  access_token_admin: null,
};

const authAdminSlice = createSlice({
  name: 'auth_admin',
  initialState,
  reducers: {
    setTokenAdmin: (state, action) => {
      state.access_token_admin = action.payload;
    },
    clearTokenAdmin: (state) => {
      state.access_token_admin = null;
    },
  },
});

export const { setTokenAdmin, clearTokenAdmin } = authAdminSlice.actions;

export default authAdminSlice.reducer;
