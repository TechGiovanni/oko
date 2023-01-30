import { useRoutes } from 'react-router-dom';

import Navbar from '@components/navbar/Navbar';
import Login from '@pages/auth/login/Login';
import Register from '@pages/auth/register/Register';
import ForgotPassword from '@pages/auth/forgotPassword/ForgotPassword';

export const AppRouter = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Navbar />,
      children: [
        {
          path: 'auth/login',
          element: <Login />,
        },
        {
          path: 'auth/register',
          element: <Register />,
        },
        {
          path: 'auth/password-reset',
          element: <ForgotPassword />,
        },
      ],
    },
  ]);

  return element;
};
