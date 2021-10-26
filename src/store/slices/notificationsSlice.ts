import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../';
import { Notification } from '../../models/Objects/Notification';

interface NotificationState {
  notifications: Array<Notification>;
}

const initialState: NotificationState = {
  notifications: [],
};

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action) => {      
      state.notifications = state.notifications.concat(JSON.parse(action.payload.notification));
      AsyncStorage.setItem('notifications', JSON.stringify(state.notifications));
    },
    notificationClicked: (state, action) => {      
      const index = state.notifications.findIndex((element, index) => (action.payload.notification.body === element.body && action.payload.notification.time === element.time));
      state.notifications[index].clicked = true;
      AsyncStorage.setItem('notifications', JSON.stringify(state.notifications));
    },
    removeNotification: (state, action) => {
      const index = state.notifications.findIndex((element, index) => (action.payload.notification.body === element.body && action.payload.notification.time === element.time));
      state.notifications.splice(index, 1);
      AsyncStorage.setItem('notifications', JSON.stringify(state.notifications));
    },
    removeAllNotifications: (state, action) => {
      state.notifications = initialState.notifications;
      AsyncStorage.setItem('notifications', JSON.stringify(state.notifications));
    },
    recoverNotifications: (state, action) => {
      state.notifications = action.payload.pastNotifications;
    },
    
  },
});

// Actions
export const { addNotification, notificationClicked, removeNotification, removeAllNotifications, recoverNotifications } = notificationsSlice.actions;

// Selectors
export const selectNotifications = (state: RootState) => state.notifications.notifications;

// Reducer
export default notificationsSlice.reducer;
