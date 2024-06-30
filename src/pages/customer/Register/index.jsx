import React, { useState } from 'react';
// import './style.css';
import BannerAuthImage from '../../../assets/auth-image.png';
import Logo from '../../../components/customer/Logo';
import { Link } from 'react-router-dom';

const Register = () => {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div className="wrapper-auth">
      <div className="form-auth-wrap">
        <div className="form-auth">
          <Logo />
          <h1>Sign Up</h1>
          <div className="form-auth-content">
            <label htmlFor="">Name*</label>
            <input
              onChange={handleOnChange}
              id="name"
              name="name"
              placeholder="Nama lengkap"
              type="text"
            />
            <label htmlFor="">Email*</label>
            <input
              onChange={handleOnChange}
              id="email"
              name="email"
              placeholder="Contoh: johndee@gmail.com"
              type="text"
            />
            <label htmlFor="">Create Password*</label>
            <input
              onChange={handleOnChange}
              id="password"
              name="password"
              placeholder="6+ karakter"
              type="text"
            />
          </div>
          <button onClick={handleSubmit}>Sign Up</button>
          <p>
            Already have an account? <Link to={'/login'}>Sign In here</Link>
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

export default Register;
