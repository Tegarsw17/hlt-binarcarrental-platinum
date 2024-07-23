import './ListCar.css';
import Popupdelete from '../PopupDelete/index';
import { useSelector } from 'react-redux';
import CardCar from '../CardCar/CardCar';
const ListCar = () => {
  const { popUpDeleteVisible, idCar } = useSelector(
    (state) => state.popupSlice
  );

  return (
    <div className="flex justify-center items-center container max-w-6xl">
      <CardCar />
      <div className={popUpDeleteVisible ? 'visible' : 'invisible'}>
        <Popupdelete idCar={idCar} />
      </div>
    </div>
  );
};

export default ListCar;
