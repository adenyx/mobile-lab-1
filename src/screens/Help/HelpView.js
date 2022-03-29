import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import RNStyles from '@tapston/react-native-styles';
import { colors, screenWidth } from '../../styles';

const HelpView = props => {
  return (
    <View style={styles.container}>
      <ScrollView
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        scrollEventThrottle={16}
        onScroll={event => props.onScroll(event.nativeEvent)}
        style={styles.scrollContainer}>
        <View style={styles.page}>
          <Image
            source={require('../../assets/first.png')}
            style={{ width: screenWidth / 2, height: screenWidth }}
          />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum
            et mi nec vulputate. Donec cursus neque congue, fringilla nisl in,
            sollicitudin enim. Phasellus blandit metus sed nulla elementum
            aliquam laoreet vel dui. Etiam ut varius ante, et placerat massa.
            Donec venenatis commodo euismod. Nulla a orci tempus, dictum eros
            nec, consectetur magna. Nulla facilisi. Praesent dui ligula, lacinia
            et nunc sed, convallis scelerisque urna. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Sed volutpat ornare neque non venenatis. Nulla pulvinar
            ante sit amet auctor imperdiet.
          </Text>
        </View>
        <View style={styles.page}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum
            et mi nec vulputate. Donec cursus neque congue, fringilla nisl in,
            sollicitudin enim. Phasellus blandit metus sed nulla elementum
            aliquam laoreet vel dui. Etiam ut varius ante, et placerat massa.
            Donec venenatis commodo euismod. Nulla a orci tempus, dictum eros
            nec, consectetur magna. Nulla facilisi. Praesent dui ligula, lacinia
            et nunc sed, convallis scelerisque urna. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Sed volutpat ornare neque non venenatis. Nulla pulvinar
            ante sit amet auctor imperdiet.
          </Text>
        </View>
        <View style={styles.page}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum
            et mi nec vulputate. Donec cursus neque congue, fringilla nisl in,
            sollicitudin enim. Phasellus blandit metus sed nulla elementum
            aliquam laoreet vel dui. Etiam ut varius ante, et placerat massa.
            Donec venenatis commodo euismod. Nulla a orci tempus, dictum eros
            nec, consectetur magna. Nulla facilisi. Praesent dui ligula, lacinia
            et nunc sed, convallis scelerisque urna. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Sed volutpat ornare neque non venenatis. Nulla pulvinar
            ante sit amet auctor imperdiet.
          </Text>
        </View>
      </ScrollView>
      <View style={styles.dotContainer}>
        <View
          style={[styles.dot, props.activePage === 1 && styles.activeDot]}
        />
        <View
          style={[styles.dot, props.activePage === 2 && styles.activeDot]}
        />
        <View
          style={[styles.dot, props.activePage === 3 && styles.activeDot]}
        />
      </View>
    </View>
  );
};

const styles = RNStyles.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  scrollContainer: {
    flex: 1,
  },
  page: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: `${screenWidth}`,
  },

  dotContainer: {
    position: 'absolute',
    width: `${screenWidth}`,
    height: 50,
    flexDirection: 'row',
    bottom: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    borderWidth: 1,
    marginHorizontal: 4,
    square: 24,
    borderRadius: 36,
  },
  activeDot: {
    backgroundColor: colors.black,
  },
});

export default HelpView;
