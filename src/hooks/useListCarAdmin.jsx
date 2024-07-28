import { useDispatch, useSelector } from 'react-redux';
import { useDeferredValue, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { getList } from '../reduxToolkit/features/admin-list/listSlice';
import {
  setSearchCar,
  setActive,
} from '../reduxToolkit/features/admin-navbar/navbarSlice';

const useListCarAdmin = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { access_token_admin } = useSelector((state) => state.authAdminReducer);
  const { currentPage, pageCount } = useSelector((state) => state.listSlice);
  // const { searchCarName } = useSelector((state) => state.navbarSlice);
  const [searchParams, setSearchParams] = useSearchParams();

  const [category, setCategory] = useState('');
  const paramsUrl = useRef({
    name: searchParams.get('name') || '',
    category: searchParams.get('category') || '',
    page: searchParams.get('page') || 1,
    pageSize: searchParams.get('pageSize') || 6,
  });

  let deferredValue = useDeferredValue(searchParams);

  // todo hanya handle setSearchParams, tidak merubah paramsUrl
  const onPageChange = (pages) => {
    setSearchParams((prev) => {
      prev.set('page', pages);
      return prev;
    });
  };

  // todo hanya handle setSearchParams, tidak merubah paramsUrl
  const handleClickCategory = (props) => {
    setCategory(props);
    setSearchParams((prev) => {
      prev.set('name', '');
      prev.set('category', props);
      prev.set('page', 1);
      return prev;
    });
  };

  // memasukan nilai paramsUrl yang berisi data dari halaman sebelumnya ke searchParams
  useEffect(() => {
    setSearchParams(paramsUrl.current);
  }, []);

  useEffect(() => {
    const newParams = {
      name: searchParams.get('name') || '',
      category: searchParams.get('category') || '',
      page: searchParams.get('page') || 1,
      pageSize: searchParams.get('pageSize') || 6,
    };

    dispatch(getList({ paramsUrl: newParams, access_token_admin }));
  }, [deferredValue]);

  return {
    category,
    currentPage,
    searchParams,
    pageCount,
    onPageChange,
    handleClickCategory,
  };
};

export default useListCarAdmin;
