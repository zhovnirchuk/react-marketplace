import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Auth from './Auth/Auth';
import Inbox from './Inbox/Inbox';
import Terms from './Terms/Terms';
import Privacy from './Privacy/Privacy';
import { routes } from '../constants/constants';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home.path} component={Home} />
        <Route path={routes.auth.path} component={Auth} />
        <ProtectedRoute path={routes.inbox.path}>
          <Inbox />
        </ProtectedRoute>
        <Route path={routes.terms.path} component={Terms} />
        <Route path={routes.privacy.path} component={Privacy} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}