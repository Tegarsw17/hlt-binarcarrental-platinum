import './index.css';
import ButtonAddCar from '../../../components/admin/ButtonAddCar/index';
import ButtonCategory from '../../../components/admin/ButtonCategory/index';
import ListCar from '../../../components/admin/Listcar/ListCar';
import Paging from '../../../components/admin/Listcar/Paging/Paging';
import Navbar from '../../../components/admin/Navbar/Navbar';
import iconChevron from '../../../assets/chevron-right.png';

import Alert from '../../../components/admin/Alert';
import { useEffect, useState } from 'react';
// todo : harus ada akses token sebelum mengakses halaman ini
const AdminListCar = () => {
  const [message, setMessage] = useState(null);
  const [color, setColor] = useState(null);

  useEffect(() => {
    const successMessage = sessionStorage.getItem('successMessage');
    const color = sessionStorage.getItem('color');
    if (successMessage) {
      setMessage(successMessage);
      setColor(color);
      setTimeout(() => {
        sessionStorage.removeItem('successMessage');
        sessionStorage.removeItem('color');
        setMessage(null);
        setColor(null);
      }, 1500);
    }
  }, [message]);
  return (
    <div className="admin-container w-full h-full pb-5">
      <Navbar />
      <div className=" px-52 z-0 pt-24 flex container gap-component">
        <div className="flex gap-1 admin-tag-page pl-3 pr-3 items-center">
          <p className="font-sans text-center text-xs font-bold m-0">Cars</p>
          <img className="w-5 h-5" src={iconChevron} alt="" />
          <p className="font-sans text-center text-xs m-0">List</p>
        </div>
        {/* <h4 className="flex flex-row gap-1 admin-tag-page pl-3 pr-3">
          <span>Cars &gt;</span>
          <p>List</p>
        </h4> */}
        {message && <Alert message={message} color={color} />}
        <div className="flex justify-between pl-3">
          <h2 className="header-title-admin">List Car</h2>
          <ButtonAddCar />
        </div>
        <ButtonCategory />
        <ListCar />
        <Paging />
      </div>
    </div>
  );
};

export default AdminListCar;
