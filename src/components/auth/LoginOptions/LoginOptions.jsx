import React from 'react';

// stylesheet
import './LoginOptions.scss';

// Data
// import { LoginOptionsData } from '@components/auth/LoginOptions/LoginOptionsData';

// components
import LoginDefault from '@components/auth/features/login/LoginDefault';

const LoginOptions = () => {
  const handleAuthPage = (title) => {
    return (
      <>
        <LoginDefault />
      </>
    );
  };

  return (
    <>
      <div className="authentication-container">{handleAuthPage()}</div>
    </>
  );
};

export default LoginOptions;
