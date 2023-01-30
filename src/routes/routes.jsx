import { useRoutes } from 'react-router-dom';

import Navbar from '@components/navbar/Navbar';
import Login from '@pages/auth/login/login';
// import Home from '@pages/home/home';

export const AppRouter = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Navbar />,
      children: [
        {
          path: '/auth/login',
          element: <Login />,
        },
      ],
    },
  ]);

  return element;
};
