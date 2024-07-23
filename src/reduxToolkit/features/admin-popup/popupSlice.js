import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popUpDeleteVisible: false,
  idCar: null,
};

const popupSlice = createSlice({
  name: 'popupSlice',
  initialState,
  reducers: {
    showPopupDelete: (state, action) => {
      state.popUpDeleteVisible = true;
      state.idCar = action.payload;
    },
    hidePopupDelete: (state) => {
      state.popUpDeleteVisible = false;
      state.idCar = null;
    },
  },
});

export const { showPopupDelete, hidePopupDelete } = popupSlice.actions;
export default popupSlice.reducer;
