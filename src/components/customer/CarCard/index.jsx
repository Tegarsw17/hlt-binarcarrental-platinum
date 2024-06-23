import React from 'react';
import { formatRupiah } from '../../../utils/formatUtil';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import NoImage from '../../../assets/no-image.png';
const CarCard = ({ id, name, price, desc, image }) => {
  const altDesc =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.';
  const navigate = useNavigate();
  const handleButtonCar = () => {
    navigate(`/car/${id}`);
  };
  return (
    <div className="card-car">
      <div className="card-content">
        <div className="card-car-image">
          <img src={image ? image : NoImage}></img>
        </div>
        <div className="card-car-text">
          <p>{name ? name : '-'}</p>
          <p>{formatRupiah(price)} / hari</p>
          <p>{desc ? desc : altDesc}</p>
        </div>
      </div>
      <button onClick={handleButtonCar}>Pilih Mobil</button>
    </div>
  );
};

export default CarCard;
