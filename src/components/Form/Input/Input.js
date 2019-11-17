import React, { useState } from 'react';
import T from 'prop-types';
import s from './Input.module.scss';
import classnames from 'classnames';

function Input({
  isPassword,
  fields,
  name,
  label,
  labelClass,
  onChange,
  type,
  ...props
}) {
  const [{ isShown, inputType }, setToggle] = useState({isShown: false, inputType: type});
  const toggleEye = () => {
    setToggle({
      isShown: !isShown,
      inputType: !isShown ? 'text' : 'password',
    });
  }
  const eyeClassName = isShown ? 'closed' : 'open';
  return (
      <label className={labelClass}>
        {label}
        <input
          value={fields[name]}
          type={inputType}
          onChange={(evt) => onChange(name, evt.target.value)}
          {...props}
        />
        {isPassword && <span className={classnames(s['toggle-icon'], s[eyeClassName])} onClick={toggleEye}></span>}
      </label>
  );
}

Input.propTypes = {

};

export default Input;