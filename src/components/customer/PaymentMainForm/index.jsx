import React, { useState } from 'react';
import PaymentMethodForm from '../PaymentMethodForm';
import PaymentForm from '../PaymentForm';
import PaymentTicketForm from '../PaymentTicketForm';
import { useParams } from 'react-router-dom';
import NavPayment from '../NavPayment';

const PaymentMainForm = () => {
  const { id } = useParams();
  const [bank, setBank] = useState('');
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  console.log(step);
  const steps = [
    <PaymentMethodForm
      bank={bank}
      setBank={setBank}
      id={id}
      nextStep={nextStep}
    />,
    <PaymentForm bank={bank} id={id} nextStep={nextStep} />,
    <PaymentTicketForm bank={bank} id={id} />,
  ];
  //   console.log(bank);
  return (
    <div>
      <NavPayment step={step} prevStep={prevStep} bank={bank} id={id} />
      <div>{steps[step]}</div>
    </div>
  );
};

export default PaymentMainForm;
