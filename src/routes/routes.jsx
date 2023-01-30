import { useRoutes } from 'react-router-dom';

import Navbar from '@components/navbar/Navbar';
import Login from '@pages/auth/login/Login';
import Register from '@pages/auth/register/Register';

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
        {
          path: '/auth/register',
          element: <Register />,
        },
      ],
    },
  ]);

  return element;
};
