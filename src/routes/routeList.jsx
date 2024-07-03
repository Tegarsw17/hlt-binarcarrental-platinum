import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/customer/Home';
import Search from '../pages/customer/Search';
import Car from '../pages/customer/Car';
import CarDetail from '../pages/customer/CarDetail';
import Login from '../pages/admin/Login';
import AddCars from '../pages/admin/AddCars';
import EditCars from '../pages/admin/EditCars';

export const routeList = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/admin/login',
    element: <Login />,
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
]);
