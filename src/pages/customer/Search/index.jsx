import React from 'react';
import Navbar from '../../../components/customer/Navbar';
import Banner from '../../../components/customer/Banner';
import Footer from '../../../components/customer/Footer';
import SearchCar from '../../../components/customer/SearchCar';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  const navigateToCarPage = (queries) => {
    const searchParams = new URLSearchParams(queries).toString();
    navigate(`/car?${searchParams}`);
  };

  return (
    <div>
      <Navbar />
      <Banner isButtonShow={false} />
      <SearchCar onSearch={navigateToCarPage} />
      <Footer />
    </div>
  );
};

export default Search;
