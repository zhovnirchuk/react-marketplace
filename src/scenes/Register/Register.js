import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import s from './Register.module.scss';
import { routes } from '../router';

function Register() {
  return (
    <Link to={routes.login}>Login</Link>
  );
}

Register.propTypes = {

};

export default Register;