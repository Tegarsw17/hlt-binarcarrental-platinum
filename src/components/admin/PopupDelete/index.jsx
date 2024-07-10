import imgdelete from '../../../assets/img-BeepBeep.png';
import './index.css';

import { useDispatch, useSelector } from 'react-redux';
import { hidePopupDelete } from '../../../reduxToolkit/features/admin-popup/popupSlice';
import { deleteCar } from '../../../reduxToolkit/features/admin-deletecar/deletecarSlice';
import { getList } from '../../../reduxToolkit/features/admin-list/listSlice';
//  todo : ID nantinya akan digunakan untuk delete data car,
//  todo : perlu membuat deletecarSlice
//
const PopupDelete = () => {
  const dispatch = useDispatch();
  const { idCar } = useSelector((state) => state.popupSlice);

  const handleConfirm = () => {
    // todo : delete data dengan slice, id masih pakai dummy agar data awet
    console.log('id sebelum pada komponen : ', idCar);
    dispatch(deleteCar({ idCar }));
    dispatch(hidePopupDelete());

    const size = 'all';
    dispatch(getList({ size }));
  };

  const handleClose = () => {
    dispatch(hidePopupDelete());
  };

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
            onClick={() => handleConfirm()}
            className="size-btn-delete text-center"
          >
            Ya
          </button>
          <button
            onClick={() => handleClose()}
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
