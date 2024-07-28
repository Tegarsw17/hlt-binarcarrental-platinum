import './ListCar.css';
import imgNotFound from '../../../assets/img-BeepBeep.png';
import Popupdelete from '../PopupDelete/index';
import { useSelector } from 'react-redux';
import CardCar from '../CardCar/CardCar';
const ListCar = () => {
  const { popUpDeleteVisible, idCar } = useSelector(
    (state) => state.popupSlice
  );
  const { listcar } = useSelector((state) => state.listSlice);

  return (
    <div className="flex justify-center items-center container max-w-6xl">
      {listcar.length === 0 ? (
        <div className="text-center">
          <p className="text-2xl"> Car Not Found :( </p>
          <img className="h-36 w-40" src={imgNotFound} alt="" />
        </div>
      ) : (
        <CardCar listcar={listcar} />
      )}
      <div className={popUpDeleteVisible ? 'visible' : 'invisible'}>
        <Popupdelete idCar={idCar} />
      </div>
    </div>
  );
};

export default ListCar;
