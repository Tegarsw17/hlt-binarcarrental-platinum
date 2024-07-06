import React from 'react';
import './style.css';
import { useParams } from 'react-router-dom';

const Payment = () => {
  let { id } = useParams();
  return (
    <div>
      <h1>Halaman Payment {id}</h1>
    </div>
  );
};

export default Payment;
