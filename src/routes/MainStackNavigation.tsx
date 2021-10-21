import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import { WHITE } from '../constants/colors';
import { Profile } from '../screens/Profile';
import { NewPassword } from '../screens/NewPassword';
import Orders from '../screens/Orders';
import BottomTabNavigation from './bottomTabNavigator';
import Filter from '../screens/Filter';
import Reviews from '../screens/review/Reviews';
import ReviewDetail from '../screens/review/ReviewDetail';
import MyDirections from '../screens/MyDirections';
import Cart from '../screens/Cart';
import ContactUs from '../screens/support/ContactUs';
import { Notifications } from '../screens/Notifications';

const Stack = createStackNavigator();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="TabBottomNavigation"
      screenOptions={{
        headerShown: false,
        headerMode: 'screen',
        cardStyle: { backgroundColor: WHITE },
      }}
    >
      <Stack.Screen name="TabBottomNavigation" component={BottomTabNavigation} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="orders" component={Orders} />
      <Stack.Screen name="reviews" component={Reviews} />
      <Stack.Screen name="reviewDetail" component={ReviewDetail} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="Filter" component={Filter} />
      <Stack.Screen name="directions" component={MyDirections} />
      <Stack.Screen name="contactUs" component={ContactUs} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
