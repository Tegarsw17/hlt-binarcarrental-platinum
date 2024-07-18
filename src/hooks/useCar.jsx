import { useSearchParams } from 'react-router-dom';
import { minMaxPriceValue } from '../utils/formatUtil';
import { useEffect, useState } from 'react';
import { axiosCustomer } from '../helpers/api';

const useCar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [curentPage, setCurentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
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
    const initialQueries = {
      nameCar: searchParams.get('name') || '',
      capacityCar: searchParams.get('category') || '',
      priceCar: searchParams.get('price') || '',
      statusCar: searchParams.get('status') || '',
    };

    handleSearch(initialQueries, searchParams.get('page') || 1);
  }, [searchParams]);

  const handlePageChange = (page) => {
    const newParams = { ...Object.fromEntries(searchParams), page };
    setSearchParams(newParams);
    setLoading(true);
    handleSearch(newParams, page);
    setCurentPage(page);
  };
  return { data, loading, totalPages, curentPage, handlePageChange };
};

export default useCar;
