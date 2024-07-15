import axios from 'axios';

const axiosCustomer = axios.create();

axiosCustomer.interceptors.request.use(
  (config) => {
    if (config.useAuth) {
      const token = localStorage.getItem('access_token');
      if (token) {
        config.headers['access_token'] = `${token}`;
      } else {
        console.warn('No token found in localStorage');
      }
    }
    // console.log("Request config:", config); // Log the config for debugging
    return config;
  },
  (error) => {
    // console.error("Request error:", error);
    return Promise.reject(error);
  }
);

axiosCustomer.interceptors.response.use(
  (response) => {
    // navigate('/login');
    // console.log("Response data:", response.data);
    return response;
  },
  (error) => {
    // console.log("Response error:", error.response);
    if (error.response.status === 401) {
      console.log('anda tidak memiliki akses');
      window.location.href = '/login';
    }
    // console.error("Response error:", error.response);
    return Promise.reject(error);
  }
);

export { axiosCustomer };
