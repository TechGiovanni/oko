import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// stylesheet
import '@components/auth/features/loginDefault/LoginDefault.styles.scss';

// Data
import { LoginOptionsData } from '@components/auth/features/loginDefault/LoginOptionsData';

// Reducer
import { changeLoginOrRegister } from '@redux/reducers/loginOrRegister/loginRegister.reducer';
import { closeAuthModal } from '@redux/reducers/loginModal/loginModal.reducer';
// import Login from '@pages/auth/login/login';

const LoginDefault = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeToRegisterTab = () => {
    dispatch(changeLoginOrRegister({ loginTab: false }));
  };

  const handleSignInOptions = (event) => {
    console.log('LoginDefault:', event.target.textContent);
    const itemEvent = event.target.textContent;

    if (itemEvent === 'Use Email / Username') {
      dispatch(changeLoginOrRegister({ loginTab: false }));
      dispatch(closeAuthModal({ authModalState: false }));
      return navigate('/auth/login');
    }
  };

  return (
    <>
      <div className="authentication-container">
        <div className="auth-title">
          <h2>Log in to FanFizzle</h2>
        </div>
        <div className="margin-top full-height">
          {LoginOptionsData.map((item) => {
            return (
              <div
                onClick={handleSignInOptions}
                title={item.title}
                className={`auth-option ${item.disabled}`}
                key={item.id}
              >
                <img src={item.image && item.image} />
                <span>{item.content}</span>
              </div>
            );
          })}
        </div>
        <div className="register-footer">
          <div className="divider-footer">
            <p>
              Don&apos;t have an account?
              <span onClick={handleChangeToRegisterTab}> Sign Up</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginDefault;
