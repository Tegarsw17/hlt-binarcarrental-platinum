import './index.css';
import ButtonAddCar from '../../../components/admin/ButtonAddCar/index';
import ButtonCategory from '../../../components/admin/ButtonCategory/index';
import Navbar from '../../../components/admin/Navbar/Navbar';
import Tag from '../../../components/admin/Tag/Tag';
import ListCar from '../../../components/admin/Listcar/ListCar';
import iconChevron from '../../../assets/chevron-right.png';
import useListCarAdmin from '../../../hooks/useListCarAdmin';
import LimitPage from '../../../components/admin/Limit/Limit';
import JumptoPage from '../../../components/admin/JumptoPage/JumptoPage';
import Paging from '../../../components/admin/Paging/Paging';

import Alert from '../../../components/admin/Alert';
import { useEffect, useState } from 'react';
// todo : harus ada akses token sebelum mengakses halaman ini
const AdminListCar = () => {
  const { pageSize, handleSelectLimit, pageCount, currentPage, onPageChange } =
    useListCarAdmin();
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
      {message && <Alert message={message} color={color} />}
      <div className=" flex flex-col justify-center items-center px-52 z-0 pt-24 container gap-component">
        <Tag tags="Cars" subTags="List" />
        <ButtonAddCar />
        <ButtonCategory />
        <ListCar />
        <Paging
          pageCount={pageCount}
          currentPage={2 + (currentPage - 2)}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default AdminListCar;
