import './Dashboard.css';
import Navbar from '../../../components/admin/Navbar/Navbar';
import MonthPicker from '../../../components/MonthPicker/MonthPicker';
import ChartOrder from '../../../components/admin/ChartOrder/ChartOrder';
import TableListOrder from '../../../components/admin/TableListOrder/TableListOrder';
import LimitPage from '../../../components/admin/TableListOrder/Limit/Limit';
import JumptoPage from '../../../components/admin/TableListOrder/JumptoPage/JumptoPage';
import Paging from '../../../components/admin/TableListOrder/Paging/Paging';
const Dashboard = () => {
  return (
    <div className="admin-page-color w-full h-full">
      <Navbar />
      <div className=" flex flex-col justify-center items-center px-52 z-0 pt-24  container gap-component">
        <MonthPicker />
        <ChartOrder />
        <TableListOrder />
        <div className="w-full max-size-option-table flex justify-between items-center">
          <div className="flex justify-between items-center gap-6">
            <div className="flex flex-col gap-2 justify-center items-center ">
              <p className="text-black font-title-btn font-normal text-xs leading-4 place-self-start">
                Limit
              </p>
              <LimitPage />
            </div>
            <div className="flex flex-col gap-2 justify-center items-center ">
              <p className="text-black font-title-btn font-normal text-xs leading-4 place-self-start">
                Jump to Page
              </p>
              <JumptoPage />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Paging />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
