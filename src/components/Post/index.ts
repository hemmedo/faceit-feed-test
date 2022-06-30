import React from 'react';
import { Post as PostType } from '../../service/models';
import { Post } from './Post';

export type PostProps = {
  data: PostType;
};

const isSamePost = (prevProps: PostProps, nextProps: PostProps) => {
  const { id } = nextProps.data;
  const { id: prevId } = prevProps.data;

  return id === prevId;
};

export default React.memo(Post, isSamePost);
