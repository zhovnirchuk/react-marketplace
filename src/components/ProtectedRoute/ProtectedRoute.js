import React from 'react';
import T from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { routes } from '../../constants/constants';
import Api from '../../api';

function ProtectedRoute({ children, ...rest }) {
  console.log(Api.Auth.isLoggedIn);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        Api.Auth.isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: routes.login.path,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

ProtectedRoute.propTypes = {

};

export default ProtectedRoute;