import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Categories from '../screens/Categories';
import ProductsByCategory from '../screens/ProductsByCategory';
import ProductDetail from '../screens/ProductDetail';
import SearchHeader from '../components/SearchHeader';
import { WHITE } from '../constants/colors';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Index"
      screenOptions={{
        header: (props) => {
          return <SearchHeader {...props} />;
        },
        headerMode: 'screen',
        cardStyle: { backgroundColor: WHITE },
      }}
    >
      <Stack.Screen name="Index" component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="ProductsByCategory" component={ProductsByCategory} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
