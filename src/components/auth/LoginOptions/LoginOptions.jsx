import PropTypes from 'prop-types';
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// stylesheet
import './LoginOptions.scss';

// components
import LoginDefault from '@components/auth/features/loginDefault/LoginDefault';
// import Login from '@pages/auth/login/login';

const LoginOptions = ({ setOpenAuthModal }) => {
  const [_signInOption, setSignInOption] = useState('hellos');
  const [initialLoginView, _setInitialLoginView] = useState(
    <LoginDefault setSignInOption={setSignInOption} setOpenAuthModal={setOpenAuthModal} />
  );
  // const navigate = useNavigate();

  // const handleAuthPage = (signInOption) => {
  //   if (signInOption === 'Use Email / Username') {
  //     return <Login></Login>;
  //   }
  //   return (
  //     <>
  //       <LoginDefault setSignInOption={setSignInOption} />
  //     </>
  //   );
  // };
  // handleAuthPage();

  return (
    <>
      <div className="authentication-container">{initialLoginView}</div>
    </>
  );
};

LoginOptions.propTypes = {
  setOpenAuthModal: PropTypes.func,
};

export default LoginOptions;
