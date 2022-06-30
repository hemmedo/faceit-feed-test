import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import { ScreenParamList } from './screen-types';
import { ScreenNames } from './screen-names';
import PostDetailScreen from '../screens/PostDetail/PostDetailScreen';

const Stack = createNativeStackNavigator<ScreenParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenNames.HOME}
        defaultScreenOptions={{ headerBackTitle: 'Back' }}>
        <Stack.Screen
          name={ScreenNames.HOME}
          component={HomeScreen}
          options={{
            headerShown: true,
            headerTitle: 'Post Feed',
          }}
        />
        <Stack.Screen
          name={ScreenNames.POST_DETAIL}
          component={PostDetailScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
