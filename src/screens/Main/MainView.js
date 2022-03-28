import React from 'react';
import { View } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

import { Button } from '../../components';

const MainView = props => {
  return (
    <View style={styles.container}>
      <Button />
    </View>
  );
};

const styles = RNStyles.create({
  container: {},
});

export default MainView;
