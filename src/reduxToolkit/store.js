import { configureStore } from '@reduxjs/toolkit';
import orderreportSlice from './features/admin-orderreport/orderreportSlice';
import listSlice from './features/admin-list/listSlice';
import popupSlice from './features/admin-popup/popupSlice';
import navbarReducer from './features/admin-navbar/navbarSlice';
import deletecarSlice from './features/admin-deletecar/deletecarSlice';
import authSlices from './features/customer-auth/loginSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import listOrderSlice from './features/admin-listorder/listOrderSlice';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  navbarStatus: {
    key: 'navbarStatus',
    storage,
  },
  auth: {
    key: 'auth',
    storage,
  },
};

const authReducer = persistReducer(persistConfig.auth, authSlices);

const navbarSlice = persistReducer(persistConfig.navbarStatus, navbarReducer);

const store = configureStore({
  reducer: {
    orderreportSlice,
    navbarSlice,
    listSlice,
    popupSlice,
    deletecarSlice,
    listOrderSlice,
    authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
