// import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// stylesheet
import styled from 'styled-components';
import './Navbar.scss';

// component
import logo from '@assets/images/logo2.svg';
import Button from '@components/button/Button';
import { FaEllipsisV } from 'react-icons/fa';
import DarkMode from '@components/navbar/darkmode/DarkMode';
import Auth from '@components/auth/Auth';

// reducer
import { closeAuthModal } from '@redux/reducers/loginModal/loginModal.reducer';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100vh;
`;

const Navbar = () => {
  // const [openAuthModal, setOpenAuthModal] = useState(true);
  const dispatch = useDispatch();
  const authModal = useSelector((state) => state.authModalName.authModalState);

  const handleOpenAuthModal = () => {
    dispatch(closeAuthModal({ authModalState: true }));
  };

  return (
    <div>
      {' '}
      {authModal && (
        <Backdrop>
          <Auth />
        </Backdrop>
      )}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-container">
            <img src={logo} alt="" />
          </div>
          <div>
            <input type="text" placeholder="Search accounts" />
          </div>
          <div className="nav-buttons">
            <button onClick={handleOpenAuthModal}>Button</button>
            <Button disabled={false} buttonColor="primary" handleClick={handleOpenAuthModal}>
              Login
            </Button>
            <div className="menu-items">
              <FaEllipsisV className="navbar-three-dots"></FaEllipsisV>
              <div className="dropdown-menu">
                <DarkMode />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
