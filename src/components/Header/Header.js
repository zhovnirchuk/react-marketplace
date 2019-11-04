import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';

import { routes } from '../../scenes/router';
import Api from '../../api';

function Header({ history }) {

  const handleLogout = () => {
    Api.Auth.logout();
    history.push(routes.home);
  }

  return (
    <header>
      <div className={s.left}>
        <Link to={routes.home}>Marketplace</Link>
      </div>
      <div className={s.right}>
        {Api.Auth.isLoggedIn ? (
          <button type="button" onClick={handleLogout}>Logout</button>
        ) : (
          <Link to={routes.login}>Login</Link>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {

};

export default Header;