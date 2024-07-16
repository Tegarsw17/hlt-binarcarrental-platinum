import { configureStore } from '@reduxjs/toolkit';
import listSlice from './features/admin-list/listSlice';
import popupSlice from './features/admin-popup/popupSlice';
import navbarReducer from './features/admin-navbar/navbarSlice';
import deletecarSlice from './features/admin-deletecar/deletecarSlice';
import listOrderSlice from './features/admin-listorder/listOrderSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'navbarStatus',
  storage,
};

const navbarSlice = persistReducer(persistConfig, navbarReducer);

const store = configureStore({
  reducer: {
    navbarSlice,
    listSlice,
    popupSlice,
    deletecarSlice,
    listOrderSlice,
  },
});

const persistor = persistStore(store);

export { store, persistor };
