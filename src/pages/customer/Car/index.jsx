import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/customer/Navbar';
import SearchCar from '../../../components/customer/SearchCar';
import Footer from '../../../components/customer/Footer';
import BannerSecond from '../../../components/customer/BannerSecond';
import CarList from '../../../components/customer/CarList';
import PaginationNumber from '../../../components/customer/Pagination';
import { useLocation } from 'react-router-dom';
import { minMaxPriceValue } from '../../../utils/formatUtil';
import Spinner from '../../../components/customer/SpinnerLoading';
import { axiosCustomer } from '../../../helpers/api';

const Car = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [curentPage, setCurentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [queryApi, setQueryApi] = useState({});
  const [loading, setLoading] = useState(true);

  const handleSearch = async (queries, page = 1) => {
    try {
      const { nameCar, capacityCar, priceCar, statusCar } = queries;
      const [minPrice, maxprice] = minMaxPriceValue(priceCar);
      const response = await axiosCustomer.get(
        'https://api-car-rental.binaracademy.org/customer/v2/car',
        {
          params: {
            name: nameCar,
            category: capacityCar,
            isRented: statusCar,
            minPrice: minPrice,
            maxPrice: maxprice,
            page,
            pageSize: 10,
          },
          timeout: 10000,
        }
      );
      setData(response.data.cars);
      setCurentPage(response.data.page);
      setTotalPages(response.data.pageCount);
      setLoading(true);
    } catch (error) {
      console.error(
        'Error fetching data',
        error.response ? error.response.data : error.message
      );
    }
    setLoading(false);
  };

  useEffect(() => {
    if (location.state) {
      setQueryApi(location.state);
      handleSearch(location.state, 1);
    }
  }, [location.state]);

  const handlePageChange = (page) => {
    setLoading(true);
    handleSearch(queryApi, page);
    setCurentPage(page);
  };

  const searchCar = (q) => {
    setQueryApi(q);
    handleSearch(q, 1);
  };

  return (
    <div>
      <Navbar />
      <BannerSecond />
      <SearchCar onSearch={searchCar} />
      {loading ? <Spinner /> : <CarList data={data} />}
      {/* <CarList data={data} /> */}
      <PaginationNumber
        total={totalPages}
        active={curentPage}
        onPageChange={handlePageChange}
      />
      <Footer />
    </div>
  );
};

export default Car;
