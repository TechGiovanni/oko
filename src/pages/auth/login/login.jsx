import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { changeLoginOrRegister } from '@redux/reducers/loginOrRegister/loginRegister.reducer';
// import LoginOptions from '@components/auth/loginOptions/LoginOptions';

const initialDefaultFields = {
  username: '',
  email: '',
  password: '',
};

const Login = () => {
  const [inputFields, setInputFields] = useState(initialDefaultFields);
  const [_goBack, setGoBack] = useState(false);
  // const navigate = useNavigate();
  const { username, email, password } = inputFields;
  const dispatch = useDispatch();

  const handleGoBackClick = () => {
    console.log('hello');
    //
    // return <LoginOptions />;
    setGoBack(true);
  };

  const handleLoginInputChange = (event) => {
    console.log('target: ', event.target);
    const { name, value } = event.target;
    setInputFields({ ...inputFields, [name]: value });
  };

  //
  const handleLoginSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    dispatch(changeLoginOrRegister({ loginTab: false }));
  }, [dispatch]);

  return (
    <div>
      <FaArrowLeft onClick={handleGoBackClick} />

      <form onSubmit={handleLoginSubmit}>
        <div>
          <label>Username</label>
          <input type="text" name="username" id="username" value={username} onChange={handleLoginInputChange} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" id="email" value={email} onChange={handleLoginInputChange} />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleLoginInputChange}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
