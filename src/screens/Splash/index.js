import React, { useEffect } from 'react';

import SplashView from './SplashView';

const SplashContainer = props => {
  useEffect(() => {
    setTimeout(() => props.navigation.navigate('Auth'), 2000);
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
