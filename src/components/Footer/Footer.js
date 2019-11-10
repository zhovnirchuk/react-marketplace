import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import T from 'prop-types';
import s from './Footer.module.scss';

import { routes } from '../../constants/constants';

function Footer({ className }) {
  return (
    <div className={classnames(s['footer'], className)}>
      <span>&copy; 2019 Zhovnirchuk Vasyl</span>
      <Link to={routes.terms.path} className={s['link']}><span>Terms</span></Link>
      <Link to={routes.privacy.path} className={s['link']}><span>Privacy</span></Link>
    </div>
  );
}

Footer.propTypes = {

};

export default Footer;