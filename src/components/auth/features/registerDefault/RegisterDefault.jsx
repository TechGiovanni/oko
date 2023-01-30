import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// stylesheet
import '@components/auth/features/registerDefault/RegisterDefault.styles.scss';

// Data
import { RegisterOptionsData } from '@components/auth/features/registerDefault/RegisterOptionsData';

// Reducer
import { changeLoginOrRegister } from '@redux/reducers/loginOrRegister/loginRegister.reducer';

const RegisterDefault = ({ handleAuthPage }) => {
  const dispatch = useDispatch();

  const handleChangeToLoginTab = () => {
    dispatch(changeLoginOrRegister({ loginTab: true }));
  };

  return (
    <>
      <div className="auth-title">
        <h2>Sign up for FanFizzle</h2>
      </div>
      <div className="margin-top full-height">
        {RegisterOptionsData.map((item) => {
          return (
            <div onClick={() => handleAuthPage(item.title)} className={`auth-option ${item.disabled}`} key={item.id}>
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
    </>
  );
};

RegisterDefault.propTypes = {
  handleAuthPage: PropTypes.func,
};

export default RegisterDefault;
