import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import Register from '../screens/Register';
import { WHITE } from '../constants/colors';

const Stack = createStackNavigator();

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Index"
      screenOptions={{
        headerShown: false,
        headerMode: 'screen',
        cardStyle: { backgroundColor: WHITE }
      }}
    >
      <Stack.Screen name="Index" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

export default LoginStackNavigator;