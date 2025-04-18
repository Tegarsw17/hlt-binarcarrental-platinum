import './style.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { lastDayOfMonth, startOfMonth, format } from 'date-fns';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderReport } from '../../../../reduxToolkit/features/admin-orderreport/orderreportSlice';

const MonthPicker = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(
    format(startOfMonth(new Date()), 'yyyy-MM-dd')
  );
  const [endDate, setEndDate] = useState(
    format(lastDayOfMonth(new Date(), 1), 'yyyy-MM-dd')
  );

  const { access_token_admin } = useSelector((state) => state.authAdminReducer);

  const handleChange = (date) => {
    setStartDate(format(date, 'yyyy-MM-dd'));
    setEndDate(format(lastDayOfMonth(date), 'yyyy-MM-dd'));
  };

  useEffect(() => {
    dispatch(getOrderReport({ startDate, endDate, access_token_admin }));
  }, []);

  const handleclick = () => {
    dispatch(getOrderReport({ startDate, endDate, access_token_admin }));
  };

  return (
    <div className="date-container self-start flex flex-col items-center">
      {/* <div className="self-start flex items-center gap-2 mb-4">
        <img className="w-1 h-6" src={iconRectangle} alt="" />
        <p className=" text-sm font-bold m-0">Rented Car Data Visualization</p>
      </div> */}
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
            id="date-picker-order"
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
