import { configureStore } from '@reduxjs/toolkit';
import orderreportSlice from './features/admin-orderreport/orderreportSlice';
import listSlice from './features/admin-list/listSlice';
import popupSlice from './features/admin-popup/popupSlice';
import navbarReducer from './features/admin-navbar/navbarSlice';
import deletecarSlice from './features/admin-deletecar/deletecarSlice';
<<<<<<< HEAD
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
=======
import listOrderSlice from './features/admin-listorder/listOrderSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'navbarStatus',
  storage,
};

const navbarSlice = persistReducer(persistConfig, navbarReducer);

const store = configureStore({
  reducer: {
    orderreportSlice,
    navbarSlice,
    listSlice,
    popupSlice,
    deletecarSlice,
    listOrderSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
>>>>>>> dev
});

const persistor = persistStore(store);

export { store, persistor };
