import React from 'react';
import { Outlet } from 'react-router-dom';

import './Navbar.scss';

// component
import logo from '@assets/images/logo2.svg';
import Button from '@components/button/Button';

const Navbar = () => {
  const handleLoginCLick = () => {
    console.log('click');
  };
  return (
    <div>
      <nav className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
        <div>
          <input type="text" placeholder="Search accounts" />
        </div>
        <div>
          <Button disabled={false} buttonType="primary" handleClick={handleLoginCLick}>
            Login
          </Button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
