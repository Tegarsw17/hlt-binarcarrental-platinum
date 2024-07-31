import './style.css';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
// import { setSearchCar } from '../../../../../reduxToolkit/features/admin-navbar/navbarSlice';
// import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  // const name = searchParams.get('name') || '';

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      handleClickSearch(searchTerm);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClickSearch = (name) => {
    // dispatch(setSearchCar(searchTerm));
    if (location.pathname !== '/admin/listcar') {
      const newParams = new URLSearchParams();
      newParams.set('name', name);

      navigate({
        pathname: '/admin/listcar',
        search: newParams.toString(),
      });
    } else {
      setSearchParams((prev) => {
        prev.set('name', name);
        prev.set('category', '');
        prev.set('page', 1);
        return prev;
      });
    }
  };

  return (
    <div className="flex justify-center align-middle search-box-container">
      <input
        id="search-car-input"
        onKeyDown={handleEnter}
        onChange={handleChange}
        type="text"
        placeholder="Search"
        defaultValue={searchTerm}
        className="search-bar-input"
      />
      <button
        onClick={() => handleClickSearch(searchTerm)}
        className="search-bar-button"
      >
        <span>Search</span>
      </button>
    </div>
  );
};

export default SearchBox;
