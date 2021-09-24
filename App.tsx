import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import BottomTabNavigation from './src/routes/bottomTabNavigator';
import Splash from './src/screens/Splash';

import {store} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Splash />
        <BottomTabNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
