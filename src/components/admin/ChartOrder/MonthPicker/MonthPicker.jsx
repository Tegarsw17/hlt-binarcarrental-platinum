import './MonthPicker.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { lastDayOfMonth, format } from 'date-fns';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getOrderReport } from '../../../../reduxToolkit/features/admin-orderreport/orderreportSlice';
const MonthPicker = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(
    format(new Date('2022-11-01'), 'yyyy-MM-dd')
  );
  const [endDate, setEndDate] = useState(
    format(lastDayOfMonth(new Date('2022-11-01'), 1), 'yyyy-MM-dd')
  );

  const handleChange = (date) => {
    setStartDate(format(date, 'yyyy-MM-dd'));
    setEndDate(format(lastDayOfMonth(date), 'yyyy-MM-dd'));
    // console.log(startDate, ' and ', endDate);
  };

  useEffect(() => {
    dispatch(getOrderReport({ startDate, endDate }));
  }, []);

  // useEffect(() => {
  //   dispatch(getOrderReport({ startDate, endDate }));
  // }, [startDate]);

  const handleclick = () => {
    dispatch(getOrderReport({ startDate, endDate }));
  };

  return (
    <div className="date-container self-start flex items-center">
      <DatePicker
        selected={new Date(startDate)}
        onChange={handleChange}
        dateFormat="MMMM - yyyy"
        showMonthYearPicker
        className="input-date-container"
      />
      <button onClick={handleclick} className="btn-go">
        GO
      </button>
    </div>
  );
};

export default MonthPicker;
