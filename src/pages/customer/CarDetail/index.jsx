import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/customer/Navbar';
import SearchCar from '../../../components/customer/SearchCar';
import Footer from '../../../components/customer/Footer';
import BannerSecond from '../../../components/customer/BannerSecond';
import CarDetailCard from '../../../components/customer/CarDetailCard';
import { useParams } from 'react-router-dom';
import { axiosCustomer } from '../../../helpers/api';
const CarDetail = () => {
  let { id } = useParams();
  const [detailCarData, setDetailCarData] = useState({});

  const fetchDetailCar = async (idCar) => {
    try {
      const apiURL = `https://api-car-rental.binaracademy.org/customer/car/${idCar}`;
      const response = await axiosCustomer.get(apiURL);
      setDetailCarData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDetailCar(id);
  }, []);

  return (
    <div>
      <Navbar />
      <BannerSecond />
      <SearchCar isDisabled={true} />
      <CarDetailCard data={detailCarData} id={id} />
      <Footer />
    </div>
  );
};

export default CarDetail;
