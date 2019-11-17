import React from 'react';
import T from 'prop-types';
import s from './Login.module.scss';
import SceneLayout from '../../components/SceneLayout/SceneLayout';
import AuthForm from '../../components/Form/AuthForm/AuthForm';

function LoginView(props) {
  return (
    <SceneLayout>
      <AuthForm title={'Login'} {...props} />
    </SceneLayout>
  );
}

LoginView.propTypes = {

};

export default LoginView;