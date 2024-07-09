import './ListCar.css';
import imgTrash from '../../../assets/img-trash.png';
import imgEdit from '../../../assets/img-edit.png';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getList } from '../../../reduxToolkit/features/admin-list/listSlice';
// import popupSlice from '../../../reduxToolkit/features/admin-popup/popupSlice';
import { showPopupDelete } from '../../../reduxToolkit/features/admin-popup/popupSlice';
import Popupdelete from '../PopupDelete/index';

const ListCar = () => {
  // todo button delete dan edit akan dibuatkan komponen terpisah dan di panggil
  const dispatch = useDispatch();
  const { listcar, loading, error } = useSelector((state) => state.listSlice);
  const isVisible = useSelector((state) => state.popupSlice.isVisible);

  const handleDelete = (id) => {
    dispatch(showPopupDelete(id));
  };

  useEffect(() => {
    const size = 'all';
    dispatch(getList({ size }));
  }, []);

  return (
    <div className="container max-w-6xl">
      <div className="grid grid-cols-3">
        {listcar.map((item) => (
          // <div className="col-md-4 size-card-container">
          <div
            className="d-flex justify-content-center align-items-center m-2 shadow-sm card max-card-width"
            key={item.id}
          >
            <div className="d-flex m-0 p-0 justify-content-center align-items-center card-body card-admin-container card-body-size">
              <div className="card-font">
                <img
                  className="card-img-size card-img-top"
                  src={item.image}
                  alt=""
                />
                <p>
                  {item.name}/{item.category}
                </p>
                <p>
                  <span>{item.price} / hari</span>
                </p>
                <p>{item.category}</p>
                <p>{item.updatedAt}</p>
              </div>
              {/* todo : sepertinya lebih bagus kalau button dibuatkan comp terpisah */}
              <div className="admin-card-btn-container justify-content-center d-flex">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="d-flex justify-content-center align-items-center gap-10"
                >
                  <img src={imgTrash} alt="" />
                  delete
                </button>
                <button className="d-flex justify-content-center align-items-center gap-10">
                  <img src={imgEdit} alt="" />
                  edit
                </button>
              </div>
            </div>
          </div>
          // </div>
        ))}
      </div>
      <div className={isVisible ? 'visible' : 'invisible'}>
        <Popupdelete />
      </div>
    </div>
  );
};

export default ListCar;
