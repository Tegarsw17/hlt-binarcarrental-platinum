import imgdelete from '../../../assets/img-BeepBeep.png';
import './index.css';

import useListCarAdmin from '../../../hooks/useListCarAdmin';

//  todo : ID nantinya akan digunakan untuk delete data car,
//  todo : perlu membuat deletecarSlice
//
const PopupDelete = () => {
  // const dispatch = useDispatch();
  const { handleConfirmDeleteCar, handleCancelDeleteCar } = useListCarAdmin();

  return (
    <div>
      <div className="z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full fixed bg-black opacity-60"></div>
      <div className="z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fixed bg-white popup-delete-size flex flex-col justify-center items-center">
        <img className="img-delete mb-6" src={imgdelete} alt="" />
        <p className="headfont-popup-delete mb-4">Menghapus Data Mobil</p>
        <p className="bodyfont-popup-delete text-center mb-6">
          Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin
          menghapus?
        </p>
        <div className="flex gap-4 btn-popup-delete">
          <button
            onClick={() => handleConfirmDeleteCar()}
            className="size-btn-delete text-center"
          >
            Ya
          </button>
          <button
            onClick={() => handleCancelDeleteCar()}
            className="size-btn-delete text-center"
          >
            Tidak
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupDelete;
