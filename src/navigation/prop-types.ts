import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenNames } from './screen-names';
import { ScreenParamList } from './screen-types';

export type HomeScreenNavigationProp = StackNavigationProp<
  ScreenParamList,
  ScreenNames.HOME
>;

export type PostDetailScreenNavigationProp = StackNavigationProp<
  ScreenParamList,
  ScreenNames.POST_DETAIL
>;

export type PostDetailScreenRouteProp = RouteProp<
  ScreenParamList,
  ScreenNames.POST_DETAIL
>;
