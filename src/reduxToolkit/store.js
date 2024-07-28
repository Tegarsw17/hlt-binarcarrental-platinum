import { configureStore } from '@reduxjs/toolkit';
import orderreportSlice from './features/admin-orderreport/orderreportSlice';
import listSlice from './features/admin-list/listSlice';
import popupSlice from './features/admin-popup/popupSlice';
import navbarReducer from './features/admin-navbar/navbarSlice';
import authSlices from './features/customer-auth/loginSlice';
import authAdminSlices from './features/admin-auth/loginAdminSlice';
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
  authAdmin: {
    key: 'auth_admin',
    storage,
  },
};

const authAdminReducer = persistReducer(
  persistConfig.authAdmin,
  authAdminSlices
);

const authReducer = persistReducer(persistConfig.auth, authSlices);
const navbarSlice = persistReducer(persistConfig.navbarStatus, navbarReducer);

const store = configureStore({
  reducer: {
    orderreportSlice,
    navbarSlice,
    listSlice,
    popupSlice,
    listOrderSlice,
    authAdminReducer,
    authReducer,

    // searchSlice,
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
