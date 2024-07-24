import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  isActive: '',
  carName: '',
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
    setSearchCar: (state, action) => {
      state.carName = action.payload;
    },
  },
});

export const { showNavbar, setActive, setSearchCar } = navbarSlice.actions;
export default navbarSlice.reducer;
