import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/customer/Home';
import Search from '../pages/customer/Search';
import Car from '../pages/customer/Car';
import CarDetail from '../pages/customer/CarDetail';
import Payment from '../pages/customer/Payment';

export const routeList = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
]);
