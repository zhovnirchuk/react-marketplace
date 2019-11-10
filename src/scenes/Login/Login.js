import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import s from './Login.module.scss';
import { routes } from '../../constants/constants';
import Api from '../../api';
import SceneLayout from '../../components/SceneLayout/SceneLayout';

function Login({ history }) {

  const handleLogin = () => {
    Api.Auth.login();
    history.push(routes.home.path);
  };

  return (
    <SceneLayout>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <Link to={routes.register.path}>Register</Link>
    </SceneLayout>
  );
}

Login.propTypes = {

};

export default Login;