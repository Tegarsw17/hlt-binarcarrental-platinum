import './index.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
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
      const size = 'all';
      const namecar = searchTerm;

      navigate(`/admin/listcar/${namecar}`);
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
