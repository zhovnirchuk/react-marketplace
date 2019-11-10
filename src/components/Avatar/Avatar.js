import React from 'react';
import classnames from 'classnames';
import T from 'prop-types';
import s from './Avatar.module.scss';
import { nameToColorId } from '../../utils/utils';

function Avatar({ onClick, size }) {
  const hasImage = false;
  const name = 'ts';
  const colorId = nameToColorId(name);
  const imageLink = 'https://yt3.ggpht.com/a/AGF-l79KQTVmDJ416KZMvtcRXqXfvouoqfQ3eMWnXQ=s48-c-k-c0xffffffff-no-rj-mo';
  return (
    <div className={classnames(s['avatar'], s[size], s[`color-${colorId}`])} onClick={onClick}>
      {hasImage
        ?
        <img src={imageLink} alt={name} />
        :
        <span>{name}</span>}
    </div>
  );
}

Avatar.propTypes = {

};

export default Avatar;