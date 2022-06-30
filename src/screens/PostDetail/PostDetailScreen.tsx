import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import { PostDetailScreenProps } from '../../navigation/screen-props';
import { useSelector } from 'react-redux';
import { selectPosts } from '../../store/post';
import { Post } from '../../service/models';
import { ScrollView } from 'react-native-gesture-handler';
import globalStyles from '../../utils/globalStyles';
import CloseButton from '../../components/CloseButton';

const PostDetailScreen = ({ route }: PostDetailScreenProps) => {
  const id = route.params;
  const posts = useSelector(selectPosts) as Post[];
  const selectedPost = posts.find(post => post.id === id) as Post;

  return (
    <View style={styles.container}>
      <CloseButton />
      <View style={globalStyles.alignCenter}>
        <FastImage
          style={styles.avatar}
          source={{
            uri: selectedPost.owner.picture,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text style={styles.name}>
          {selectedPost.owner.firstName + ' ' + selectedPost.owner.lastName}
        </Text>
      </View>
      <ScrollView
        style={styles.textContainer}
        contentContainerStyle={styles.contentContainer}>
        <Text style={styles.text}>{selectedPost.text}</Text>
      </ScrollView>
    </View>
  );
};

export default PostDetailScreen;
