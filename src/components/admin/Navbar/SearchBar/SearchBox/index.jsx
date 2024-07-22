import './index.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useListCarAdmin from '../../../../../hooks/useListCarAdmin';
import { setActive } from '../../../../../reduxToolkit/features/admin-navbar/navbarSlice';
const SearchBox = () => {
  const dispatch = useDispatch();
  const { searchParams, paramsUrl, setParamsUrl, setSearchParams } =
    useListCarAdmin();

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = () => {
    dispatch(setActive('cars'));
    const namecar = searchTerm;
    const updatedParams = {
      ...paramsUrl,
      name: namecar,
    };

    setParamsUrl(updatedParams);
    setSearchParams(updatedParams);
    setTimeout(() => {
      navigate({
        pathname: '/admin/listcar',
        search: `?${new URLSearchParams(updatedParams).toString()}`,
      });
    }, 0);
  };

  return (
    <div className="flex justify-center align-middle search-box-container">
      <input
        onKeyDown={handleEnter}
        onChange={handleChange}
        type="text"
        placeholder="Search"
        className="search-bar-input"
      />
      <button onClick={handleClick} className="search-bar-button">
        <span>Search</span>
      </button>
    </div>
  );
};

export default SearchBox;
