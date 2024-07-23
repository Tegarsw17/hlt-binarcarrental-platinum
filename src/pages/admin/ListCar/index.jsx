import './index.css';
import ButtonAddCar from '../../../components/admin/ButtonAddCar/index';
import ButtonCategory from '../../../components/admin/ButtonCategory/index';
import Tag from '../../../components/admin/Tag/Tag';
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
      {message && <Alert message={message} color={color} />}
      <div className=" px-52 z-0 pt-24 flex container gap-component">
        <Tag tags="Cars" subTags="List" />
        <ButtonAddCar />
        <ButtonCategory />
        <ListCar />
        <Paging />
      </div>
    </div>
  );
};

export default AdminListCar;
