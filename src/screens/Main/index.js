import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';

import MainView from './MainView';

const MainContainer = props => {
  const [counter, setCounter] = useState(0);
  const [satiety, setSatiety] = useState(0);

  const [buttonOpacity] = useState(new Animated.Value(0));

  const handleFeedCat = () => {
    Animated.timing(buttonOpacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start(() =>
      Animated.timing(buttonOpacity, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start(),
    );
    if (counter < 9) {
      setCounter(old => old + 1);
      return;
    }
    setSatiety(old => old + 1);
    setCounter(0);
  };
  return (
    <MainView
      /**
       * Options
       */
      satiety={satiety}
      counter={counter}
      buttonOpacity={buttonOpacity}
      /**
       * Methods
       */
      handleFeedCat={handleFeedCat}
    />
  );
};

export default MainContainer;
