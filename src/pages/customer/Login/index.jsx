import React, { useEffect, useState } from 'react';
import './style.css';
import BannerAuthImage from '../../../assets/auth-image.png';
import Logo from '../../../components/customer/Logo';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../../reduxToolkit/features/customer-auth/loginSlice';
import AuthTemplate from '../../../components/customer/AuthTemplate';

const Login = () => {
  const [error, setError] = useState(null);
  const [tokens, setTokens] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
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
    const payload = { ...form };
    const apiURL =
      // 'https://api-car-rental.binaracademy.org/customer/auth/login';
      'https://nest-car-rent.onrender.com/auth/login';
    // 'http://localhost:3100/auth/login';
    try {
      const res = await axios.post(apiURL, payload);
      setError(null);
      setTokens(res.data.access_token);
      const token = res.data.access_token;
      dispatch(setToken(token));
      const urlParams = new URLSearchParams(window.location.search);
      const redirectUrl = urlParams.get('redirect') || '/';
      setTimeout(() => {
        navigate(redirectUrl);
      }, 1000);
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  const accessToken = useSelector((state) => state.authReducer.access_token);

  useEffect(() => {
    if (accessToken) {
      navigate('/');
    }
  }, [accessToken]);

  return (
    <AuthTemplate>
      <h1>Welcome Back!</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {tokens && <Alert variant="success">Login Success</Alert>}
      <div className="form-auth-content">
        <label htmlFor="email">Email</label>
        <input
          onChange={handleOnChange}
          name="email"
          id="email"
          placeholder="Contoh: johndee@gmail.com"
          type="text"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={handleOnChange}
          id="password"
          name="password"
          placeholder="6+ karakter"
          type="password"
        />
      </div>
      <button onClick={handleSubmit}>Sign In</button>
      <p>
        Don't have an account? <Link to={'/register'}>Sign Up for free</Link>
      </p>
    </AuthTemplate>
  );
};

export default Login;
