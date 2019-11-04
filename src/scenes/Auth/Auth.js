import React from 'react';
import T from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import s from './Auth.module.scss';

import { Header } from '../../components';
import { routes } from '../router';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Api from '../../api';

function Auth() {
  return (
    <div>
      <Switch>
        {Api.Auth.isLoggedIn && <Redirect to={routes.home}/>}
        <Route exact path={routes.login} component={Login}/>
        <Route exact path={routes.register} component={Register}/>
        <Redirect from={routes.auth} to={routes.login}/>
      </Switch>
    </div>
  );
}

Auth.propTypes = {

};

export default Auth;