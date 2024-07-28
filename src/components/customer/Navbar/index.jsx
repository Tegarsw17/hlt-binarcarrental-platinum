import React, { useEffect, useState } from 'react';
import './style.css';
import Logo from '../Logo';
import { navbarLink } from '../../../utils/dummyData';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { clearToken } from '../../../reduxToolkit/features/customer-auth/loginSlice';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(null);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.authReducer.access_token);

  const logout = () => {
    dispatch(clearToken());
    setIsLogin(false);
  };
  const register = () => {
    navigate('/register');
  };

  useEffect(() => {
    if (accessToken) {
      setIsLogin(true);
    }
  });

  return (
    <div className="navbar-wrapper">
      <div className="navbar-cust">
        <Link to={'/'}>
          <Logo />
        </Link>
        <div className={`navbar-link ${menuOpen ? 'open' : ''}`}>
          <h3 className="logoname">Driveaway</h3>
          {navbarLink.map((item, index) => (
            <a key={index} href={'#' + item.id_name} onClick={toggleMenu}>
              {item.title}
            </a>
          ))}
          {isLogin ? (
            <button onClick={logout} className="logout-button">
              Logout
            </button>
          ) : (
            <button onClick={register} className="register-button">
              Register
            </button>
          )}
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
