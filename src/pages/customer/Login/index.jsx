import React, { useState } from 'react';
import './style.css';
import BannerAuthImage from '../../../assets/auth-image.png';
import Logo from '../../../components/customer/Logo';
import { Link } from 'react-router-dom';

const Login = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  //   console.log(form);
  return (
    <div className="wrapper-auth">
      <div className="form-auth-wrap">
        <div className="form-auth">
          <Logo />
          <h1>Welcome Back!</h1>
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
              type="text"
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
        <h1>BINAR CAR RENTAL</h1>
        <div className="img-auth">
          <img src={BannerAuthImage}></img>
        </div>
      </div>
    </div>
  );
};

export default Login;
