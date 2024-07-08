import { configureStore } from '@reduxjs/toolkit';
import listSlice from './features/admin-list/listSlice';
import popupSlice from './features/admin-popup/popupSlice';
import deletecarSlice from './features/admin-deletecar/deletecarSlice';
const store = configureStore({
  reducer: { listSlice, popupSlice, deletecarSlice },
});

export default store;
