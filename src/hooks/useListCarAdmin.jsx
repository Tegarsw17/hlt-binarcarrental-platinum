import { useDispatch, useSelector } from 'react-redux';
import { useDeferredValue, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getList } from '../reduxToolkit/features/admin-list/listSlice';

const useListCarAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { access_token_admin } = useSelector((state) => state.authAdminReducer);
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

  const handleDelete = (id) => {
    dispatch(showPopupDelete(id));
  };

  const handleEdit = (id) => {
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
    handleEdit,
    handleDelete,
    setParamsUrl,
    setSearchParams,
    onPageChange,
    handleClickCategory,
  };
};

export default useListCarAdmin;
