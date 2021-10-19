import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import MainStackNavigation from './MainStackNavigation';
import { selectUIInitialized } from '../store/slices/uiSlice';
import { navigationRef } from '../utils/navigations';

const AppStackNavigator = () => {
  const isInitialized = useSelector(selectUIInitialized);

  if (!isInitialized) {
    return null;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <MainStackNavigation />
    </NavigationContainer>
  );
};

export default AppStackNavigator;
