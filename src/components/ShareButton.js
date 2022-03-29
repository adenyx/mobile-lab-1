import React from 'react';
import { TouchableOpacity, Share, Image } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

import ShareIcon from '../assets/share.svg';
import { useSelector } from 'react-redux';

/**
 * ShareButton component
 * @prop {type} example - example description
 */
const ShareButton = ({}) => {
  const currentUser = useSelector(store => store.user.currentUser);
  const onShare = async () => {
    Share.share({ message: `'Feed The Cat' app score: ${currentUser.score}` });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onShare}>
      <ShareIcon width={24} height={24} color={'#FFFFFF'} />
    </TouchableOpacity>
  );
};

const styles = RNStyles.create({
  container: {
    marginRight: 12,
  },
});

export default ShareButton;
