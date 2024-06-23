import React from 'react';
import './style.css';
import Logo from '../Logo';
import { navbarLink, socialIcon } from '../../../utils/dummyData';
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="footer-contact">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className="footer-link">
          {navbarLink.map((item, index) => (
            <a key={index} href={'#' + item.id_name}>
              {item.title}
            </a>
          ))}
        </div>
        <div className="footer-social">
          <p>Connect with us</p>
          <div className="footer-social-list">
            {socialIcon.map((item, index) => (
              <button key={index}>
                <img src={item}></img>
              </button>
            ))}
          </div>
        </div>
        <div className="footer-copyright">
          <p>Copyright Binar 2022</p>
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Footer;
