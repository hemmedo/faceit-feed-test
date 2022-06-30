import { createSelector } from 'reselect';

export const selector = state => state.post;

export const selectPosts = createSelector(selector, post => post.data);
