import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/customer/Home';
import Search from '../pages/customer/Search';
import Car from '../pages/customer/Car';
import CarDetail from '../pages/customer/CarDetail';
import AdminListCar from '../pages/admin/ListCar/index';
import Payment from '../pages/customer/Payment';
import Login from '../pages/customer/Login';
import Register from '../pages/customer/Register';
import CustomerProtectedRoute from './CustomerProtectedRoute';
export const routeList = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
    element: (
      <CustomerProtectedRoute>
        <Payment />
      </CustomerProtectedRoute>
    ),
  },
  {
    path: '/admin/listcar',
    element: <AdminListCar />,
  },
]);
