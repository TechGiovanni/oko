import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

// styleSheet
import '@components/auth/Auth.scss';

// components
import LoginOptions from '@components/auth/loginOptions/LoginOptions';
import RegisterOptions from '@components/auth/registerOptions/RegisterOptions';

const Auth = ({ setOpenAuthTab }) => {
  const showLoginOrRegister = useSelector((state) => state.loginOrRegisterTab.loginTab);

  const handleCloseAuthTabs = () => {
    setOpenAuthTab(false);
  };

  return (
    <div className="auth">
      {showLoginOrRegister ? <LoginOptions /> : <RegisterOptions />}
      <div className="auth-backdrop" onClick={handleCloseAuthTabs}></div>
    </div>
  );
};

Auth.propTypes = {
  setOpenAuthTab: PropTypes.func,
};

export default Auth;
