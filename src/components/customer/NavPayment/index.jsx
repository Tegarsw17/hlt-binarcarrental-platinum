import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const NavPayment = ({ id, bank, step, prevStep }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const handleBackClick = () => {
    if (step === 0) {
      goBack();
    } else {
      prevStep();
    }
  };
  return (
    <div className="navpayment">
      <div className="navpayment-wrapper">
        <div className="navpayment-back" onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <div>
            <p className="navpayment-title">
              {step !== 0 ? bank.toUpperCase() + ' Transfer' : 'Pembayaran'}
            </p>
            <p className="navpayment-id">Order Id: {id}</p>
          </div>
        </div>
        <div className="navpayment-progres">
          <div className={`navpayment-progres-item ${step >= 0 && 'active'}`}>
            <div className="navpayment-circle">1</div>
            <p>Pilih Metode</p>
          </div>
          <div className="navpayment-list"></div>
          <div className={`navpayment-progres-item ${step >= 1 && 'active'}`}>
            <div className="navpayment-circle">2</div>
            <p>Bayar</p>
          </div>
          <div className="navpayment-list"></div>
          <div className={`navpayment-progres-item ${step === 2 && 'active'}`}>
            <div className="navpayment-circle">3</div>
            <p>Tiket</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavPayment;
