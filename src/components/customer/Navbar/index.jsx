import React, { useState } from 'react';
import './style.css';
import Logo from '../Logo';
import { navbarLink } from '../../../utils/dummyData';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-wrapper">
      <div className="navbar">
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
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
