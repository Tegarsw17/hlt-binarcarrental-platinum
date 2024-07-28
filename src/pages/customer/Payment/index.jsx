import React from 'react';
import './style.css';
import Navbar from '../../../components/customer/Navbar';
import BannerSecond from '../../../components/customer/BannerSecond';
import Footer from '../../../components/customer/Footer';
import PaymentMainForm from '../../../components/customer/PaymentMainForm';

const Payment = () => {
  return (
    <div>
      <Navbar />
      <BannerSecond />
      <PaymentMainForm />
      <Footer />
    </div>
  );
};

export default Payment;
