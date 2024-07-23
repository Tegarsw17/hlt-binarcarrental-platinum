import imgplus from '../../../assets/fi_plus.png';
import { useNavigate } from 'react-router-dom';
const ButtonAddCar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/admin/addcars`);
  };
  return (
    <div className="w-full flex justify-between items-center">
      <h2 className="header-title-admin">List Car</h2>
      <div className="justify-self-end">
        <button
          onClick={handleClick}
          className="flex gap-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          <img src={imgplus} alt="" />
          Add New Car
        </button>
      </div>
    </div>
  );
};

export default ButtonAddCar;
