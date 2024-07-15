import './Dashboard.css';
import Navbar from '../../../components/admin/Navbar/Navbar';
import TableListOrder from '../../../components/admin/TableListOrder/TableListOrder';

const Dashboard = () => {
  return (
    <div className="admin-page-color w-full h-screen">
      <Navbar />
      <div className=" flex flex-col justify-center items-center px-52 z-0 pt-24  container gap-component">
        <TableListOrder />
      </div>
    </div>
  );
};

export default Dashboard;
