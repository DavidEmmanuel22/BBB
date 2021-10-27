import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackNavigator from './HomeStackNavigator';
import MenuStackNavigator from './MenuStackNavigator';
import Discounts from '../screens/Discounts';
import Wishlist from '../screens/Wishlist';
import Icon from '../components/Icon';
import { PRIMARY_BLUE } from '../constants/colors';
import AuthStackNavigator from './AuthStackNavigator';
import useAuthContext from '../context/AuthContext';
import { MyAccount } from '../screens/MyAccount';

interface ITabIconProps {
  name: string;
  focused: boolean;
  color: string;
  size: number;
}

const Tab = createBottomTabNavigator();

const isActiveTab = (focused: boolean, color: string) => {
  return focused && color === PRIMARY_BLUE ? '-filled' : '';
};

const TabIcon: React.FC<ITabIconProps> = ({ name, focused, color, size }) => (
  <Icon name={`${name}${isActiveTab(focused, color)}-icon`} color={color} size={size} />
);

const BottomTabNavigation = () => {
  const { isAuthenticated }: any = useAuthContext();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: PRIMARY_BLUE,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => <TabIcon name="home" focused={focused} color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Discounts"
        component={Discounts}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => <Icon name="tag-icon" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => <Icon name="heart-icon" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Login"
        component={isAuthenticated ? MyAccount : AuthStackNavigator}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => <TabIcon name="user" focused={focused} color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuStackNavigator}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => <Icon name="hamburguer-icon" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
