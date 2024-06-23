import React from 'react';
import './style.css';
import LogoImage from '../../../assets/logo.png';
const Logo = () => {
  return (
    <div className="logo">
      <img src={LogoImage}></img>
    </div>
  );
};

export default Logo;
