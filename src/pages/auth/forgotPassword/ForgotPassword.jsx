import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { changeLoginOrRegister } from '@redux/reducers/loginOrRegister/loginRegister.reducer';
import '@pages/auth/login/Login.scss';
import styled from 'styled-components';
import authBackgroundImg from '@assets/images/authbackgroundImg.png';
import { authService } from '@services/api/auth/auth.service';

const initialDefaultFields = {
  email: '',
};

const AuthBackground = styled.div`
  background-image: url(${authBackgroundImg});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  width: 100vw;
  height: calc(100vh - 6.6vh);
`;

const ForgotPassword = () => {
  const [inputFields, setInputFields] = useState(initialDefaultFields);
  const [btnColor, _setBtnColor] = useState('btnDisabled');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { email } = inputFields;
  const dispatch = useDispatch();

  const handleGoBackToLogin = () => {
    navigate('/auth/login');
  };

  const handleChangeToRegister = () => {
    navigate('/auth/register');
  };

  const handleInputChange = (event) => {
    console.log('target: ', event.target);
    const { name, value } = event.target;
    setInputFields({ ...inputFields, [name]: value });
  };

  const handleLoginSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const { email } = inputFields;
    console.log('inputFields', inputFields, email);
    try {
      const response = await authService.forgotPassword(inputFields);

      console.log('sent:', response);
      console.log('sent');
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    dispatch(changeLoginOrRegister({ loginTab: false }));
  }, [dispatch]);

  return (
    <AuthBackground>
      <div className="authentication-container z-index-normal">
        <FaArrowLeft onClick={handleGoBackToLogin} className="auth-back-button" />
        <div className="auth-title">
          <h2>Reset Your Password</h2>
        </div>
        <form className="auth-form" onSubmit={handleLoginSubmit}>
          <div className="auth-form-fields">
            <div>
              <label>Email:</label>
              <input type="email" name="email" id="email" value={email} onChange={handleInputChange} />
            </div>
          </div>
          <button className={`button ${!email ? btnColor : ''}`} disabled={!email}>{`${
            loading ? 'SENDING EMAIL IN PROGRESS...' : 'EMAIL'
          }`}</button>
        </form>
        <div className="register-footer">
          <div className="divider-footer">
            <p>
              Don&apos;t have an account?
              <span onClick={handleChangeToRegister}> Sign Up</span>
            </p>
          </div>
        </div>
      </div>
    </AuthBackground>
  );
};

export default ForgotPassword;
