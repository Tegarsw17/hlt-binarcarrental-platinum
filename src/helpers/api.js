import axios from 'axios';
import { store } from '../reduxToolkit/store';

const axiosCustomer = axios.create();

axiosCustomer.interceptors.request.use(
  (config) => {
    if (config.useAuth) {
      const state = store.getState();
      const token = state.authReducer.access_token;
      if (token) {
        config.headers['access_token'] = `${token}`;
      } else {
        console.warn('No token found in localStorage');
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosCustomer.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      const currentPath = window.location.pathname + window.location.search;
      window.location.href = `/login?redirect=${encodeURIComponent(currentPath)}`;
    }
    return Promise.reject(error);
  }
);

export { axiosCustomer };
