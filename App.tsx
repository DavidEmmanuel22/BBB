import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import BottomTabNavigation from './src/routes/bottomTabNavigator';
import Splash from './src/screens/Splash';

import {store} from './src/store';
import FlashMessage from 'react-native-flash-message';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NavigationContainer>
          <Splash />
          <BottomTabNavigation />

          <FlashMessage position="top" />
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
