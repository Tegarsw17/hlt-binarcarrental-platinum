import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../reduxToolkit/features/customer-auth/loginSlice';

const useLogin = () => {
  const [error, setError] = useState(null);
  const [tokens, setTokens] = useState(null);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...form };
    const apiURL =
      'https://api-car-rental.binaracademy.org/customer/auth/login';
    try {
      const res = await axios.post(apiURL, payload);
      setError(null);
      setTokens(res.data.access_token);
      const token = res.data.access_token;
      dispatch(setToken(token));
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return { tokens, error, handleOnChange, handleSubmit };
};

export default useLogin;
