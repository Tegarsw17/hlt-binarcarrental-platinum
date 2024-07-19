import Navbar from '../../../components/customer/Navbar';
import SearchCar from '../../../components/customer/SearchCar';
import Footer from '../../../components/customer/Footer';
import BannerSecond from '../../../components/customer/BannerSecond';
import CarList from '../../../components/customer/CarList';
import PaginationNumber from '../../../components/customer/Pagination';
import Spinner from '../../../components/customer/SpinnerLoading';
import useCar from '../../../hooks/useCar';

const Car = () => {
  const { data, loading, totalPages, curentPage, handlePageChange } = useCar();

  return (
    <div>
      <Navbar />
      <BannerSecond />
      <SearchCar />
      {loading ? <Spinner /> : <CarList data={data} />}
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
