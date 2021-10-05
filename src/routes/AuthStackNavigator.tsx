import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Register from '../screens/Register';
import { WHITE } from '../constants/colors';
import { RegisterPolicy } from '../screens/RegisterPolicy';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Index"
      screenOptions={{
        headerShown: false,
        headerMode: 'screen',
        cardStyle: { backgroundColor: WHITE },
      }}
    >
      <Stack.Screen name="Index" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="RegisterPolicy" component={RegisterPolicy} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
