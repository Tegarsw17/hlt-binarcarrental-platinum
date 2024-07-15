import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const navbarSlice = createSlice({
  name: 'navbarSlice',
  initialState,
  reducers: {
    showNavbar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { showNavbar } = navbarSlice.actions;
export default navbarSlice.reducer;
