import { createBrowserRouter } from 'react-router-dom';

// customer routes
import CustomerProtectedRoute from './CustomerProtectedRoute';
import Home from '../pages/customer/Home';
import Search from '../pages/customer/Search';
import Car from '../pages/customer/Car';
import CarDetail from '../pages/customer/CarDetail';
import Payment from '../pages/customer/Payment';
import Login from '../pages/customer/Login';
import Register from '../pages/customer/Register';

// admin routes
import AdminProtectedRoute from './AdminProtectedRoute';
import LoginAdmin from '../pages/admin/Login';
import Dashboard from '../pages/admin/Dashboard';
import AdminListCar from '../pages/admin/ListCar';
import AddCars from '../pages/admin/AddCars';
import EditCars from '../pages/admin/EditCars';

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
    path: '/admin/login',
    element: <LoginAdmin />,
  },
  {
    path: '',
    element: <AdminProtectedRoute />,
    children: [
      {
        path: '/admin/addcars',
        element: <AddCars />,
      },
      {
        path: '/admin/editcars/:id',
        element: <EditCars />,
      },
      {
        path: '/admin/listcar',
        element: <AdminListCar />,
      },
      {
        path: '/admin',
        element: <Dashboard />,
      },
    ],
  },
]);
