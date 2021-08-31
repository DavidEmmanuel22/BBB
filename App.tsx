import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigation from './src/routes/bottomTabNavigator';
import Splash from './src/screens/Splash';


const App = () => {
  return (
    <NavigationContainer>
      <Splash />
      <BottomTabNavigation />
    </NavigationContainer>
  );
};

export default App;
