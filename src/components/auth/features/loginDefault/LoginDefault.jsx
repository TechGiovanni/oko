import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// stylesheet
import '@components/auth/features/loginDefault/LoginDefault.styles.scss';

// Data
import { LoginOptionsData } from '@components/auth/features/loginDefault/LoginOptionsData';

// Reducer
import { changeLoginOrRegister } from '@redux/reducers/loginOrRegister/loginRegister.reducer';

const LoginDefault = (props) => {
  const dispatch = useDispatch();
  const { handleAuthPage } = props;

  const handleChangeToRegisterTab = () => {
    // console.log('');
    dispatch(changeLoginOrRegister({ loginTab: false }));
  };

  return (
    <>
      <div className="auth-title">
        <h2>Log in to KooKiverse</h2>
      </div>
      <div className="margin-top">
        {LoginOptionsData.map((item) => {
          return (
            <div onClick={handleAuthPage(item.title)} className="auth-option" key={item.id}>
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
            Don&apos;t have an account?
            <span onClick={handleChangeToRegisterTab}> Sign Up</span>
          </p>
        </div>
      </div>
    </>
  );
};
LoginDefault.propTypes = {
  handleAuthPage: PropTypes.func,
  showRegister: PropTypes.func,
};

export default LoginDefault;
