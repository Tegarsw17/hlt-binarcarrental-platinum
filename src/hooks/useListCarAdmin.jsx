import { useDispatch, useSelector } from 'react-redux';
import { useDeferredValue, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getList } from '../reduxToolkit/features/admin-list/listSlice';
import {
  setSearchCar,
  setActive,
} from '../reduxToolkit/features/admin-navbar/navbarSlice';

// Custom hook to manage the admin car list
const useListCarAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { access_token_admin } = useSelector((state) => state.authAdminReducer);
  const { carName } = useSelector((state) => state.navbarSlice);
  const { currentPage, pageCount } = useSelector((state) => state.listSlice);

  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategoryActive] = useState('');
  const [paramsUrl, setParamsUrl] = useState({
    name: searchParams.get('name') || '',
    category: searchParams.get('category') || '',
    page: searchParams.get('page') || 1,
    pageSize: searchParams.get('pageSize') || 6,
  });

  let deferredValue = useDeferredValue(paramsUrl);

  const onPageChange = (pages) => {
    setParamsUrl({
      ...paramsUrl,
      name: carName,
      page: pages,
    });
  };

  const handleClickCategory = (category) => {
    setCategoryActive(category);
    setParamsUrl({
      ...paramsUrl,
      name: '',
      category: category,
    });
  };

  const handleClickSearch = (props) => {
    !window.location.pathname.includes('/admin/listcar')
      ? dispatch(setActive('cars'))
      : '';

    const updatedParams = {
      ...paramsUrl,
      name: props,
    };

    setParamsUrl(updatedParams);
    setSearchCar(props);
    setTimeout(() => {
      navigate({
        pathname: '/admin/listcar',
        search: `?${new URLSearchParams(updatedParams).toString()}`,
      });
    }, 0);
  };

  useEffect(() => {
    setSearchParams(paramsUrl);
    dispatch(getList({ paramsUrl, access_token_admin }));
  }, [deferredValue]);

  return {
    carName,
    category,
    currentPage,
    searchParams,
    pageCount,
    onPageChange,
    handleClickCategory,
    handleClickSearch,
  };
};

export default useListCarAdmin;
