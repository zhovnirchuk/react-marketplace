import React from 'react';
import T from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import s from './Auth.module.scss';

import { routes } from '../../constants/constants';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Api from '../../api';

function Auth() {
  return (
    <Switch>
      {Api.Auth.isLoggedIn && <Redirect to={routes.home.path}/>}
      <Route exact path={routes.login.path} component={Login}/>
      <Route exact path={routes.register.path} component={Register}/>
      <Redirect from={routes.auth.path} to={routes.login.path}/>
    </Switch>
  );
}

Auth.propTypes = {

};

export default Auth;