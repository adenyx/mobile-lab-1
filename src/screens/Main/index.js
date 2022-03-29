import React, { useState } from 'react';
import { Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import UserActions from '../../store/reducers/user/actions';

import MainView from './MainView';

const MainContainer = props => {
  const dispatch = useDispatch();
  const userData = useSelector(store => store.user.currentUser);

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
    dispatch(UserActions.updateUserData({ score: satiety + 1 }));
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
