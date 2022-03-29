import React from 'react';
import { View } from 'react-native';

import RNStyles from '@tapston/react-native-styles';
import { Button } from '../../components';

const SettingsView = props => {
  return (
    <View style={styles.container}>
      <Button onPress={props.handleLogOut} value="Log Out" />
    </View>
  );
};

const styles = RNStyles.create({
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 32,
    justifyContent: 'flex-end',
  },
});

export default SettingsView;
