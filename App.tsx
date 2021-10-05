import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import Splash from './src/screens/Splash';

import { store } from './src/store';
import FlashMessage from 'react-native-flash-message';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthContextProvider } from './src/context/AuthContext';
import AppStackNavigator from './src/routes/AppStackNavigator';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AuthContextProvider>
          <Splash />
          <AppStackNavigator />
          <FlashMessage position="top" />
        </AuthContextProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
