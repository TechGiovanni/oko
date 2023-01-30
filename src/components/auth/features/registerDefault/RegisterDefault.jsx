import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// stylesheet
import '@components/auth/features/registerDefault/RegisterDefault.styles.scss';

// Data
import { RegisterOptionsData } from '@components/auth/features/registerDefault/RegisterOptionsData';

// Reducer
import { changeLoginOrRegister } from '@redux/reducers/loginOrRegister/loginRegister.reducer';
import { closeAuthModal } from '@redux/reducers/loginModal/loginModal.reducer';

const RegisterDefault = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeToLoginTab = () => {
    dispatch(changeLoginOrRegister({ loginTab: true }));
  };

  const handleSignInOptions = (event) => {
    console.log('LoginDefault:', event.target.textContent);
    const itemEvent = event.target.textContent;

    if (itemEvent === 'Use Email / Username') {
      dispatch(changeLoginOrRegister({ loginTab: true }));
      dispatch(closeAuthModal({ authModalState: false }));
      return navigate('/auth/register');
    }
  };

  return (
    <>
      <div className="authentication-container">
        <div className="auth-title">
          <h2>Sign up for FanFizzle</h2>
        </div>
        <div className="margin-top full-height">
          {RegisterOptionsData.map((item) => {
            return (
              <div onClick={handleSignInOptions} className={`auth-option ${item.disabled}`} key={item.id}>
                <img src={item.image && item.image} />
                <span>{item.content}</span>
              </div>
            );
          })}
        </div>
        <div className="register-footer">
          {/* <hr /> */}
          <div className="divider-footer">
            <p>
              Already have an account?
              <span onClick={handleChangeToLoginTab}> Login</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterDefault;
