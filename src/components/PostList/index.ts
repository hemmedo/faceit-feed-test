import { Post } from '../../service/models';
import { PostList } from './PostList';

export type PostListProps = {
  data: Array<Post> | undefined;
  onEndReached: () => void;
  onRefresh: () => void;
  loading?: boolean;
};

export default PostList;
