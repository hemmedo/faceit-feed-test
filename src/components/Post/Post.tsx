import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { PostProps } from '.';
import { ScreenNames } from '../../navigation/screen-names';
import { ScreenParamList } from '../../navigation/screen-types';
import styles from './styles';
// import styles from './styles';

export const Post: React.FC<PostProps> = ({ data }) => {
  const navigation = useNavigation<StackNavigationProp<ScreenParamList>>();

  return (
    <Pressable
      style={styles.parentContainer}
      onPress={() => navigation.navigate(ScreenNames.POST_DETAIL, data.id)}>
      <View style={[styles.container, styles.cardContainer]}>
        <FastImage
          style={styles.avatar}
          source={{
            uri: data.owner.picture,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={styles.postContainer}>
          <Text style={styles.name}>
            {data.owner.firstName + ' ' + data.owner.lastName}
          </Text>
          <View style={[styles.container, styles.textContainer]}>
            <Text ellipsizeMode="tail" numberOfLines={5}>
              {data.text}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
