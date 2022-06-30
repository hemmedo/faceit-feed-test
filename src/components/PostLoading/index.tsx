import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { View } from 'react-native';
import styles from './styles';

const PostLoading = () => {
  return (
    <SkeletonPlaceholder>
      <View style={styles.card} />
      <View style={styles.card} />
      <View style={styles.card} />
    </SkeletonPlaceholder>
  );
};

export default PostLoading;
