import React from 'react';
import './style.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="user-info">
        <span>Unis Badri</span>
      </div>
    </div>
  );
}

export default Navbar;
