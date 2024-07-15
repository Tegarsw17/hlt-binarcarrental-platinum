import { configureStore } from '@reduxjs/toolkit';
import listSlice from './features/admin-list/listSlice';
import popupSlice from './features/admin-popup/popupSlice';
import navbarSlice from './features/admin-navbar/navbarSlice';
import deletecarSlice from './features/admin-deletecar/deletecarSlice';
import listOrderSlice from './features/admin-listorder/listOrderSlice';
const store = configureStore({
  reducer: {
    navbarSlice,
    listSlice,
    popupSlice,
    deletecarSlice,
    listOrderSlice,
  },
});

export default store;
