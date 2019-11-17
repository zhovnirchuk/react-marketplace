import React from 'react';
import T from 'prop-types';
import s from './Button.module.scss';

function Button({
  title,
  ...props
}) {
  return (
      <button type={'button'} {...props}>{title}</button>
  );
}

Button.propTypes = {

};

export default Button;