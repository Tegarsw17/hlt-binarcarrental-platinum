import './CharOrder.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getOrderReport } from '../../../reduxToolkit/features/admin-orderreport/orderreportSlice';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useFetcher } from 'react-router-dom';
import { addMonths, format } from 'date-fns';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartOrder = () => {
  const { orderreport, days, ordercount } = useSelector(
    (state) => state.orderreportSlice
  );

  const labelName = days?.map((report) => format(new Date(report), 'dd'));

  const data = {
    labels: labelName,
    datasets: [
      {
        label: 'Jumlah Order',
        data: ordercount,
        backgroundColor: 'rgba(88, 107, 144, 1)',
        borderWidth: 1,
        barThickness: 25,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Amount of Car Rented', // Nama sumbu y
        },
        beginAtZero: true,
        ticks: {
          // Mengatur ticks untuk menampilkan hanya nilai bulat
          callback: function (value) {
            if (Number.isInteger(value)) {
              return value;
            }
          },
        },
      },
      x: {
        title: {
          display: true,
          text: 'Date', // Nama sumbu y
        },
      },
    },
  };
  // console.log('get day : ', orderreport.day);
  return (
    <div className="chart-order-container relative flex justify-start items-start w-fit">
      {/* <canvas className="relative canvas-container  w-full"> */}
      <Bar data={data} options={options} />
      {/* </canvas> */}
    </div>
  );
};

export default ChartOrder;
