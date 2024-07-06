import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/customer/Home';
import Search from '../pages/customer/Search';
import Car from '../pages/customer/Car';
import CarDetail from '../pages/customer/CarDetail';
import Login from '../pages/customer/Login';
import Register from '../pages/customer/Register';

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
]);
