import loginimg from '../../../assets/loginimg.png';
import React, { useEffect, useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setTokenAdmin } from '../../../reduxToolkit/features/admin-auth/loginAdminSlice';

function LoginAdmin() {
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

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...form };
    const apiURL = 'https://api-car-rental.binaracademy.org/admin/auth/login';
    try {
      const res = await axios.post(apiURL, payload);
      setError(null);
      setToken(res.data.access_token);
      const token = res.data.access_token;
      const role = res.data.role;
      if (role !== 'Admin') {
        setToken(null);
        setError('Anda bukan Admin');
      }
      if (role === 'Admin') {
        dispatch(setTokenAdmin(token));
        const urlParams = new URLSearchParams(window.location.search);
        const redirectUrl = urlParams.get('redirect') || '/admin/dashboard';
        setTimeout(() => {
          navigate(redirectUrl);
        }, 1000);
      }
      console.log(role);
    } catch (error) {
      setError(error?.response?.data.message);
    }
  };

  const accessAdmin = useSelector(
    (state) => state.authAdminReducer.access_token_admin
  );
  useEffect(() => {
    if (accessAdmin) {
      navigate('/admin/dashboard');
    }
  }, []);

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={loginimg} alt="Cars" />
      </div>
      <div className="login-form">
        <h2>Welcome, Admin BCR</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {token && <Alert variant="success">Login Success</Alert>}
        <form>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={handleOnChange}
              name="email"
              type="email"
              placeholder="Contoh: johndee@gmail.com"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              onChange={handleOnChange}
              name="password"
              type="password"
              placeholder="6+ karakter"
              className="form-control"
            />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginAdmin;
