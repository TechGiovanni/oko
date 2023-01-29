import React from 'react';

// stylesheet
import './RegisterOptions.scss';

// Data
// import { RegisterOptionsData } from '@components/auth/RegisterOptions/RegisterOptionsData';

// components
import RegisterDefault from '@components/auth/features/registerDefault/RegisterDefault';

const RegisterOptions = () => {
  const handleAuthPage = (title) => {
    if (title === 'email-username') {
      return (
        <>
          {' '}
          <RegisterDefault handleAuthPage={handleAuthPage} />
        </>
      );
    }

    return (
      <>
        <RegisterDefault handleAuthPage={handleAuthPage} />
      </>
    );
  };

  return (
    <>
      <div className="authentication-container">{handleAuthPage()}</div>
    </>
  );
};

export default RegisterOptions;
