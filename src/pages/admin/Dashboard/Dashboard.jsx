import './Dashboard.css';
import iconChevron from '../../../assets/chevron-right.png';

import Navbar from '../../../components/admin/Navbar/Navbar';
import MonthPicker from '../../../components/admin/ChartOrder/MonthPicker/MonthPicker';
import ChartOrder from '../../../components/admin/ChartOrder/ChartOrder';
import TableListOrder from '../../../components/admin/TableListOrder/TableListOrder';
import LimitPage from '../../../components/admin/Limit/Limit';
import JumptoPage from '../../../components/admin/JumptoPage/JumptoPage';
import Paging from '../../../components/admin/Paging/Paging';
import Tag from '../../../components/admin/Tag/Tag';
import useTableAdmin from '../../../hooks/useTableAdmin';
import Title from '../../../components/admin/Title/Title';
const Dashboard = () => {
  const { pageSize, pageCount, currentPage, onPageChange, handleSelectLimit } =
    useTableAdmin();

  return (
    <div className="admin-page-color w-full h-full pb-5">
      <Navbar />
      <div className=" flex flex-col justify-center items-center px-52 z-0 pt-24  container gap-component">
        <div className="w-full max-w-6xl">
          <Tag tags="Dashboard" subTags="Dashboard" />
          <Title title="" subtitle="Rented Car Data Visualization" />
          <MonthPicker />
          <ChartOrder />
          <Title title="Dashboard" subtitle="List Order" />
          <TableListOrder />
          <div className="w-full max-size-option-table flex justify-between items-center">
            <div className="flex justify-between items-center gap-6">
              <LimitPage
                pageSize={pageSize}
                handleSelectLimit={handleSelectLimit}
              />
              <JumptoPage
                pageCount={pageCount}
                currentPage={currentPage}
                onPageChange={onPageChange}
              />
            </div>
            <Paging
              pageCount={pageCount}
              currentPage={2 + (currentPage - 2)}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
