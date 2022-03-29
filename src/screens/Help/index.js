import { animateLayout } from '@tapston/react-native-animation';
import React, { useState, useEffect } from 'react';

import HelpView from './HelpView';

const HelpContainer = props => {
  const [activePage, setActivePage] = useState(1);
  const onScroll = event => {
    animateLayout();
    console.log(event);
    if (event.contentOffset.x === 0) {
      setActivePage(1);
    }
    if (event.contentOffset.x === 390) {
      setActivePage(2);
    }
    if (event.contentOffset.x === 780) {
      setActivePage(3);
    }
  };
  return (
    <HelpView
      /**
       * Options
       */
      activePage={activePage}
      /**
       * Methods
       */
      onScroll={onScroll}
    />
  );
};

export default HelpContainer;
