import React from 'react';
import { TouchableOpacity } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

import { Text } from '.';
import { colors } from '../styles';

const Button = ({
  onPress = () => {},
  value = 'Button',
  disabled = false,
  containerStyle = {},
  textWeight = 'regular',
  textSize = '16',
  type = 'light',
  size = 'large',
  loading = false,
}) => {
  const styles = getStyles(size);
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, containerStyle]}>
      <Text>{value}</Text>
    </TouchableOpacity>
  );
};

const getStyles = size =>
  RNStyles.create({
    container: {
      width: '100%',
      height: size === 'large' ? 56 : 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      backgroundColor: colors.main,
    },
  });

export default Button;
