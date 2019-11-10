import React from 'react';
import { useLocation } from 'react-router-dom';
import T from 'prop-types';
import s from './SceneLayout.module.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { routes } from '../../constants/constants';

function SceneLayout({ children }) {
  const location = useLocation();
  const { isLight } = Object.values(routes).find(({ path }) => path === location.pathname);
  return (
    <div className={s['container']}>
      <Header isLight={isLight} className={s['header']}/>
      <div className={s['content']}>
        {children}
      </div>
      <Footer className={s['footer']}/>
    </div>
  );
}

SceneLayout.propTypes = {

};

export default SceneLayout;