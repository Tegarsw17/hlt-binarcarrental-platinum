import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  showPopupDelete,
  hidePopupDelete,
} from '../reduxToolkit/features/admin-popup/popupSlice';
import { getList } from '../reduxToolkit/features/admin-list/listSlice';
const useDeleteCar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async (idCar, access_token_admin) => {
    const payload = {
      headers: {
        access_token: access_token_admin,
      },
    };

    try {
      let response;
      response = await axios.delete(
        `https://api-car-rental.binaracademy.org/admin/car/${idCar}`,
        payload
      );
      setTimeout(() => {
        dispatch(hidePopupDelete());
        sessionStorage.setItem('successMessage', 'Data Berhasil Dihapus');
        sessionStorage.setItem('color', '#000000');

        navigate(0);

        // const getUrls = window.location.search;
        // const paramsUrl = new URLSearchParams(getUrls);
        // dispatch(getList({ paramsUrl, access_token_admin }));
        // window.scrollTo({
        //   top: 0,
        //   behavior: 'smooth', // This provides a smooth scrolling effect
        // });
      }, 0);
    } catch (error) {}
  };
  return {
    handleDelete,
  };
};

export default useDeleteCar;
