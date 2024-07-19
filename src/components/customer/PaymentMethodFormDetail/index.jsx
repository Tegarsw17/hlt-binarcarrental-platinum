import {
  faChevronDown,
  faChevronUp,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Accordion, Card, useAccordionButton } from 'react-bootstrap';
import './style.css';
import {
  formatRupiah,
  formatSizeCar,
  getDaysDifference,
} from '../../../utils/formatUtil';

const CustomToggle = ({ children, eventKey }) => {
  const [clicked, setClicked] = useState(false);
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    setClicked(!clicked);
  });

  return (
    <div className="custom-toggle" onClick={decoratedOnClick}>
      {children}
    </div>
  );
};

const PaymentMethodFormDetail = ({ data, nextStep, bank }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="car-price-detail">
      <p>{data?.Car?.name}</p>
      <div className="car-price-detail-size">
        <FontAwesomeIcon icon={faUserGroup} />
        <p>{formatSizeCar(data?.Car?.category)}</p>
      </div>
      <div>
        <Accordion defaultActiveKey="0">
          <Card className="custom-card">
            <Card.Header className="custom-header">
              <CustomToggle eventKey="0">
                <div className="toggle-accordion">
                  <p>Total</p>
                  {click ? (
                    <FontAwesomeIcon icon={faChevronUp} onClick={handleClick} />
                  ) : (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      onClick={handleClick}
                    />
                  )}
                </div>
                <p>{formatRupiah(data?.total_price)}</p>
              </CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="custom-body">
                <p className="list-title">Harga</p>
                <ul className="ul-info">
                  <li>
                    <div className="li-info">
                      <p>
                        Sewa mobil {formatRupiah(data?.Car?.price)} x{' '}
                        {getDaysDifference(
                          data?.start_rent_at,
                          data?.finish_rent_at
                        )}{' '}
                        Hari
                      </p>
                      <p>{formatRupiah(data?.total_price)}</p>
                    </div>
                  </li>
                </ul>
                <p className="list-title">Biaya Lainnya</p>
                <ul className="ul-info">
                  <li>
                    <div className="li-info">
                      <p>Pajak</p>
                      <p style={{ color: '#5cb85f' }}>Termasuk</p>
                    </div>
                  </li>
                  <li>
                    <div className="li-info">
                      <p>Biaya makan sopir</p>
                      <p style={{ color: '#5cb85f' }}>Termasuk</p>
                    </div>
                  </li>
                </ul>
                <p className="list-title">Belum termasuk</p>
                <ul className="ul-info">
                  <li>
                    <div className="li-info">
                      <p>Bensin</p>
                    </div>
                  </li>
                  <li>
                    <div className="li-info">
                      <p>tol dan parkir</p>
                    </div>
                  </li>
                </ul>
                <hr />
                <div className="total-detail-price">
                  <p>Total</p>
                  <p>{formatRupiah(data?.total_price)}</p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
      <button
        disabled={bank ? false : true}
        onClick={nextStep}
        className="button-payment"
      >
        Bayar
      </button>
    </div>
  );
};

export default PaymentMethodFormDetail;
