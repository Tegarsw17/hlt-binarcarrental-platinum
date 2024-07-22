import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { getList } from '../reduxToolkit/features/admin-list/listSlice';

const useListCarAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { access_token_admin } = useSelector((state) => state.authAdminReducer);
  const [searchParams, setSearchParams] = useSearchParams();
  const [paramsUrl, setParamsUrl] = useState({
    name: searchParams.get('name') || '',
    category: searchParams.get('category') || '',
    page: searchParams.get('page') || 1,
    pageSize: searchParams.get('pageSize') || 10,
  });

  const handleDelete = (id) => {
    dispatch(showPopupDelete(id));
  };

  const handleEdit = (id) => {
    navigate(`/admin/editcars/${id}`);
  };

  //   useEffect(() => {
  //     const size = 'all';
  //     dispatch(getList({ size, namecar }));
  //   }, []);

  //   useEffect(() => {
  //     const size = 'all';
  //     dispatch(getList({ size, namecar }));
  //   }, [namecar]);

  useEffect(() => {
    setSearchParams(paramsUrl);
    dispatch(getList({ paramsUrl, access_token_admin }));
  }, [paramsUrl]);

  return {
    paramsUrl,
    handleEdit,
    handleDelete,
    setParamsUrl,
    setSearchParams,
  };
};

export default useListCarAdmin;
