import './index.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getList } from '../../../reduxToolkit/features/admin-list/listSlice';
const SearchBox = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = () => {
    const size = 'all';
    const namecar = searchTerm;
    console.log('namecar :' + namecar + ' size :' + size);
    dispatch(getList({ size, namecar }));
    // navigate('/admin/listcar');
  };

  return (
    <div className="flex justify-center align-middle search-box-container">
      <input
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
