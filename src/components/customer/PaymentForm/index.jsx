import React, { useRef, useState, useEffect } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faImage } from '@fortawesome/free-solid-svg-icons';
import { formatRupiah, formatTimestamp } from '../../../utils/formatUtil';
import { Tab, Tabs } from 'react-bootstrap';
import { paymentInstruction } from '../../../utils/dummyData';
import { axiosCustomer } from '../../../helpers/api';
import Countdown from 'react-countdown';
const PaymentForm = ({ bank, id, nextStep }) => {
  const [stepPay, setStepPay] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);
  const [numberValue, setNumberValue] = useState('54104257877');
  const [totalValue, setTotalValue] = useState(null);

  const [initialTargetDate] = useState(Date.now() + 24 * 60 * 60 * 1000);
  const [confirmationTargetDate, setConfirmationTargetDate] = useState(null);

  const config = {
    useAuth: true,
  };
  const getApiOrderbyId = async () => {
    try {
      const response = await axiosCustomer.get(
        `https://api-car-rental.binaracademy.org/customer/order/${id}`,
        config
      );
      setTotalValue(response.data.total_price);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiOrderbyId();
  }, []);

  useEffect(() => {
    setConfirmationTargetDate(Date.now() + 10 * 60 * 1000);
  }, [stepPay]);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(numberValue).then(() => {
      alert('Nomor rekening berhasil di copy');
    });
  };
  const handleCopyTotal = () => {
    navigator.clipboard.writeText(totalValue).then(() => {
      alert('Total harga telah dicopy');
    });
  };

  const handleButtonUploadFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleButtonUploadFileApi = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('slip', selectedFile);
    const config = {
      useAuth: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    try {
      const response = await axiosCustomer.put(
        `https://api-car-rental.binaracademy.org/customer/order/${id}/slip`,
        formData,
        config
      );
      setTimeout(() => {
        nextStep();
      }, 1000);
    } catch (error) {
      console.log(error.response);
    }
  };

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span>Time's up!</span>;
    } else {
      // Render countdown in hours, minutes, and seconds
      return (
        <div className="countdown">
          <span className="countdown-time">{hours > 0 && `${hours}`}</span>
          <span className="countdown-colon">{hours > 0 && ':'}</span>
          <span className="countdown-time">{minutes}</span>
          <span className="countdown-colon">:</span>
          <span className="countdown-time">{seconds}</span>
        </div>
      );
    }
  };

  return (
    <div className="payment-pay-content-wrapper">
      <div className="payment-content">
        <div className="bank-pay-info">
          <div className="bank-pay-card bank-pay-info-deadline">
            <div>
              <p className="bank-pay-title">Selesaikan pembayaran sebelum</p>
              <p>{formatTimestamp(initialTargetDate)}</p>
            </div>
            <div className="bank-pay-countdown">
              <Countdown date={initialTargetDate} renderer={renderer} />
            </div>
          </div>
          <div className="bank-pay-card bank-pay-info-number">
            <div className="bank-info-detail-title">Lakukan Transfer Ke</div>
            <div className="bank-info-detail">
              <div className="bank-detail-logo">{bank.toUpperCase()}</div>
              <div className="bank-info-detail-number">
                <p>{bank.toUpperCase()} Transfer</p>
                <p>a.n Binar Car Rental</p>
              </div>
            </div>
            <div className="bank-pay-number">
              <label>Nomor Rekening</label>
              <div className="input-container">
                <input value={numberValue} readOnly />
                <button onClick={handleCopyNumber} className="copy-button">
                  <FontAwesomeIcon icon={faCopy} />
                </button>
              </div>
            </div>
            <div className="bank-pay-total">
              <label>Total Bayar</label>
              <div className="input-container">
                <input value={formatRupiah(totalValue)} readOnly />
                <button onClick={handleCopyTotal} className="copy-button">
                  <FontAwesomeIcon icon={faCopy} />
                </button>
              </div>
            </div>
          </div>
          <div className="bank-pay-card">
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3 custom-main-tab"
            >
              <Tab
                className="custom-tab"
                eventKey="atm"
                title={`ATM ${bank.toUpperCase()}`}
              >
                <ul className="payment-instruction-list">
                  {paymentInstruction.map((item, index) => (
                    <li key={index}>
                      {item.split('\n').map((str, idx) => (
                        <React.Fragment key={idx}>
                          {str}
                          <br />
                        </React.Fragment>
                      ))}
                    </li>
                  ))}
                </ul>
              </Tab>
              <Tab
                className="custom-tab"
                eventKey="mbank"
                title={`M-${bank.toUpperCase()}`}
              >
                <ul className="payment-instruction-list">
                  {paymentInstruction.map((item, index) => (
                    <li key={index}>
                      {item.split('\n').map((str, idx) => (
                        <React.Fragment key={idx}>
                          {str}
                          <br />
                        </React.Fragment>
                      ))}
                    </li>
                  ))}
                </ul>
              </Tab>
              <Tab
                className="custom-tab"
                eventKey="bankklik"
                title={`${bank.toUpperCase()} Klik`}
              >
                <ul className="payment-instruction-list">
                  {paymentInstruction.map((item, index) => (
                    <li key={index}>
                      {item.split('\n').map((str, idx) => (
                        <React.Fragment key={idx}>
                          {str}
                          <br />
                        </React.Fragment>
                      ))}
                    </li>
                  ))}
                </ul>
              </Tab>
              <Tab
                className="custom-tab"
                eventKey="internet"
                title="Internet Banking"
              >
                <ul className="payment-instruction-list">
                  {paymentInstruction.map((item, index) => (
                    <li key={index}>
                      {item.split('\n').map((str, idx) => (
                        <React.Fragment key={idx}>
                          {str}
                          <br />
                        </React.Fragment>
                      ))}
                    </li>
                  ))}
                </ul>
              </Tab>
            </Tabs>
          </div>
        </div>
        <div className="bank-pay-confirm">
          {stepPay === 0 && (
            <>
              <p>
                Klik konfirmasi pembayaran untuk mempercepat proses pengecekan
              </p>
              <button
                onClick={() => setStepPay(1)}
                className="button-confirm-payment"
              >
                Konfirmasi Pembayaran
              </button>
            </>
          )}
          {stepPay === 1 && (
            <>
              <div className="bank-pay-confirm-time">
                <p>Konfirmasi pembayaran</p>
                <Countdown date={confirmationTargetDate} renderer={renderer} />
              </div>
              <p>
                Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu
                akan segera kami cek tunggu kurang lebih 10 menit untuk
                mendapatkan konfirmasi.
              </p>
              <p>Upload Bukti Pembayaran</p>
              <p>
                Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa
                upload bukti bayarmu
              </p>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              <div
                className="preview-image-wrapper"
                onClick={handleButtonUploadFile}
              >
                {previewUrl ? (
                  <>
                    {selectedFile.type.startsWith('image') ? (
                      <img
                        src={previewUrl}
                        alt="Preview"
                        style={{ maxWidth: '100%', maxHeight: '200px' }}
                      />
                    ) : (
                      <div>
                        <p>{selectedFile.name}</p>
                      </div>
                    )}
                  </>
                ) : (
                  <div>
                    <FontAwesomeIcon icon={faImage} size="lg" />
                  </div>
                )}
              </div>
              {previewUrl ? (
                <button
                  onClick={handleButtonUploadFileApi}
                  className="button-confirm-payment"
                >
                  Konfirmasi
                </button>
              ) : (
                <button
                  onClick={handleButtonUploadFile}
                  className="button-confirm-payment"
                >
                  Upload
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
