import './index.css';
import { useState } from 'react';
import useListCarAdmin from '../../../../../hooks/useListCarAdmin';
const SearchBox = () => {
  const { searchParams, handleClickSearch } = useListCarAdmin();
  const [searchTerm, setSearchTerm] = useState('');

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      handleClickSearch(searchTerm);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex justify-center align-middle search-box-container">
      <input
        onKeyDown={handleEnter}
        onChange={handleChange}
        type="text"
        placeholder="Search"
        defaultValue={searchParams.get('name') || ''}
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
