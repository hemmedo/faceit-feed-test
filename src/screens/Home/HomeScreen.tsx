import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import API from '../../service/http-service';
import PostList from '../../components/PostList';
import { POST_LIMIT, POST_MAX_LIMIT } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import PostActions from '../../store/post/actions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(POST_LIMIT);
  const {
    isLoading: isLoadingPosts,
    isFetching: isRefetching,
    data,
    refetch,
  } = useQuery('posts', () => API.getPosts(limit), {
    cacheTime: 0,
    enabled: true,
    onSuccess(data) {
      dispatch(PostActions.setPosts(data));
    },
  });

  useEffect(() => {
    refetch();
  }, [limit]);

  const isLoading = isLoadingPosts || isRefetching;

  return (
    <PostList
      data={data}
      onEndReached={() =>
        !isLoading &&
        limit < POST_MAX_LIMIT &&
        setLimit(currVal => currVal + POST_LIMIT)
      }
      onRefresh={() => setLimit(POST_LIMIT)}
      loading={isLoading}
    />
  );
};

export default HomeScreen;
