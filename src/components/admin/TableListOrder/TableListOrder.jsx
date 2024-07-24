import './TableListOrder.css';
import iconSort from '../../../assets/fi_sort.png';
import iconRectangle from '../../../assets/Rectangle10.png';
import useTableAdmin from '../../../hooks/useTableAdmin';
import { useSelector } from 'react-redux';
import {
  formatStatusOrder,
  formatDate,
  formatRupiah,
} from '../../../utils/formatUtil';

const TableListOrder = () => {
  const { listorder } = useSelector((state) => state.listOrderSlice);
  const { HeaderOrder, HeaderNames, handleSort, handleClickStatus } =
    useTableAdmin();

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
                  className={`flex items-center  ${item === 'No' || item === 'status' ? 'justify-center' : 'justify-between'}`}
                >
                  {item}
                  {item === 'No' ||
                  item === 'status' ||
                  item === 'car' ||
                  item === 'Price' ? null : (
                    <button onClick={() => handleSort(HeaderOrder[index])}>
                      <img src={iconSort} alt="" />
                    </button>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="minimun-body-table">
          {listorder.map((item, rowindex) => (
            <tr className="border-b-2" key={rowindex}>
              {HeaderOrder.map((col, colindex) => (
                <td
                  key={colindex}
                  className={`h-3 w-40 px-1 py-1 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-700 ${col === 'id' ? 'text-center' : ''}`}
                >
                  {col.includes('user_email') ? (
                    item.User.email
                  ) : col.includes('rent') ? (
                    formatDate(item[col])
                  ) : col.includes('price') ? (
                    formatRupiah(item['total_price'])
                  ) : col.includes('create') ? (
                    formatDate(item['createdAt'])
                  ) : col.includes('status') ? (
                    <div className="flex flex-col items-center justify-center">
                      <div className="m-0 text-xs">
                        {formatStatusOrder(item[col], item['updatedAt'])}
                      </div>
                      <div className="w-fit flex gap-2 justify-center items-center">
                        <button
                          onClick={() => handleClickStatus(item.id, '1')}
                          className={`text-center font-sans text-xs font-semibold rounded py-1 px-4 border  ${item[col] ? 'btn-color-disabled' : ' text-white btn-color-enabled btn-color-enabled-hover '}`}
                          disabled={item[col] ? true : false}
                        >
                          confirm
                        </button>
                        <button
                          onClick={() => handleClickStatus(item.id, '0')}
                          className={`text-center font-sans text-xs font-semibold rounded py-1 px-4 border  ${!item[col] ? 'btn-color-disabled' : ' text-white btn-color-enabled  btn-color-enabled-hover '}`}
                          disabled={item[col] ? false : true}
                        >
                          Finish
                        </button>
                      </div>
                    </div>
                  ) : (
                    item[col]
                  )}
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
