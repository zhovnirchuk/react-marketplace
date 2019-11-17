import React, { useState } from 'react';
import { connect } from 'react-redux';
import LoginView from './LoginView';
import { authOperations } from '../../modules/auth';
import { routes } from '../../constants/constants';

function LoginContainer({ isLoading, login, history }) {

  const [fields, setFields] = useState({
      email: {value: '', name: 'email', type: 'email', label: 'Email', placeholder: 'example@gmail.com'},
      password: {value: '', name: 'password', type: 'password', label: 'Password', placeholder: ''},
    });

  const handleFieldChange = (fieldName, value) => {
    setFields({
      ...fields,
      [fieldName]: {...fields[fieldName], value},
    });
  };

  const handleSubmit = async () => {
    const fieldValues = Object.values(fields).reduce((acc, { value, name }) => {
      acc[name] = value;
      return acc;
    }, {});
    await login(fieldValues);
    history.push(routes.home.path);
  };

  return <LoginView
      fields={fields}
      handleSubmit={handleSubmit}
      handleFieldChange={handleFieldChange}
      isLoading={isLoading}
  />;
}

function mapStateToProps(state) {
  return {
    isLoading: state.auth.login.isLoading,
  };
}

const mapDispatchToProps = {
  login: authOperations.login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);