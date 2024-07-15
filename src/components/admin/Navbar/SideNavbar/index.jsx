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

  // console.log(isOpen);
  return (
    <div>
      <div className="z-30 flex flex-col justify-start items-center pt-4 fixed h-screen w-24 sidebar-container">
        <div className="w-full h-16 "></div>
        <button
          onClick={() => handleClick('dashboard')}
          className={`flex g-2 flex-col justify-center items-center w-full btn-sidebar ${isActive === 'dashboard' ? ' ' : ''}`}
        >
          <img src={iconhome} alt="" />
          <span className="flex  items-center justify-center">Dashboard</span>
        </button>
        <button
          onClick={() => handleClick('cars')}
          className={`flex g-2 flex-col justify-center items-center w-full btn-sidebar ${isActive === 'cars' ? ' ' : ''}`}
        >
          <img src={icontruck} alt="" />
          <span className="flex items-center justify-center ">Cars</span>
        </button>
      </div>
      <div
        className={`ml-16 z-10 fixed bg-white h-screen w-72 shadow-md ${isOpen ? 'transition translate-x-0' : 'transition -translate-x-80'}`}
      ></div>
    </div>
  );
};

export default SideNavbar;
