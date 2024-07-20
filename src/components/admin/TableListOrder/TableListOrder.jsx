import './TableListOrder.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getListOrder } from '../../../reduxToolkit/features/admin-listorder/listOrderSlice';
import { formatDate, formatRupiah } from '../../../utils/formatUtil';
import { useSearchParams } from 'react-router-dom';

import iconSort from '../../../assets/fi_sort.png';
import iconRectangle from '../../../assets/Rectangle10.png';

const TableListOrder = () => {
  const dispatch = useDispatch();
  const { access_token_admin } = useSelector((state) => state.authAdminReducer);
  const { listorder, loading, error } = useSelector(
    (state) => state.listOrderSlice
  );

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
  ];
  const HeaderNames = [
    'No',
    'User Email',
    'car',
    'Start Rent',
    'finish Rent',
    'Price',
    'Created At',
  ];

  const handleSort = (sortBy) => {
    // setParamsUrl((prevParams) => {
    //   const newSortAsc = prevParams.sortAsc === 'asc' ? 'desc' : 'asc';
    //   return {
    //     ...prevParams,
    //     sortBy,
    //     sortAsc: newSortAsc,
    //   };

    //   ...prevParams;
    //   sortBy,
    //   sortAsc: prevParams.sortAsc === 'asc' ? 'desc' : 'asc';,
    // });

    setParamsUrl({
      ...paramsUrl,
      sortBy,
      sortAsc: paramsUrl.sortAsc === 'asc' ? 'desc' : 'asc',
    });
  };

  useEffect(() => {
    setSearchParams(paramsUrl);
    dispatch(getListOrder(searchParams));
  }, []);

  useEffect(() => {
    setSearchParams(paramsUrl);
    const params = Object.fromEntries(searchParams.entries());
    dispatch(getListOrder(params));
  }, [paramsUrl, setSearchParams]);

  // const getCarName = (id) => {
  //   const car = nameCar.find((item) => item.orderId === id);
  //   return car ? car.carName : 'null';
  // };

  return (
    <div>
      <p className="text-xl font-bold mb-6">Dashboard</p>
      <div className="flex items-center gap-2 mb-4">
        <img className="w-1 h-6" src={iconRectangle} alt="" />
        <p className="text-sm font-bold m-0">List Order</p>
      </div>
      <table className="bg-white table-container divide-y divide-gray-200 ">
        <thead className="color-thead">
          <tr>
            {HeaderNames.map((item, index) => (
              <th
                scope="col"
                className={`w-40 px-2 py-2 text-xs font-medium text-gray-500 capitalize`}
                key={index}
              >
                <div
                  className={`flex items-center  ${item === 'No' ? 'justify-center' : 'justify-between'}`}
                >
                  {item}
                  {item === 'No' ? null : (
                    <button onClick={() => handleSort(HeaderOrder[index])}>
                      <img src={iconSort} alt="" />
                    </button>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <p className="text-center flex justify-center items-center">
              Loading
            </p>
          ) : (
            listorder.map((item, rowindex) => (
              <tr className="border-b-2" key={rowindex}>
                {HeaderOrder.map((col, colindex) => (
                  <td
                    key={colindex}
                    className={`h-3 w-40 px-1 py-1 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-700 ${col === 'id' ? 'text-center' : ''}`}
                  >
                    {col.includes('user_email')
                      ? item.User.email
                      : col.includes('rent')
                        ? formatDate(item[col])
                        : col.includes('price')
                          ? formatRupiah(item['total_price'])
                          : col.includes('create')
                            ? formatDate(item['createdAt'])
                            : item[col]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableListOrder;
