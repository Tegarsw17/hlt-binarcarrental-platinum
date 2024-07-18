import React from 'react';
import Logo from '../Logo';
import './style.css';
import BannerAuthImage from '../../../assets/auth-image.png';
const AuthTemplate = ({ children }) => {
  return (
    <>
      <div className="wrapper-auth">
        <div className="form-auth-wrap">
          <div className="form-auth">
            <Logo />
            {children}
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
    </>
  );
};

export default AuthTemplate;
