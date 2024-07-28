import './index.css';
import ButtonAddCar from '../../../components/admin/ButtonAddCar/index';
import ButtonCategory from '../../../components/admin/ButtonCategory/index';
import Navbar from '../../../components/admin/Navbar/Navbar';
import Tag from '../../../components/admin/Tag/Tag';
import ListCar from '../../../components/admin/Listcar/ListCar';
import useListCarAdmin from '../../../hooks/useListCarAdmin';
import Paging from '../../../components/admin/Paging/Paging';
import JumptoPage from '../../../components/admin/JumptoPage/JumptoPage';
import Alert from '../../../components/admin/Alert';
import { useEffect, useState } from 'react';
import Title from '../../../components/admin/Title/Title';

const AdminListCar = () => {
  const {
    category,
    pageCount,
    currentPage,
    // categoryActive,
    onPageChange,
    handleClickCategory,
  } = useListCarAdmin();
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
    <div className="admin-container w-full h-full min-h-svh pb-5">
      <Navbar />
      {message && <Alert message={message} color={color} />}
      <div className=" flex flex-col justify-center items-center px-52 z-0 pt-24 container gap-component">
        <div className="w-full max-w-6xl gap-component mb-2">
          <Tag tags="Cars" subTags="List" />
          <div className="w-full flex flex-row justify-between items-center px-2">
            <Title title="" subtitle="List Car" />
            <ButtonAddCar />
          </div>
          <ButtonCategory
            category={category}
            handleClickCategory={handleClickCategory}
          />
        </div>
        <ListCar />
        <div className="p-2 w-full max-w-6xl flex flex-row items-center justify-between">
          <div>
            <JumptoPage
              pageCount={pageCount}
              currentPage={currentPage}
              onPageChange={onPageChange}
            />
          </div>
          <Paging
            pageCount={pageCount}
            currentPage={2 + (currentPage - 2)}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminListCar;
