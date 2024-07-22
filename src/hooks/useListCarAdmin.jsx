import { useDispatch, useSelector } from 'react-redux';
import { useDeferredValue, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getList } from '../reduxToolkit/features/admin-list/listSlice';
import { deleteCar } from '../reduxToolkit/features/admin-deletecar/deletecarSlice';
import {
  hidePopupDelete,
  showPopupDelete,
} from '../reduxToolkit/features/admin-popup/popupSlice';

const useListCarAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { access_token_admin } = useSelector((state) => state.authAdminReducer);
  const { pageCount } = useSelector((state) => state.listSlice);
  const { idCar } = useSelector((state) => state.popupSlice);

  const [searchParams, setSearchParams] = useSearchParams();
  const [categoryActive, setCategoryActive] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [paramsUrl, setParamsUrl] = useState({
    name: searchParams.get('name') || '',
    category: searchParams.get('category') || '',
    page: searchParams.get('page') || 1,
    pageSize: searchParams.get('pageSize') || 6,
  });
  let deferredValue = useDeferredValue(paramsUrl);

  const handleConfirmDeleteCar = () => {
    dispatch(deleteCar({ idCar, access_token_admin }));
    dispatch(hidePopupDelete());

    setParamsUrl({
      ...paramsUrl,
    });
  };

  const handleCancelDeleteCar = () => {
    dispatch(hidePopupDelete());
  };

  const handleDelete = (id) => {
    dispatch(showPopupDelete(id));
  };

  const handleEdit = (id) => {
    setSearchParams(searchParams);
    navigate(`/admin/editcars/${id}`);
  };

  const onPageChange = (page) => {
    setParamsUrl({
      ...paramsUrl,
      page: page,
    });
    setCurrentPage(page);
  };

  const handleClickCategory = (category) => {
    setCategoryActive(category);
    setParamsUrl({
      ...paramsUrl,
      category: category,
    });
  };

  useEffect(() => {
    setSearchParams(paramsUrl);
    dispatch(getList({ paramsUrl, access_token_admin }));
  }, [deferredValue]);

  return {
    categoryActive,
    currentPage,
    searchParams,
    paramsUrl,
    pageCount,
    handleEdit,
    handleDelete,
    setParamsUrl,
    setSearchParams,
    onPageChange,
    handleClickCategory,
    handleCancelDeleteCar,
    handleConfirmDeleteCar,
  };
};

export default useListCarAdmin;
