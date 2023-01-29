import PropTypes from 'prop-types';
import '@components/auth/Auth.scss';
import LoginOptions from '@components/auth/LoginOptions/LoginOptions';

const Auth = ({ setOpenAuthTab }) => {
  const handleCloseAuthTabs = () => {
    setOpenAuthTab(false);
  };

  return (
    <div className="auth">
      <LoginOptions />
      <div className="auth-backdrop" onClick={handleCloseAuthTabs}></div>
    </div>
  );
};

Auth.propTypes = {
  setOpenAuthTab: PropTypes.func,
};

export default Auth;
