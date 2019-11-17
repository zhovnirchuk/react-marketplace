import React from 'react';
import T from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';
import s from './AuthForm.module.scss';
import Input from '../Input/Input';
import { routes } from '../../../constants/constants';
import Button from '../Button/Button';

function AuthForm({ title, fields, handleFieldChange, handleSubmit }) {
  const location = useLocation();
  const isLogin = location.pathname === routes.login.path;
  const isRegister = location.pathname === routes.register.path;
  return (
    <div className={s['form-container']}>
      <div className={s['box-container']}>
        <h1>{title}</h1>
        {Object.values(fields).map((props, index) => {
          const isPassword = props.type === 'password';
          return <React.Fragment key={props.name + index}>
            <Input
              isPassword={isPassword}
              fields={fields}
              labelClass={s['input-label']}
              className={classnames(s['input'], {[s['password-input']]: isPassword})}
              onChange={handleFieldChange}
              {...props}
            />
            {isLogin && isPassword &&
              <Link to={routes.restorePassword.path} className={s['remember-password']}>
                Don't remember password?
              </Link>
            }
          </React.Fragment>;
        })}

        <Button title={isRegister ? 'Register' : 'Continue'} onClick={handleSubmit} className={s['submit-btn']}/>
      </div>
      {isLogin && 
        <div className={s['box-container']}>
          <span>I have no account, <Link to={routes.register.path} className={s['link']}>register now</Link></span>
        </div>}
      {isRegister && 
        <div className={s['box-container']}>
          <span>I already have an account, <Link to={routes.login.path} className={s['link']}>log in</Link></span>
        </div>}
    </div>
  );
}

AuthForm.propTypes = {

};

export default AuthForm;