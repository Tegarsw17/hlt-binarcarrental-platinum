import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  access_token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.access_token = action.payload;
    },
    clearToken: (state) => {
      state.access_token = null;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
