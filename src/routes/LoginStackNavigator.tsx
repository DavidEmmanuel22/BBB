import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Register from '../screens/Register';

const Stack = createStackNavigator();

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Index"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Index" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default LoginStackNavigator;