import React from 'react';

// stylesheet
import './LoginOptions.scss';

// Data
// import { LoginOptionsData } from '@components/auth/LoginOptions/LoginOptionsData';

// components
import LoginDefault from '@components/auth/features/loginDefault/LoginDefault';

const LoginOptions = () => {
  const handleAuthPage = (title) => {
    // if (title === 'email-username') {
    //   return (
    //     <>
    //       {' '}
    //       <LoginDefault handleAuthPage={handleAuthPage} />
    //     </>
    //   );
    // }

    return (
      <>
        <LoginDefault handleAuthPage={handleAuthPage} />
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
