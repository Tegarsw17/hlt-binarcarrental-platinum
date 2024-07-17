import SearchBar from './SearchBar/index';
import SideNavbar from './SideNavbar/index';
const Navbar = () => {
  return (
    <div className=" top-0 left-0">
      <SideNavbar />
      <SearchBar />
    </div>
  );
};

export default Navbar;
