import React, { useState } from 'react';
import './style.css';
import BannerAuthImage from '../../../assets/auth-image.png';
import Logo from '../../../components/customer/Logo';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert } from 'react-bootstrap';

const Login = () => {
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
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
      'https://api-car-rental.binaracademy.org/customer/auth/login';
    try {
      const res = await axios.post(apiURL, payload);
      setError(null);
      setToken(res.data.access_token);
      const token = res.data.access_token;
      localStorage.setItem('access_token', token);
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="wrapper-auth">
      <div className="form-auth-wrap">
        <div className="form-auth">
          <Logo />
          <h1>Welcome Back!</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          {token && <Alert variant="success">Login Success</Alert>}
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
            Don't have an account?{' '}
            <Link to={'/register'}>Sign Up for free</Link>
          </p>
        </div>
      </div>
      <div className="banner-auth">
        <div className="banner-auth-content">
          <h1>BINAR CAR RENTAL</h1>
          <div className="img-auth">
            <img src={BannerAuthImage}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
