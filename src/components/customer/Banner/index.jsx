import React from 'react';
import './style.css';
import CarImage from '../../../assets/mobil_banner.png';
import RentButton from '../RentButton';
const Banner = ({ id, isButtonShow = true }) => {
  return (
    <div className="banner-wrapper">
      <div id={id} className="banner">
        <div className="banner-text">
          <h1>Sewa & Rental Mobil Terbaik di kawasan Jakarta</h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          {isButtonShow && <RentButton link={'/search'} />}
        </div>
        <div className="banner-image">
          <div className="banner-image-background"></div>
          <img src={CarImage}></img>
        </div>
      </div>
    </div>
  );
};

export default Banner;
