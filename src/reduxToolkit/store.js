import { configureStore } from '@reduxjs/toolkit';
import listSlice from './features/admin-list/listSlice';
import popupSlice from './features/admin-popup/popupSlice';
import deletecarSlice from './features/admin-deletecar/deletecarSlice';
import authSlices from './features/customer-auth/loginSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
};

const authReducer = persistReducer(persistConfig, authSlices);

const store = configureStore({
  reducer: { listSlice, popupSlice, deletecarSlice, authReducer },
});

const persistor = persistStore(store);

export { store, persistor };
