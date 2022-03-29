import React, { useState } from 'react';

import { animateLayout } from '@tapston/react-native-animation';

import HelpView from './HelpView';

const HelpContainer = props => {
  const [activePage, setActivePage] = useState(1);
  const onScroll = event => {
    animateLayout();
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
  const scrollToOffset = (item, ref) => {
    if (item === 1) {
      ref.current?.scrollTo({ x: 0, y: 0, animated: true });
      return;
    }
    if (item === 2) {
      ref.current?.scrollTo({ x: 390, y: 0, animated: true });
      return;
    }
    ref.current?.scrollTo({ x: 780, y: 0, animated: true });
    return;
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
      scrollToOffset={scrollToOffset}
    />
  );
};

export default HelpContainer;
