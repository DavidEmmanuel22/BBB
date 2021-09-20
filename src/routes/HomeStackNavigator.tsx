import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Search from '../screens/Search';
import SearchHeader from '../components/SearchHeader';
import {WHITE} from '../constants/colors';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Index"
      screenOptions={{
        header: props => {
          return <SearchHeader {...props} />;
        },
        headerMode: 'screen',
        cardStyle: {backgroundColor: WHITE},
      }}>
      <Stack.Screen name="Index" component={Home} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
