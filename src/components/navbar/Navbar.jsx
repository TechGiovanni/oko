import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import './Navbar.scss';

// component
import logo from '@assets/images/logo2.svg';
import Button from '@components/button/Button';
import { FaEllipsisV } from 'react-icons/fa';
import DarkMode from '@components/navbar/darkmode/DarkMode';
import Auth from '@components/auth/Auth';

const Navbar = () => {
  const [openAuthTab, setOpenAuthTab] = useState(false);

  const handleLoginCLick = () => {
    console.log('clicking');
    setOpenAuthTab(true);
  };

  return (
    <div>
      {openAuthTab && <Auth setOpenAuthTab={setOpenAuthTab} />}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-container">
            <img src={logo} alt="" />
          </div>
          <div>
            <input type="text" placeholder="Search accounts" />
          </div>
          <div className="nav-buttons">
            <Button disabled={false} buttonColor="primary" handleClick={handleLoginCLick}>
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
