import React from 'react';
import T from 'prop-types';
import s from './Register.module.scss';
import SceneLayout from '../../components/SceneLayout/SceneLayout';
import AuthForm from '../../components/Form/AuthForm/AuthForm';

function RegisterView(props) {
  return (
    <SceneLayout>
      <AuthForm title={'Register'} {...props} />
    </SceneLayout>
  );
}

RegisterView.propTypes = {

};

export default RegisterView;