import React, { useState } from 'react';
// import './style.css';
import BannerAuthImage from '../../../assets/auth-image.png';
import Logo from '../../../components/customer/Logo';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
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
      console.log(res);
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (error) {
      setSuccess(null);
      setError(error.response.data.message);
      console.log(error.response.data.message);
    }
    // console.log(payload);
  };
  return (
    <div className="wrapper-auth">
      <div className="form-auth-wrap">
        <div className="form-auth">
          <Logo />
          <h1>Sign Up</h1>
          {error && <h2 style={{ color: 'red' }}>{error}</h2>}
          {success && <h2 style={{ color: 'green' }}>{success}</h2>}
          {/* <h2>ini tanda</h2> */}
          <div className="form-auth-content">
            <label htmlFor="name">Name*</label>
            <input
              onChange={handleOnChange}
              id="name"
              name="name"
              placeholder="Nama lengkap"
              type="text"
            />
            <label htmlFor="email">Email*</label>
            <input
              onChange={handleOnChange}
              id="email"
              name="email"
              placeholder="Contoh: johndee@gmail.com"
              type="text"
            />
            <label htmlFor="password">Create Password*</label>
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

export default Register;
