import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  isActive: '',
};

const navbarSlice = createSlice({
  name: 'navbarSlice',
  initialState,
  reducers: {
    showNavbar: (state) => {
      state.isOpen = !state.isOpen;
    },
    setActive: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { showNavbar, setActive } = navbarSlice.actions;
export default navbarSlice.reducer;
