import React, { useState } from 'react';
import { connect } from 'react-redux';
import RegisterView from './RegisterView';
import { authOperations } from '../../modules/auth';
import { routes } from '../../constants/constants';

function RegisterContainer({ isLoading, register, history }) {

  const [fields, setFields] = useState({
    email: {value: '', name: 'email', type: 'email', label: 'Email', placeholder: 'example@gmail.com'},
    fullName: {value: '', name: 'fullName', type: 'text', label: 'Full name', placeholder: 'Tony Stark'},
    password: {value: '', name: 'password', type: 'password', label: 'Password', placeholder: ''},
    passwordAgain: {value: '', name: 'passwordAgain', type: 'password', label: 'Password again', placeholder: ''},
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
    await register(fieldValues);
    history.push(routes.home.path);
  };

  return <RegisterView
      fields={fields}
      handleSubmit={handleSubmit}
      handleFieldChange={handleFieldChange}
      isLoading={isLoading}
  />;
}

function mapStateToProps(state) {
  return {
    isLoading: state.auth.register.isLoading,
  };
}

const mapDispatchToProps = {
  register: authOperations.register,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);