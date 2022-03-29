import React from 'react';
import { View, FlatList, Text } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

const RatingView = props => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.userList}
        ListHeaderComponent={() => (
          <View style={styles.listHeaderContainer}>
            <Text style={[styles.dataBlock, styles.title]}>Nickname</Text>
            <Text style={[styles.dataBlock, styles.title]}>Score</Text>
            <Text style={[styles.dataBlock, styles.title]}>Email</Text>
          </View>
        )}
        renderItem={({ item, index }) => (
          <View style={styles.userRow}>
            <Text numberOfLines={1} style={styles.dataBlock}>
              {item.nickname}
            </Text>
            <Text numberOfLines={1} style={styles.dataBlock}>
              {item.score}
            </Text>
            <Text numberOfLines={1} style={styles.dataBlock}>
              {item.email}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = RNStyles.create({
  container: { flex: 1 },

  listHeaderContainer: {
    flexDirection: 'row',
  },
  dataBlock: {
    flex: 1,
    padding: 4,
    borderWidth: 1,
    borderColor: '#01010180',
    overflow: 'hidden',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },

  userRow: {
    flexDirection: 'row',
  },
});

export default RatingView;
