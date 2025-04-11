import React, { useEffect, useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { formatRupiah, formatSizeCar } from '../../../utils/formatUtil';
import NoImage from '../../../assets/no-image.png';
import { detailCar } from '../../../utils/dummyData';
import { DateRangePicker } from 'react-date-range';
import { axiosCustomer } from '../../../helpers/api';
import { useNavigate } from 'react-router-dom';

const CarDetailCard = ({ data, id }) => {
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [form, setForm] = useState({
    start_rent_at: '',
    finish_rent_at: '',
    car_id: id,
  });

  const selectionRange = {
    startDate: form.start_rent_at ? new Date(form.start_rent_at) : new Date(),
    endDate: form.finish_rent_at ? new Date(form.finish_rent_at) : new Date(),
    key: 'selection',
  };
  const handleDateChange = (ranges) => {
    const { startDate, endDate } = ranges.selection;
    const dayDiff = (endDate - startDate) / (1000 * 60 * 60 * 24);
    if (dayDiff > 6) {
      setShowError(true);
      setErrorMessage('Rent duration cannot exceed 7 days.');
    } else {
      setShowError(false);
      setForm({
        ...form,
        start_rent_at: startDate.toLocaleDateString('en-CA'),
        finish_rent_at: endDate.toLocaleDateString('en-CA'),
      });
    }
  };
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      useAuth: true,
    };
    try {
      const response = await axiosCustomer.post(
        // 'https://api-car-rental.binaracademy.org/customer/order',
        // 'http://localhost:3100/order',
        'https://nest-car-rent.onrender.com/order',
        form,
        config
      );
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        navigate(`/payment/${response.data.id}`);
      }, 2000);
    } catch (error) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 2000);
    }
  };

  useEffect(() => {
    if (showCalendar) {
      const calendarWrapper = document.querySelector('.rdrCalendarWrapper');
      if (calendarWrapper) {
        const button = document.createElement('button');
        button.textContent = 'Pilih Tanggal';
        button.className = 'calender-button';
        button.onclick = () => {
          setShowCalendar(!showCalendar);
        };
        calendarWrapper.appendChild(button);
      }
    }
  }, [showCalendar]);

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
            <img src={data.imageUrl ? data.imageUrl : NoImage}></img>
          </div>
          <p>{data.name ? data.name : '-'}</p>
          <div className="car-detail-size">
            <FontAwesomeIcon icon={faUserGroup} />
            <p>{formatSizeCar(data.category)}</p>
          </div>
          <div className="car-detail-calender">
            {showError && (
              <div className="error-message-calender">
                <p>{errorMessage}</p>
              </div>
            )}
            <label htmlFor="calender">
              Tentukan lama sewa mobil(max. 7 hari)
            </label>
            <div className="calendar-input-wrapper">
              <input
                placeholder="Pilih tanggal mulai dan tanggal akhir sewa"
                type="text"
                name="calender"
                onClick={toggleCalendar}
                value={
                  form.start_rent_at && form.finish_rent_at
                    ? `${form.start_rent_at} - ${form.finish_rent_at}`
                    : ''
                }
                readOnly
              />
              {showCalendar && (
                <div className="car-detail-calender-show">
                  <DateRangePicker
                    className="custom-calender"
                    ranges={[selectionRange]}
                    onChange={handleDateChange}
                    rangeColors={['#35B0A7']}
                    minDate={new Date()}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="car-detail-price">
            <p>Total</p>
            <p>{formatRupiah(data.price)}</p>
          </div>
          <button
            disabled={form.start_rent_at && form.finish_rent_at ? false : true}
            onClick={handleSubmit}
            className="rent-button"
          >
            {showSuccess ? 'Loading ...' : 'Pilih Tanggal'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetailCard;
