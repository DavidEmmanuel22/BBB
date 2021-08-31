import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigation from './src/routes/bottomTabNavigator';
import Splash from './src/screens/Splash';
import Welcome from './src/screens/Welcome';


const App = () => {
  return (
    <NavigationContainer>
      <Welcome />
      {/*<Splash />
      <BottomTabNavigation />*/}
    </NavigationContainer>
  );
};

export default App;
