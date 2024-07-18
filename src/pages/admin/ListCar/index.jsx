import './index.css';
import ButtonAddCar from '../../../components/admin/ButtonAddCar/index';
import ButtonCategory from '../../../components/admin/ButtonCategory/index';
import ListCar from '../../../components/admin/Listcar/ListCar';
import Navbar from '../../../components/admin/Navbar/Navbar';
// todo : harus ada akses token sebelum mengakses halaman ini
const AdminListCar = () => {
  return (
    <div className="admin-container w-full h-full pb-5">
      <Navbar />
      <div className=" px-52 z-0 pt-24 flex container gap-component">
        <h4 className="flex flex-row gap-1 admin-tag-page pl-3 pr-3">
          <span>Cars &gt;</span>
          <p>List</p>
        </h4>
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
