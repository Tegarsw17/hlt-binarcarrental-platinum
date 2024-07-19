import React from 'react';

const Alert = ({ message, color }) => {
  return (
    <div
      className={`fixed top-32 left-[650px] w-[550px] bg-[#${color}] text-center p-3 text-base text-white font-medium rounded shadow`}
    >
      {message}
    </div>
  );
};

export default Alert;
