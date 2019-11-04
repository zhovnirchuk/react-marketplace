import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Auth from './Auth/Auth';
import Inbox from './Inbox/Inbox';
import { Header } from '../components';

export const routes = {
  home: '/',  
  login: '/auth/login',
  register: '/auth/register',
  auth: '/auth',
  inbox: '/inbox'
};

export default function Router() {
  return (
    <BrowserRouter>
      <Route component={Header}/>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.auth} component={Auth} />
        <Route path={routes.inbox} component={Inbox} />
        <Route component={NotFound} />
      </Switch> 
    </BrowserRouter>
  );
}