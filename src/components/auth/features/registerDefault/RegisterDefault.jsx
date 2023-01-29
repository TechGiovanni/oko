import React from 'react';
import PropTypes from 'prop-types';

// Data
import { RegisterOptionsData } from '@components/auth/features/registerDefault/RegisterOptionsData';
import { changeLoginOrRegister } from '@redux/reducers/loginOrRegister/loginRegister.reducer';
import { useDispatch } from 'react-redux';

const RegisterDefault = ({ handleAuthPage, showLogin }) => {
  const dispatch = useDispatch();

  const handleChangeToLoginTab = () => {
    dispatch(changeLoginOrRegister({ loginTab: true }));
  };

  return (
    <>
      <div className="auth-title">
        <h2>Sign up for KooKiverse</h2>
      </div>
      <div>
        {RegisterOptionsData.map((item) => {
          return (
            <div onClick={handleAuthPage(item.title)} className="auth-option" key={item.id}>
              <img src={item.image && item.image} />
              <span>{item.content}</span>
            </div>
          );
        })}
      </div>
      <div>
        <hr />
        <span>
          have an account?
          <span onClick={handleChangeToLoginTab}> Login</span>
        </span>
      </div>
    </>
  );
};

RegisterDefault.propTypes = {
  handleAuthPage: PropTypes.func,
  showLogin: PropTypes.func,
};

export default RegisterDefault;
