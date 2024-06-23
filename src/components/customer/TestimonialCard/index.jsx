import React from 'react';
import './style.css';
const TestimonialCard = ({ image, rating, desc, name, age, address }) => {
  return (
    <div>
      <div className="testimonial-card">
        <div className="testimoial-card-image">
          <img src={image}></img>
        </div>
        <div className="testimonial-card-text">
          <p>{'★'.repeat(rating)}</p>
          <p>“{desc}”</p>
          <p>
            {name} {age}, {address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
