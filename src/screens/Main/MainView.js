import React from 'react';
import { View, Image, Text, Animated } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

import { Button } from '../../components';
import { colors } from '../../styles';

const MainView = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{`Satiety: ${props.satiety}`}</Text>
      </View>
      <View style={styles.centerContainer}>
        <Animated.View
          style={[styles.counterBlock, { opacity: props.buttonOpacity }]}>
          <View style={styles.addBlock}>
            <Text style={styles.addText}>{`${props.counter}/10`}</Text>
          </View>
        </Animated.View>
        <Image
          width={200}
          height={200}
          source={require('../../assets/cat.gif')}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Button
          value="Feed"
          onPress={props.handleFeedCat}
          textSize={20}
          textWeight="600"
        />
      </View>
    </View>
  );
};

const styles = RNStyles.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.backgroundColor,
  },

  header: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  headerTitle: {
    color: colors.main,
    fontWeight: 'bold',
    fontSize: 20,
    padding: 12,
  },

  centerContainer: {
    height: '60%',
    justifyContent: 'center',
  },
  counterBlock: {
    position: 'absolute',
    top: 0,
    width: '100%',
    alignItems: 'center',
  },
  addBlock: {
    padding: 8,
    backgroundColor: colors.main,
    borderRadius: 8,
  },
  addText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },

  bottomContainer: {
    padding: 16,
  },
});

export default MainView;
