import PropTypes from 'prop-types';
// import { useRef } from 'react-router-dom';
import '@components/auth/Auth.scss';

const Auth = ({ setOpenAuthTab }) => {
  // const backdrop = useRef();s

  const handleCloseAuthTabs = () => {
    setOpenAuthTab(false);
  };

  return <div className="auth-container" onClick={handleCloseAuthTabs}></div>;
};

Auth.propTypes = {
  setOpenAuthTab: PropTypes.func,
};

export default Auth;
