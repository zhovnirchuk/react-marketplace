import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import s from './Login.module.scss';
import { routes } from '../router';
import Api from '../../api';

function Login({ history }) {

  const handleLogin = () => {
    Api.Auth.login();
    history.push(routes.home);
  };

  return (
    <div>
      <button type="button" onClick={handleLogin}>
        Login
      </button>
      <Link to={routes.register}>Register</Link>
    </div>
  );
}

Login.propTypes = {

};

export default Login;