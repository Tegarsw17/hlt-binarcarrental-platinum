import React from 'react';
import './style.css';
import { ourServiceData } from '../../../utils/dummyData';
import WomanImage from '../../../assets/woman_image.png';
const OurService = ({ id }) => {
  return (
    <div id={id} className="our-service-wrapper">
      <div className="our-service">
        <div className="our-service-image">
          {/* <div className="our-service-bacground-circle"></div>
          <img src={GirlImage}></img>
          <div className="our-service-circle green"></div>
          <div className="our-service-circle yellow"></div>
          <div className="our-service-circle red"></div> */}
          <img src={WomanImage}></img>
        </div>
        <div className="our-service-text">
          <h3>Best Car Rental for any kind of trip in Bandung!</h3>
          <p>
            Sewa mobil di Jakarta bersama Binar Car Rental jaminan harga lebih
            murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
            pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
            dll.
          </p>
          <ul className="our-service-list">
            {ourServiceData.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurService;
