import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import T from 'prop-types';
import s from './ControlMenu.module.scss';

import { routes } from '../../constants/constants';
import Api from '../../api';
import Avatar from '../Avatar/Avatar';

function ControlMenu({ setShown }) {
  const thisRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    if (thisRef.current && !thisRef.current.contains(event.target)) {
      setShown(false);
    }
  };

  const name = 'Terry Sahaidak';
  const email = 'terry@apiko.com';

  const history = useHistory();
  const handleLogout = () => {
    Api.Auth.logout();
    history.push(routes.home.path);
  };

  return (
    <div ref={thisRef} className={s['menu-container']}>
      <div className={s['info-block']}>
        <div className={s['avatar']}>
          <Avatar size={'medium'} />
        </div>
        <div className={s['span-holder']}>
          <span className={s['name']}>{name}</span>
          <span className={s['email']}>{email}</span>
          <span className={s['profile']}>Profile</span>
        </div>
      </div>
      <div className={s['buttons-block']}>
        <div>Edit profile</div>
        <div onClick={handleLogout}>Logout</div>
      </div>
    </div>
  );
}

ControlMenu.propTypes = {

};

export default ControlMenu;