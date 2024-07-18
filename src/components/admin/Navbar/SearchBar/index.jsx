import './index.css';
import LogoWeb from '../../../../assets/logo.png';
import ButtonBurger from '../../ButtonBurger/index';
import SearchBox from './SearchBox/index';
import ProfileBox from './ProfileBox/index';
const SearchBar = () => {
  return (
    <div className="z-20 pl-24 flex justify-between fixed w-full shadow-md bg-white py-4 px-6 search-navbar-container">
      <div className="flex justify-between w-full search-navbar-wrapper">
        <div className=" flex justify-center items-center gap-32">
          <img className=" w-24 h-8" src={LogoWeb} alt="" />
          <ButtonBurger />
        </div>
        <div className="flex  justify-between items-center gap-6">
          <SearchBox />
          <ProfileBox />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
