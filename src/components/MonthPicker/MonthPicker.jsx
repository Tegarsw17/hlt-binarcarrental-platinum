import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addMonths, format } from 'date-fns';

const MonthPicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addMonths(new Date(), 1));

  const handleChange = (date) => {
    setStartDate(format(date, 'yyyy-MM-dd'));
    setEndDate(format(addMonths(date, 1), 'yyyy-MM-dd'));
    console.log(startDate, ' and ', endDate);
  };

  return (
    <div>
      <DatePicker
        selected={new Date(startDate)}
        onChange={handleChange}
        dateFormat="MMMM - yyyy"
        showMonthYearPicker
      />
    </div>
  );
};

export default MonthPicker;
