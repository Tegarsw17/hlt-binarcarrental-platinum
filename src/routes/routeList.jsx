import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/customer/Home';
import Search from '../pages/customer/Search';
import Car from '../pages/customer/Car';
import CarDetail from '../pages/customer/CarDetail';
import LoginAdmin from '../pages/admin/Login';
import AddCars from '../pages/admin/AddCars';
import EditCars from '../pages/admin/EditCars';
import AdminListCar from '../pages/admin/ListCar/index';
import Payment from '../pages/customer/Payment';
import Login from '../pages/customer/Login';
import Register from '../pages/customer/Register';
import Dashboard from '../pages/admin/Dashboard/Dashboard';
export const routeList = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/admin/login',
    element: <LoginAdmin />,
  },
  {
    path: '/admin/addcars',
    element: <AddCars />,
  },
  {
    path: '/admin/editcars/:id',
    element: <EditCars />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/search',
    element: <Search />,
  },
  {
    path: '/car',
    element: <Car />,
  },
  {
    path: '/car/:id',
    element: <CarDetail />,
  },
  {
    path: '/payment/:id',
    element: <Payment />,
  },
  {
    path: '/admin/listcar/:namecar',
    element: <AdminListCar />,
  },
  {
    path: '/admin/dashboard',
    element: <Dashboard />,
  },
]);
