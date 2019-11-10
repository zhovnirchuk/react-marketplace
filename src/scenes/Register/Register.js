import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import s from './Register.module.scss';
import { routes } from '../../constants/constants';
import SceneLayout from '../../components/SceneLayout/SceneLayout';

function Register() {
  return (
    <SceneLayout>
      <Link to={routes.login.path}>Login</Link>
    </SceneLayout>
  );
}

Register.propTypes = {

};

export default Register;