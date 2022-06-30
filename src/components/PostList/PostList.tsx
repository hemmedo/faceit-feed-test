import React from 'react';
import { FlatList } from 'react-native';
import { PostListProps } from '.';
import { Post as PostType } from '../../service/models';
import Post from '../Post';
import PostLoading from '../PostLoading';

export const PostList: React.FC<PostListProps> = ({
  data,
  loading,
  onEndReached,
  onRefresh,
}) => {
  const _renderItem = ({ item }: { item: PostType }) => {
    return <Post data={item} />;
  };

  const keyExtractor = (item: PostType) => item.id;

  return (
    <FlatList
      data={data}
      renderItem={_renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      initialNumToRender={4}
      scrollEventThrottle={400}
      refreshing={loading}
      onRefresh={onRefresh}
      ListFooterComponent={() => (loading ? <PostLoading /> : null)}
    />
  );
};
