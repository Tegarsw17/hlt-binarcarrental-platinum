import './MonthPicker.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { lastDayOfMonth, format } from 'date-fns';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getOrderReport } from '../../../../reduxToolkit/features/admin-orderreport/orderreportSlice';
import iconRectangle from '../../../../assets/Rectangle10.png';

const MonthPicker = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(
    format(new Date('2022-10-01'), 'yyyy-MM-dd')
  );
  const [endDate, setEndDate] = useState(
    format(lastDayOfMonth(new Date('2022-10-01'), 1), 'yyyy-MM-dd')
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
    <div className="date-container self-start flex flex-col items-center">
      <div className="self-start flex items-center gap-2 mb-4">
        <img className="w-1 h-6" src={iconRectangle} alt="" />
        <p className=" text-sm font-bold m-0">Rented Car Data Visualization</p>
      </div>
      <div className="flex flex-col self-start items-center">
        <p className="text-black font-title-btn font-normal text-xs leading-4 place-self-start">
          month
        </p>
        <div className="flex self-start items-center">
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
      </div>
    </div>
  );
};

export default MonthPicker;
