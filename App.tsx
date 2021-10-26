import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Splash from './src/screens/Splash';

import { store } from './src/store';
import FlashMessage from 'react-native-flash-message';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthContextProvider } from './src/context/AuthContext';
import AppStackNavigator from './src/routes/AppStackNavigator';

import OneSignal from 'react-native-onesignal';
import { APP_ID } from './src/constants/oneSignal';
import { Notification } from './src/models/Objects/Notification';
import { recoverNotifications } from './src/store/slices/notificationsSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const queryClient = new QueryClient();

const App = () => {

  useEffect(() => {
    //OneSignal Init Code
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId(APP_ID);
 
    //Method for handling notifications received while app in foreground
    OneSignal.setNotificationWillShowInForegroundHandler(async (notificationReceivedEvent) => {
      let notification = notificationReceivedEvent.getNotification();
      
      var today = new Date();
      var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
      var time = today.getHours() + ':' + today.getMinutes();
      var dateTime = date + ' ' + time;
      
      const newNotification : Notification = {
        image: notification.bigPicture,
        title: notification.title,
        body: notification.body,
        time: dateTime,
        clicked: false
      }
      
      await AsyncStorage.setItem("newNotification", JSON.stringify(newNotification));
      
      //const data = notification.additionalData;
      //console.log('additionalData: ', data);
      // Complete with null means don't show a notification.
      notificationReceivedEvent.complete(notification);
    });

    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler((notification) => {
      console.log('OneSignal: notification opened:', notification);
    });

  }, []);

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
