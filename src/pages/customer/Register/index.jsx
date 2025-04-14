import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import AuthTemplate from '../../../components/customer/AuthTemplate';

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
        // 'https://api-car-rental.binaracademy.org/customer/auth/register';
        'https://nest-car-rent.onrender.com/auth/register';
      // 'http://localhost:3100/auth/register';
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

  const accessToken = useSelector((state) => state.authReducer.access_token);

  useEffect(() => {
    if (accessToken) {
      navigate('/');
    }
  }, [accessToken]);

  return (
    <AuthTemplate>
      <h1>Sign Up</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">account success created</Alert>}
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
          type="password"
        />
      </div>
      <button onClick={handleSubmit}>Sign Up</button>
      <p>
        Already have an account? <Link to={'/login'}>Sign In here</Link>
      </p>
    </AuthTemplate>
  );
};

export default Register;
