import React from 'react';
import './style.css';
const WhyUsCard = ({ icon, title, desc, color }) => {
  return (
    <div className="whyus-list-item">
      <div className="whyus-list-item-img" style={{ backgroundColor: color }}>
        <img src={icon}></img>
      </div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default WhyUsCard;
