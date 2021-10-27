import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Terms from '../screens/Terms';
import Register from '../screens/Register';
import { RegisterPolicy } from '../screens/RegisterPolicy';
import { WHITE } from '../constants/colors';

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
      <Stack.Screen name="TermsAndConditions" component={Terms} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
