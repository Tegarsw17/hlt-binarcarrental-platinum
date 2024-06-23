import React from 'react';
import './style.css';
import { whyUsData } from '../../../utils/dummyData';
import WhyUsCard from '../WhyUsCard';

const WhyUs = ({ id }) => {
  return (
    <div id={id} className="whyus-wrapper">
      <div className="whyus">
        <h3 className="whyus-title">Why Us ?</h3>
        <p className="whyus-desc">Mengapa harus pilih Binar Car Rental?</p>
        <div className="whyus-list">
          {whyUsData.map((item, index) => (
            <WhyUsCard
              key={index}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
