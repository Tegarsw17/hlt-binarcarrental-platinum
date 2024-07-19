import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useRegister = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      role: 'customer',
    };
    try {
      const apiURL =
        'https://api-car-rental.binaracademy.org/customer/auth/register';
      const res = await axios.post(apiURL, payload);
      setError(null);
      setSuccess(res.statusText);
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (error) {
      setSuccess(null);
      setError(error.response.data.message);
    }
  };
  return { error, success, handleOnChange, handleSubmit };
};

export default useRegister;
