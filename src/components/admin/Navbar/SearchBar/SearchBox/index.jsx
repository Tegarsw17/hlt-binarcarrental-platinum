import './index.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useListCarAdmin from '../../../../../hooks/useListCarAdmin';

const SearchBox = () => {
  const { paramsUrl, setParamsUrl, setSearchParams } = useListCarAdmin();
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
    if (searchTerm) {
      const namecar = searchTerm;
      navigate(`/admin/listcar`);
      setSearchParams({
        ...paramsUrl,
        name: namecar,
        size: '',
      });
      // setSearchParams(paramsUrl);
      // dispatch(getList({ size, namecar }));
    }
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
