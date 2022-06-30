import { combineReducers } from 'redux';
import storeConfig from './storeConfig';
import { reducer as postReducer } from './post';

export default () => {
  const appReducer = combineReducers({
    post: postReducer,
    //other reducers
  });

  return storeConfig(appReducer);
};
