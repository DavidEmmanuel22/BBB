import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import BottomTabNavigation from './src/routes/bottomTabNavigator';
import Splash from './src/screens/Splash';

import {store} from './src/store';

//import {ThemeProvider} from 'react-native-magnus';
//import theme from './src/theme/theme';

const App = () => {
  return (
    <Provider store={store}>
      {/*<ThemeProvider>*/}
      <NavigationContainer>
        <Splash />
        <BottomTabNavigation />
      </NavigationContainer>
      {/* </ThemeProvider>*/}
    </Provider>
  );
};

export default App;
