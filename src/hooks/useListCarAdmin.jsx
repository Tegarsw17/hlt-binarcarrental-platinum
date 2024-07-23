import { useDispatch, useSelector } from 'react-redux';
import { useDeferredValue, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getList } from '../reduxToolkit/features/admin-list/listSlice';
import {
  hidePopupDelete,
  showPopupDelete,
} from '../reduxToolkit/features/admin-popup/popupSlice';

// Custom hook to manage the admin car list
const useListCarAdmin = () => {
  const dispatch = useDispatch();

  const { access_token_admin } = useSelector((state) => state.authAdminReducer);
  const { pageCount } = useSelector((state) => state.listSlice);

  const [searchParams, setSearchParams] = useSearchParams();
  const [categoryActive, setCategoryActive] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  // const [pageCount, setPageCount] = useState(6);

  const [paramsUrl, setParamsUrl] = useState({
    name: searchParams.get('name') || '',
    category: searchParams.get('category') || '',
    page: searchParams.get('page') || 1,
    pageSize: searchParams.get('pageSize') || 6,
  });

  let deferredValue = useDeferredValue(paramsUrl);

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
      page: 1,
    });
    setCurrentPage(1);
  };

  useEffect(() => {
    console.log(paramsUrl.page);
    setSearchParams(paramsUrl);
    setCurrentPage(paramsUrl.page);
    dispatch(getList({ paramsUrl, access_token_admin }));
  }, [deferredValue]);

  return {
    categoryActive,
    currentPage,
    searchParams,
    paramsUrl,
    pageCount,
    setParamsUrl,
    setSearchParams,
    onPageChange,
    handleClickCategory,
  };
};

export default useListCarAdmin;
