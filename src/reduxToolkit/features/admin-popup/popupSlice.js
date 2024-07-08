import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisible: false,
  idCar: null,
};

const popupSlice = createSlice({
  name: 'popupSlice',
  initialState,
  reducers: {
    showPopupDelete: (state, action) => {
      state.isVisible = true;
      state.idCar = action.payload;
    },
    hidePopupDelete: (state) => {
      state.isVisible = false;
      state.idCar = null;
    },
  },
});

export const { showPopupDelete, hidePopupDelete } = popupSlice.actions;
export default popupSlice.reducer;
