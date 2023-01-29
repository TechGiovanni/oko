import { useRoutes } from 'react-router-dom';

import Navbar from '@components/navbar/Navbar';
import Home from '@pages/home/home';

export const AppRouter = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Navbar />,
      children: [
        {
          path: 'foryou',
          element: <Home />,
        },
      ],
    },
  ]);

  return element;
};
