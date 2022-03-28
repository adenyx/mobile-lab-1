import React from 'react';
import { View, Text } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

const AboutView = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>First Lab</Text>
      <Text style={styles.text}>Developer: Denis</Text>
      <Text style={styles.text}>University: BSUIR</Text>
      <Text style={styles.text}>Group: 951002</Text>
    </View>
  );
};

const styles = RNStyles.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
});

export default AboutView;
