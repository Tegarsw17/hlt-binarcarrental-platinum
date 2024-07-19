import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  getListOrder,
  getDetailCar,
} from '../../../reduxToolkit/features/admin-listorder/listOrderSlice';
import './TableListOrder.css';
import { formatDate, formatRupiah } from '../../../utils/formatUtil';
import iconSort from '../../../assets/fi_sort.png';
import iconRectangle from '../../../assets/Rectangle10.png';
const TableListOrder = () => {
  const dispatch = useDispatch();
  const [sortAsc, setSortAsc] = useState(true);
  const HeaderOrder = [
    'id',
    'user_email',
    'car',
    'finish_rent_at',
    'finish_rent_at',
    'total_price',
    'category',
  ];
  const HeaderNames = [
    'No',
    'User Email',
    'car',
    'Start Rent',
    'finish Rent',
    'Price',
    'Category',
  ];
  const { headers, nameCar, listorder, loading, error } = useSelector(
    (state) => state.listOrderSlice
  );

  const handleSort = (sortBy, sortAsc) => {
    setSortAsc(!sortAsc);
    // console.log(sortBy, sort);
    sortBy !== 'category' ? dispatch(getListOrder({ sortBy, sortAsc })) : null;
  };

  const getCarName = (id) => {
    const car = nameCar.find((item) => item.orderId === id);
    return car ? car.carName : 'null';
  };

  useEffect(() => {
    const sortBy = '';
    const sortAsc = true;
    // dispatch(getListOrder({ sortBy, sortAsc }));
    dispatch(getListOrder({ sortBy, sortAsc })).then(() =>
      dispatch(getDetailCar())
    );
  }, []);

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
                    <button
                      onClick={() => handleSort(HeaderOrder[index], sortAsc)}
                    >
                      <img src={iconSort} alt="" />
                    </button>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {listorder.map((item, rowindex) => (
            <tr className="border-b-2" key={rowindex}>
              {HeaderOrder.map((col, colindex) => (
                <td
                  key={colindex}
                  className={`h-3 w-40 px-1 py-1 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-700 ${col === 'id' ? 'text-center' : ''}`}
                >
                  {col === 'user_email'
                    ? item.User.email
                    : col.includes('car')
                      ? getCarName(item[col])
                      : col.includes('rent')
                        ? formatDate(item[col])
                        : col.includes('price')
                          ? formatRupiah(item[col])
                          : item[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableListOrder;
