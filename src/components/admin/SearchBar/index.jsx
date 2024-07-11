import './index.css';
import SearchBox from '../SearchBox/index';
import ProfileBox from '../ProfileBox/index';
const SearchBar = () => {
  return (
    <div className="flex justify-between static w-screen shadow-md bg-white py-4 px-6 search-navbar-container">
      <div className="flex justify-between search-navbar-wrapper">
        <div>
          <img src="" alt="" />
          <button className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-black ">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
                // Dari (1, 1) ke (16, 1)
                // Dari (1, 7) ke (16, 7)
                // Dari (1, 13) ke (16, 13)
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-between align-middle gap-6">
          <SearchBox />
          <ProfileBox />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
