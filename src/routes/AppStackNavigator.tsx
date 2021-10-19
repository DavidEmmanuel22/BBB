import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import MainStackNavigation from './MainStackNavigation';
import { selectUIInitialized } from '../store/slices/uiSlice';

const AppStackNavigator = () => {
  const isInitialized = useSelector(selectUIInitialized);

  if (!isInitialized) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStackNavigation />
    </NavigationContainer>
  );
};

export default AppStackNavigator;
