import React, { useState } from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import classnames from 'classnames';

import { routes } from '../../constants/constants';
import Api from '../../api';
import LogoIcon from '../icons/LogoIcon';
import Avatar from '../Avatar/Avatar';
import ControlMenu from '../ControlMenu/ControlMenu';

function Header({ isLight, className }) {

  const [isControlMenuShown, setControlMenuShown] = useState(false);

  return (
    <div className={classnames(s['header'], {[s['header-light']]: isLight}, className)}>
      <div className={s['header-container']}>
        <div>
          <Link to={routes.home.path}>
            <LogoIcon isLight={isLight}/>
          </Link>
        </div>
        <div className={s['header-right']}>
          <button className={s['sell-button']}>Sell</button>
          <div className={s['avatar-login']}>
            {Api.Auth.isLoggedIn
              ?
              <React.Fragment>
                <Avatar
                  onClick={() => !isControlMenuShown && setControlMenuShown(!isControlMenuShown)} 
                  size={'small'}
                />
                {isControlMenuShown && <ControlMenu setShown={setControlMenuShown} />}
              </React.Fragment>
              :
              <Link to={routes.login.path} className={s['link']}>Login</Link>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {

};

export default Header;