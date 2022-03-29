import React from 'react';
import { View, Text } from 'react-native';

import RNStyles from '@tapston/react-native-styles';
import { colors } from '../../styles';

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
    padding: 16,
    backgroundColor: colors.backgroundColor,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 16,
  },
  text: {
    fontSize: 16,
  },
});

export default AboutView;
