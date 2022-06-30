import { createReducer } from 'reduxsauce';
import { INITIAL_STATE } from './initialState';
import { PostTypes } from './actions';

export const setPosts = (state, { data }) => {
  return {
    ...state,
    data,
  };
};

export const reducer = createReducer(INITIAL_STATE, {
  [PostTypes.SET_POSTS]: setPosts,
});
