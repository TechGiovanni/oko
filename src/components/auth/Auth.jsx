import { useSelector, useDispatch } from 'react-redux';

// reducer
import { closeAuthModal } from '@redux/reducers/loginModal/loginModal.reducer';

// styleSheet
import '@components/auth/Auth.scss';

// components
import LoginDefault from '@components/auth/features/loginDefault/LoginDefault';
import RegisterDefault from '@components/auth/features/registerDefault/RegisterDefault';
import { changeLoginOrRegister } from '@redux/reducers/loginOrRegister/loginRegister.reducer';

const Auth = () => {
  const dispatch = useDispatch();
  const showLoginOrRegister = useSelector((state) => state.loginOrRegisterTab.loginTab);

  const handleCloseAuthTabs = () => {
    dispatch(closeAuthModal({ authModalState: false }));
    dispatch(changeLoginOrRegister({ loginTab: true }));
  };

  return (
    <div className="auth">
      {showLoginOrRegister ? <LoginDefault /> : <RegisterDefault />}
      <div className="auth-backdrop" onClick={handleCloseAuthTabs}></div>
    </div>
  );
};

export default Auth;
