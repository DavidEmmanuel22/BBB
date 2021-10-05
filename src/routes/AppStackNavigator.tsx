import React from 'react';
import MainStackNavigation from './MainStackNavigation';
import { NavigationContainer } from '@react-navigation/native';

const AppStackNavigator = () => {
  return (
    <NavigationContainer>
      <MainStackNavigation />
    </NavigationContainer>
  );
};

export default AppStackNavigator;
