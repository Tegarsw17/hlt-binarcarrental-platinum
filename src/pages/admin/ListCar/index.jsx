import './index.css';
import ButtonAddCar from '../../../components/admin/ButtonAddCar/index';
import ButtonCategory from '../../../components/admin/ButtonCategory/index';
import ListCar from '../../../components/admin/Listcar/ListCar';

// todo : harus ada akses token sebelum mengakses halaman ini
const AdminListCar = () => {
  return (
    <div className="flex container gap-component">
      <h4 className="admin-tag-page pl-3 pr-3">
        <span>Cars &gt;</span> List
      </h4>
      <div className="flex justify-between pl-3">
        <h2 className="header-title-admin">List Car</h2>
        <ButtonAddCar />
      </div>
      <ButtonCategory />
      <ListCar />
    </div>
  );
};

export default AdminListCar;
