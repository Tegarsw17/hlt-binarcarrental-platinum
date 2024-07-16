import './index.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import iconhome from '../../../../assets/fi_home.png';
import icontruck from '../../../../assets/fi_truck.png';
import { useNavigate } from 'react-router-dom';
const SideNavbar = () => {
  const [isActive, setIsActive] = useState('Dashboard');
  const { isOpen } = useSelector((state) => state.navbarSlice);
  const navigate = useNavigate();
  const handleClick = (values) => {
    setIsActive(values);

    if (values === 'dashboard') {
      navigate('/admin/dashboard');
    } else if (values === 'cars') {
      const namecar = 'all';
      navigate(`/admin/listcar/${namecar}`);
    }
  };

  // todo : isactive need to store in persisted storage

  return (
    <div>
      <div className="z-30 flex flex-col justify-start items-center pt-4 fixed h-screen w-24 sidebar-container">
        <div className="w-full h-16 "></div>
        <button
          onClick={() => handleClick('dashboard')}
          className={`flex g-2 flex-col justify-center items-center w-full btn-sidebar ${isActive === 'dashboard' ? ' btn-sidebar-active' : ''}`}
        >
          <img src={iconhome} alt="" />
          <span className="flex  items-center justify-center">Dashboard</span>
        </button>
        <button
          onClick={() => handleClick('cars')}
          className={`flex g-2 flex-col justify-center items-center w-full btn-sidebar  ${isActive !== 'dashboard' ? 'btn-sidebar-active' : ''}`}
        >
          <img src={icontruck} alt="" />
          <span className="flex items-center justify-center ">Cars</span>
        </button>
      </div>
      <div
        className={`flex justify-start items-start ml-24 z-10 fixed bg-white h-screen w-72 shadow-md ${isOpen ? 'transition translate-x-0' : 'transition -translate-x-80'}`}
      >
        {window.location.href.includes('dashboard') ? (
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
