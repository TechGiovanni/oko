import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { changeLoginOrRegister } from '@redux/reducers/loginOrRegister/loginRegister.reducer';
import '@pages/auth/login/Login.scss';
import styled from 'styled-components';

const initialDefaultFields = {
  username: '',
  email: '',
  password: '',
};

const AuthBackground = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
`;

const Login = () => {
  const [inputFields, setInputFields] = useState(initialDefaultFields);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { username, email, password } = inputFields;
  const dispatch = useDispatch();

  const handleGoBackClick = () => {
    navigate('/');
  };

  const handleChangeToRegister = () => {
    navigate('/auth/register');
  };

  const handleLoginInputChange = (event) => {
    console.log('target: ', event.target);
    const { name, value } = event.target;
    setInputFields({ ...inputFields, [name]: value });
  };

  const handleLoginSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
  };

  useEffect(() => {
    dispatch(changeLoginOrRegister({ loginTab: false }));
  }, [dispatch]);

  return (
    <AuthBackground>
      <div className="authentication-container z-index-normal">
        <FaArrowLeft onClick={handleGoBackClick} className="auth-back-button" />
        <div className="auth-title">
          <h2>Log in to FanFizzle</h2>
        </div>
        <form className="auth-form" onSubmit={handleLoginSubmit}>
          <div className="auth-form-fields">
            <div>
              <label>Username:</label>
              <input type="text" name="username" id="username" value={username} onChange={handleLoginInputChange} />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="email" id="email" value={email} onChange={handleLoginInputChange} />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handleLoginInputChange}
                required
              />
            </div>
          </div>
          <button disabled={false}>{`${loading ? 'LOGIN IN PROGRESS...' : 'LOGIN'}`}</button>
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

export default Login;

/* <div className="authentication-container">
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
</div> */
