import './index.css';
import ButtonAddCar from '../../../components/admin/ButtonAddCar/index';
import ButtonCategory from '../../../components/admin/ButtonCategory/index';
import ListCar from '../../../components/admin/Listcar/ListCar';
import Navbar from '../../../components/admin/Navbar/Navbar';
import Alert from '../../../components/admin/Alert';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
// todo : harus ada akses token sebelum mengakses halaman ini
const AdminListCar = () => {
  const location = useLocation();
  const [message, setMessage] = useState(location.state?.message);
  const [color, setColor] = useState(location.state?.color);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
        setColor('');
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [message]);
  return (
    <div className="admin-page-color w-full h-full">
      <Navbar />
      <div className=" px-52 z-0 pt-24 flex container gap-component">
        <h4 className="flex flex-row gap-1 admin-tag-page pl-3 pr-3">
          <span>Cars &gt;</span>
          <p>List</p>
        </h4>
        {message && <Alert message={message} color={color} />}
        <div className="flex justify-between pl-3">
          <h2 className="header-title-admin">List Car</h2>
          <ButtonAddCar />
        </div>
        <ButtonCategory />
        <ListCar />
      </div>
    </div>
  );
};

export default AdminListCar;
