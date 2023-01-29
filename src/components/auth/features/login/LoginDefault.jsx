import React from 'react';
// import PropTypes from 'prop-types';

// Data
import { LoginOptionsData } from '@components/auth/features/login/LoginOptionsData';

const LoginDefault = (props) => {
  return (
    <>
      <div className="auth-title">
        <h2>Log in to Kookiverse</h2>
      </div>
      <div>
        {LoginOptionsData.map((item) => {
          return (
            <div className="auth-option" key={item.id}>
              <img src={item.image && item.image} />
              <span>{item.content}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LoginDefault;
