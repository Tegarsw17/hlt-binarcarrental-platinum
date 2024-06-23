import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { formatRupiah, formatSizeCar } from '../../../utils/formatUtil';
import NoImage from '../../../assets/no-image.png';
import { detailCar } from '../../../utils/dummyData';

const CarDetailCard = ({ data }) => {
  return (
    <div className="car-detail-wrapper">
      <div className="car-detail">
        <div className="car-detail-text">
          <p>{detailCar.title}</p>
          <div>
            <p>{detailCar.include.title}</p>
            <ul>
              {detailCar.include.data.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p>{detailCar.exclude.title}</p>
            <ul>
              {detailCar.exclude.data.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p>{detailCar.refund.title}</p>
            <ul>
              {detailCar.refund.data.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="car-detail-image">
          <div className="car-image-detail" style={{ padding: '28px 0px' }}>
            <img src={data.image ? data.image : NoImage}></img>
          </div>
          <p>{data.name ? data.name : '-'}</p>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <p>{formatSizeCar(data.category)}</p>
          </div>
          <div>
            <p>Total</p>
            <p>{formatRupiah(data.price)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailCard;
