import './index.css';
import { setActive } from '../../../../reduxToolkit/features/admin-navbar/navbarSlice';
import { useSelector } from 'react-redux';
import iconhome from '../../../../assets/fi_home.png';
import icontruck from '../../../../assets/fi_truck.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
const SideNavbar = () => {
  const { isOpen, isActive } = useSelector((state) => state.navbarSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (values) => {
    dispatch(setActive(values));

    if (values === 'dashboard') {
      navigate('/admin');
    } else if (values === 'listcar') {
      navigate(`/admin/listcar`);
    }
  };

  useEffect(() => {
    if (window.location.pathname === '/admin') {
      dispatch(setActive('dashboard'));
      navigate('/admin');
    } else if (window.location.pathname === '/admin/listcar') {
      dispatch(setActive('listcar'));
      navigate(`/admin/listcar`);
    }
  }, []);

  // console.log(window.location.pathname);
  return (
    <div>
      <div className="z-30 flex flex-col justify-start items-center pt-4 fixed h-screen  sidebar-container">
        <div className="w-full h-16 "></div>
        <button
          onClick={() => handleClick('dashboard')}
          className={`flex g-2 flex-col justify-center items-center w-full btn-sidebar ${isActive.includes('dashboard') ? ' btn-sidebar-active' : ''}`}
        >
          <img src={iconhome} alt="" />
          <p
            className={`text-center m-0 flex items-center justify-center font-sans text-xs ${isActive.includes('dashboard') ? 'font-bold' : 'font-thin'}`}
          >
            Dashboard
          </p>
        </button>
        <button
          onClick={() => handleClick('listcar')}
          className={` flex g-2 flex-col justify-center items-center w-full btn-sidebar  ${isActive.includes('listcar') ? 'btn-sidebar-active' : ''}`}
        >
          <img src={icontruck} alt="" />
          <p
            className={`text-center m-0 flex items-center justify-center font-sans text-xs ${isActive.includes('listcar') ? 'font-bold' : 'font-thin'}`}
          >
            Cars
          </p>
        </button>
      </div>
      <div
        className={`  flex justify-start items-start ml-16 z-10 fixed bg-white h-screen w-72 shadow-md ${isOpen ? 'transition translate-x-0' : 'transition -translate-x-80'}`}
      >
        {/* isActive.includes('dashboard') */}

        {isActive.includes('dashboard') ? (
          <div className=" mt-32  w-full h-fit flex flex-col justify-center items-start">
            <h2 className="pl-6 py-3 w-full side-font header-side-font">
              DASHBOARD
            </h2>
            <h4 className="pl-6 py-3 w-full side-font side-font-pick">
              Dashboard
            </h4>
          </div>
        ) : (
          <div className=" mt-32  w-full h-fit flex flex-col justify-center items-start">
            <h2 className="pl-6 py-3 w-full side-font header-side-font">
              CARS
            </h2>
            <h4 className="pl-6 py-3 w-full side-font side-font-pick">
              List Cars
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideNavbar;
