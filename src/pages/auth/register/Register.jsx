import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { changeLoginOrRegister } from '@redux/reducers/loginOrRegister/loginRegister.reducer';
import { addUser } from '@redux/reducers/user/user.reducer';
import '@pages/auth/register/Register.scss';
import styled from 'styled-components';
import authBackgroundImg from '@assets/images/authbackgroundImg.png';
import { authService } from '@services/api/auth/auth.service';
import { UtilsService } from '@utils/utils.service';

const initialDefaultFields = {
  username: '',
  email: '',
  password: '',
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
const Register = () => {
  const [inputFields, setInputFields] = useState(initialDefaultFields);
  const [loading, setLoading] = useState(false);
  const [btnColor, _setBtnColor] = useState('btnDisabled');
  const navigate = useNavigate();
  const { username, email, password } = inputFields;
  const dispatch = useDispatch();

  const handleGoBackClick = () => {
    navigate('/');
  };

  const handleChangeToLogin = () => {
    navigate('/auth/login');
  };

  const handleRegisterInputChange = (event) => {
    console.log('target: ', event.target);
    const { name, value } = event.target;
    setInputFields({ ...inputFields, [name]: value });
  };

  const handleRegisterSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const { username, email, password } = inputFields;
    console.log('inputFields', inputFields, username, email, password);
    try {
      const avatarColor = UtilsService.avatarColor();
      const profileImage = UtilsService.profileImage(username.charAt(0).toUpperCase(), avatarColor);
      const result = { ...inputFields, avatarColor, profileImage };
      console.log('sent result:', result);
      //
      const response = await authService.signUp(result);
      // set logged in to true in local storage
      // set username in local storage
      // [] - dispatch user to redux
      dispatch(addUser(result));
      console.log('sent:', response);
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
        <FaArrowLeft onClick={handleGoBackClick} className="auth-back-button" />
        <div className="auth-title">
          <h2>Sign up for FanFizzle</h2>
        </div>

        <form className="auth-form" onSubmit={handleRegisterSubmit}>
          <div className="auth-form-fields">
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={handleRegisterInputChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="email" id="email" value={email} onChange={handleRegisterInputChange} required />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handleRegisterInputChange}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className={`button ${!username || !password || !email ? btnColor : ''}`}
            disabled={!username || !password || !email}
          >{`${loading ? 'SIGNUP IN PROGRESS...' : 'SIGNUP'}`}</button>
        </form>
        <div className="register-footer">
          <div className="divider-footer">
            <p>
              Already have an account?
              <span onClick={handleChangeToLogin}> Login</span>
            </p>
          </div>
        </div>
      </div>
    </AuthBackground>
  );
};

export default Register;
