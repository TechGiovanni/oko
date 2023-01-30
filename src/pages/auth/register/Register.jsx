import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { changeLoginOrRegister } from '@redux/reducers/loginOrRegister/loginRegister.reducer';
import '@pages/auth/register/Register.scss';
import styled from 'styled-components';

const initialDefaultFields = {
  username: '',
  email: '',
  password: '',
  profileImage: '',
};

const Register = () => {
  const [inputFields, setInputFields] = useState(initialDefaultFields);
  const [loading, setLoading] = useState(false);
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

  const handleRegisterSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    console.log('hi');
  };

  useEffect(() => {
    dispatch(changeLoginOrRegister({ loginTab: false }));
  }, [dispatch]);

  const AuthBackground = styled.div`
    background-color: black;
    width: 100%;
    height: 100vh;
  `;

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
              <input type="text" name="username" id="username" value={username} onChange={handleRegisterInputChange} />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="email" id="email" value={email} onChange={handleRegisterInputChange} />
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
          <button disabled={!username || !password || !email}>{`${
            loading ? 'SIGNUP IN PROGRESS...' : 'SIGNUP'
          }`}</button>
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
