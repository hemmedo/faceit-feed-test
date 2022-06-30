import { toPost } from './mapper';
import { Post } from './models';
import { map } from 'rambdax';
import { BASE_URL, POSTS } from '../utils/constants';
import { create as createAxios } from 'apisauce';

const create = (baseURL = BASE_URL) => {
  const api = createAxios({
    baseURL,
    headers: {
      'app-id': '62bcadbea0422fb48d724348',
    },
  });

  const getPosts = (limit: number) =>
    api
      .get(POSTS + `?limit=${limit}`)
      .then(response => response.data.data)
      .then(json => map(toPost, json as Post[]));

  return {
    getPosts,
  };
};

const api = create();

export default api;
