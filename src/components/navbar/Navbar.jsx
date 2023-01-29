import React from 'react';
import { Outlet } from 'react-router-dom';

import './Navbar.scss';

// component
import logo from '@assets/images/logo2.svg';
import Button from '@components/button/Button';
import { FaEllipsisV } from 'react-icons/fa';

const Navbar = () => {
  const handleLoginCLick = () => {
    console.log('click');
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-container">
            <img src={logo} alt="" />
          </div>
          <div>
            <input type="text" placeholder="Search accounts" />
          </div>
          <div className="nav-buttons">
            <button>hello</button>
            <Button disabled={false} buttonColor="primary" handleClick={handleLoginCLick}>
              Login
            </Button>
            <FaEllipsisV></FaEllipsisV>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
