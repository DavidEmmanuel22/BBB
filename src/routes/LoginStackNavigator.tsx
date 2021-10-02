import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import Register from '../screens/Register';
import { WHITE } from '../constants/colors';
import { MyAccount } from '../screens/MyAccount';
import { Profile } from '../screens/Profile';
import { NewPassword } from '../screens/NewPassword';
import { RegisterPolicy } from '../screens/RegisterPolicy';

const Stack = createStackNavigator();

const LoginStackNavigator = () => {
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
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="MyAccount" component={MyAccount} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
    </Stack.Navigator>
  );
};

export default LoginStackNavigator;
