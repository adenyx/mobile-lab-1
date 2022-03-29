import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import SplashView from './SplashView';

const SplashContainer = props => {
  const userData = useSelector(store => store.user.currentUser);
  useEffect(() => {
    setTimeout(
      () => props.navigation.navigate(userData.email ? 'Drawer' : 'Auth'),
      2000,
    );
  }, []);
  return (
    <SplashView
    /**
     * Options
     */

    /**
     * Methods
     */
    />
  );
};

export default SplashContainer;
