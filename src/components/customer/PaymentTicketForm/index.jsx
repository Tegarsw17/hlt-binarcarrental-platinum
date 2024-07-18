import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import React, { useEffect, useState } from 'react';
import SuccessIcon from '../../../assets/success.png';
import PDFGenerate from '../PdfGenerate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import { axiosCustomer } from '../../../helpers/api';
import { Link } from 'react-router-dom';

const PaymentTicketForm = ({ id }) => {
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiOrderbyId();
  }, []);
  return (
    <div className="payment-ticket">
      <div className="payment-ticket-head">
        <img className="success-icon" src={SuccessIcon} />
        <p>Pembayaran Berhasil</p>
        <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
      </div>
      <div className="payment-ticket-content">
        <div className="payment-ticket-content-head">
          <div className="payment-ticket-content-title">
            <p>invoice</p>
            <p>*no invoice</p>
          </div>
          <div className="payment-ticket-content-button">
            <PDFDownloadLink
              document={<PDFGenerate data={data} />}
              fileName="receipt.pdf"
            >
              <FontAwesomeIcon icon={faDownload} /> Unduh
            </PDFDownloadLink>
          </div>
        </div>
        <div className="payment-ticket-content-body">
          <PDFViewer
            width="100%"
            height="100%"
            showToolbar={false}
            className="pdf-viewer"
          >
            <PDFGenerate data={data} />
          </PDFViewer>
        </div>
      </div>
      <Link to={'/'} style={{ marginTop: '20px' }}>
        Back to home
      </Link>
    </div>
  );
};

export default PaymentTicketForm;
