import React from 'react';
import { View, Image, ActivityIndicator } from 'react-native';

import RNStyles from '@tapston/react-native-styles';
import { colors, screenWidth } from '../../styles';

const SplashView = props => {
  return (
    <View style={styles.container}>
      <Image
        width={screenWidth}
        height={screenWidth}
        source={require('../../assets/cat.gif')}
      />
      <ActivityIndicator
        style={styles.activity}
        size={'large'}
        color={colors.main}
      />
    </View>
  );
};

const styles = RNStyles.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundColor,
  },
  activity: { position: 'absolute', bottom: 32 },
});

export default SplashView;
