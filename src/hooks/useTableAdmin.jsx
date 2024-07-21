import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  getListOrder,
  patchStatusOrder,
} from '../reduxToolkit/features/admin-listorder/listOrderSlice';
// } from '../../../reduxToolkit/features/admin-listorder/listOrderSlice';
import { useSearchParams } from 'react-router-dom';

const useTableAdmin = () => {
  const { access_token_admin } = useSelector((state) => state.authAdminReducer);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [paramsUrl, setParamsUrl] = useState({
    sortBy: searchParams.get('sortBy') || 'created_at',
    sortAsc: searchParams.get('sortAsc') || 'desc',
    page: searchParams.get('page') || 1,
    pageSize: searchParams.get('pageSize') || 10,
  });
  const HeaderOrder = [
    'id',
    'user_email',
    'car',
    'start_rent_at',
    'finish_rent_at',
    'total_price',
    'created_at',
    'status',
  ];
  const HeaderNames = [
    'No',
    'User Email',
    'car',
    'Start Rent',
    'finish Rent',
    'Price',
    'Created At',
    'status',
  ];

  const handleSort = (sortBy) => {
    setParamsUrl({
      ...paramsUrl,
      sortBy,
      sortAsc: paramsUrl.sortAsc === 'asc' ? 'desc' : 'asc',
    });
  };

  const handleClickStatus = (id, status) => {
    dispatch(patchStatusOrder({ id, status, access_token_admin }));

    setParamsUrl({
      ...paramsUrl,
      idstatus: id,
      status: status,
    });
  };

  const handleSelectLimit = (value) => {
    setParamsUrl({
      ...paramsUrl,
      pageSize: value.target.value,
    });
  };

  const handleSelectPage = (value) => {
    setParamsUrl({
      ...paramsUrl,
      page: value.target.value,
    });
  };

  useEffect(() => {
    // const updatedUrl = new URLSearchParams(paramsUrl);
    // const params = Object.fromEntries(updatedUrl.entries());
    setSearchParams(paramsUrl);
    dispatch(getListOrder({ paramsUrl, access_token_admin }));
  }, [paramsUrl]);

  return {
    HeaderOrder,
    HeaderNames,
    handleSort,
    handleClickStatus,
    handleSelectLimit,
    handleSelectPage,
  };
};

export default useTableAdmin;
