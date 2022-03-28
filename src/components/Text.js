import React from 'react';
import { Text } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

// import { colors } from '../styles';

/**
 * @component Text
 * @prop {Number} size - text size
 * @prop {String} weight - text weight
 * @prop {String} color - text color
 * @prop {Function} onPress - text on press callback
 * @prop {Object} style - additional text styles
 * @prop {Number} numberOfLines
 * @prop {Boolean} isSelectable - if true we can select the text for coping
 */
//   color = colors.grayscale[10],
const _Text = ({
  children,
  size = 14,
  weight = '400',
  color = 'black',
  onPress = null,
  style = {},
  numberOfLines,
  isSelectable = false,
}) => {
  const styles = getStyles(weight, size, color);

  return (
    <Text
      style={[styles.text, style]}
      onPress={onPress}
      selectable={isSelectable}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};
const getStyles = (weight, size, color) =>
  RNStyles.create({
    text: {
      fontWeight: weight,
      color,
      fontSize: !isNaN(size) ? Number(size) : 14,
    },
  });

export default _Text;
