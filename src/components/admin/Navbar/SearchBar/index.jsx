import './style.css';
import LogoWeb from '../../../../assets/logo.png';
import ButtonBurger from '../../ButtonBurger/index';
import SearchBox from './SearchBox/index';
import ProfileBox from './ProfileBox/index';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearTokenAdmin } from '../../../../reduxToolkit/features/admin-auth/loginAdminSlice';
const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpenAccorLogout, setIsOpenAccorLogout] = useState(true);
  const handleClickLogout = () => {
    setIsOpenAccorLogout(!isOpenAccorLogout);
  };
  const handleLogout = () => {
    dispatch(clearTokenAdmin());
    navigate('/admin/login');
  };

  return (
    <div>
      <div className="z-20 pl-24 flex justify-between fixed w-full shadow-md bg-white py-4 px-6 search-navbar-container">
        <div className="flex justify-between w-full search-navbar-wrapper">
          <div className=" flex justify-center items-center gap-32">
            <img className=" w-24 h-8" src={LogoWeb} alt="" />
            <ButtonBurger />
          </div>
          <div className="flex  justify-between items-center gap-6">
            <SearchBox />
            <ProfileBox
              onClickAccordion={handleClickLogout}
              isOpenAccordion={isOpenAccorLogout}
            />
          </div>
        </div>
      </div>
      <div
        className={`z-10 right-0 w-44 h-16 p-4 flex items-center justify-end bg-white fixed top-20 rounded-md shadow-md ${isOpenAccorLogout ? ' transition-transform -translate-y-40' : 'transition-transform'} `}
      >
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
