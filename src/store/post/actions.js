import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  setPosts: ['data'],
});

export const PostTypes = Types;
export default Creators;
