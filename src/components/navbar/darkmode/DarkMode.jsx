import React from 'react';
import { Link } from 'react-router-dom';
import { FaMoon } from 'react-icons/fa';
import './DarkMode.scss';

const DarkMode = () => {
  return (
    <div className="dark-mode">
      <FaMoon />
      <Link to="/" className="">
        Dark Mode
      </Link>
    </div>
  );
};

export default DarkMode;
