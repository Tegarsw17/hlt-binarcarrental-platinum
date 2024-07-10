import React, { useEffect, useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import PaymentMethodFormDetail from '../PaymentMethodFormDetail';
import { axiosCustomer } from '../../../helpers/api';
import { formatDate, formatSizeCar } from '../../../utils/formatUtil';
const PaymentMethodForm = ({ bank, setBank, id, nextStep }) => {
  //   console.log(nextStep);
  const [data, setData] = useState({});
  const config = {
    useAuth: true,
  };
  const getApiOrderbyId = async () => {
    try {
      const response = await axiosCustomer.get(
        `https://api-car-rental.binaracademy.org/customer/order/${id}`,
        config
      );
      setData(response.data);
      console.log(typeof response.data.start_rent_at);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiOrderbyId();
  }, []);

  return (
    <div>
      <div className="order-detail-wrapper">
        <div className="order-detail">
          <div className="order-detail-column">
            <p className="order-detail-title-main">Detail Pesananmu</p>
            <p className="order-detail-title">Nama/Tipe Mobil</p>
            <p className="order-detail-desc">{data?.Car?.name}</p>
          </div>
          <div className="order-detail-column">
            <p className="order-detail-title">Kategori</p>
            <p className="order-detail-desc">
              {formatSizeCar(data?.Car?.category)}
            </p>
          </div>
          <div className="order-detail-column">
            <p className="order-detail-title">Tanggal Mulai Sewa</p>
            <p className="order-detail-desc">
              {formatDate(data?.start_rent_at)}
            </p>
          </div>
          <div className="order-detail-column">
            <p className="order-detail-title">Tanggal Akhir Sewa</p>
            <p className="order-detail-desc">
              {formatDate(data?.finish_rent_at)}
            </p>
          </div>
        </div>
      </div>
      <div className="payment-content-wrapper">
        <div className="payment-content">
          <div className="bank-transfer">
            <p className="bank-transfer-title">Pilih Bank Transfer</p>
            <p>
              Kamu bisa membayar dengan transfer melalui ATM, Internet Banking
              atau Mobile Banking
            </p>
            <div className="bank-list">
              <div className="bank-detail" onClick={() => setBank('bca')}>
                <div className="bank-detail-info">
                  <div className="bank-detail-logo">BCA</div>
                  <p className="bank-detail-name">BCA Transfer</p>
                </div>
                {bank === 'bca' && (
                  <FontAwesomeIcon
                    icon={faCheck}
                    size="lg"
                    style={{ color: '#5CB85F' }}
                  />
                )}
              </div>
              <hr />
              <div className="bank-detail" onClick={() => setBank('bni')}>
                <div className="bank-detail-info">
                  <div className="bank-detail-logo">BNI</div>
                  <p className="bank-detail-name">BNI Transfer</p>
                </div>
                {bank === 'bni' && (
                  <FontAwesomeIcon
                    icon={faCheck}
                    size="lg"
                    style={{ color: '#5CB85F' }}
                  />
                )}
              </div>
              <hr />
              <div className="bank-detail" onClick={() => setBank('mandiri')}>
                <div className="bank-detail-info">
                  <div className="bank-detail-logo">Mandiri</div>
                  <p className="bank-detail-name">Mandiri Transfer</p>
                </div>
                {bank === 'mandiri' && (
                  <FontAwesomeIcon
                    icon={faCheck}
                    size="lg"
                    style={{ color: '#5CB85F' }}
                  />
                )}
              </div>
              <hr />
            </div>
          </div>
          <PaymentMethodFormDetail
            data={data}
            nextStep={nextStep}
            bank={bank}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodForm;
