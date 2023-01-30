import { useSelector, useDispatch } from 'react-redux';

// reducer
import { closeAuthModal } from '@redux/reducers/loginModal/loginModal.reducer';

// styleSheet
import '@components/auth/Auth.scss';

// components
import LoginOptions from '@components/auth/loginOptions/LoginOptions';
import RegisterOptions from '@components/auth/registerOptions/RegisterOptions';

const Auth = () => {
  const dispatch = useDispatch();
  const showLoginOrRegister = useSelector((state) => state.loginOrRegisterTab.loginTab);

  const handleCloseAuthTabs = () => {
    dispatch(closeAuthModal({ authModalState: false }));
  };

  return (
    <div className="auth">
      {showLoginOrRegister ? <LoginOptions /> : <RegisterOptions />}
      <div className="auth-backdrop" onClick={handleCloseAuthTabs}></div>
    </div>
  );
};

export default Auth;
