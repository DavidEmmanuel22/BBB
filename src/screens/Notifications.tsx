import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native';
import Text from '../components/Text';
import { BRAND_BLUE, DARK, DARKER_BLUE, GRAY2, LIGHTER_GRAY, PRIMARY_BLUE } from '../constants/colors';
import { TERMINABOLD } from '../constants/fonts';
import { getHeight } from '../utils/interfaceDimentions';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNotification,
  notificationClicked,
  recoverNotifications,
  removeAllNotifications,
  removeNotification,
  selectNotifications,
} from '../store/slices/notificationsSlice';
import { Notification } from '../models/Objects/Notification';

interface IProps {
  navigation: NavigationProp<any, any>;
}

export const Notifications: React.FC<IProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const notifications: Array<Notification> = useSelector(selectNotifications);

  const recoverNotifica = async () => {
    const recNotificationJSON = await AsyncStorage.getItem('notifications');
    if (recNotificationJSON && recNotificationJSON != '[]') {
      const recNotification = JSON.parse(recNotificationJSON);
      dispatch(recoverNotifications({ pastNotifications: recNotification }));
    }

    const newNotificationJSON = await AsyncStorage.getItem('newNotification');
    if (newNotificationJSON) {
      await AsyncStorage.removeItem('newNotification');
      dispatch(addNotification({ notification: newNotificationJSON }));
    }

    setTimeout(recoverNotifica, 6000);
  };

  useEffect(() => {
    recoverNotifica();
  }, []);

  return (
    <View>
      {notifications.length > 0 ? (
        <View>
          <StatusBar animated={true} backgroundColor="white" />
          <View style={stylesNotifications.TopBar}>
            <Text style={stylesNotifications.TopBarText}>notificaciones</Text>
            <TouchableOpacity style={stylesNotifications.TopBarArrow} onPress={() => navigation.goBack()}>
              <Image source={require('../assets/Notifications/XIcon.png')} />
            </TouchableOpacity>
          </View>
          <View style={stylesNotifications.container}>
            <Text style={stylesNotifications.amountNotifications} bold={true}>
              {notifications.filter((item) => item.clicked == false).length} notificación nueva
            </Text>
            <TouchableOpacity style={stylesNotifications.btnCleanContainer} onPress={() => {dispatch(removeAllNotifications(""))}}>
              <Image
                style={stylesNotifications.btnCleanImage}
                source={require('../assets/Notifications/EraseIcon.png')}
              />
              <Text bold={true} color={PRIMARY_BLUE}>
                Limpiar todo
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={stylesNotifications.ScrollContainer}>
            {notifications.map((item) => (
              <View style={stylesNotifications.itemContainer}>
                <TouchableOpacity onPress={() => dispatch(notificationClicked({ notification: item }))}>
                  <Image style={stylesNotifications.itemImage} source={{ uri: item.image }} />
                </TouchableOpacity>
                <View>
                  <TouchableOpacity
                  style={stylesNotifications.textContainer}
                  onPress={() => dispatch(notificationClicked({ notification: item }))}>
                    <Text color={GRAY2} size={13}>
                      {item.time}
                    </Text>
                    {!item.clicked ? (
                      <Text color={DARK} size={14} bold={true}>
                        {item.body}
                      </Text>
                    ) : (
                      <Text color={DARK} size={14}>
                        {item.body}
                      </Text>
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={stylesNotifications.btnTrash}
                    onPress={() => dispatch(removeNotification({ notification: item }))}
                  >
                    <Image
                      style={stylesNotifications.trashIcon}
                      source={require('../assets/Notifications/TrashIcon.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View style={stylesNotifications.separator} />
              </View>
            ))}
          </ScrollView>
        </View>
      ) : (
        <View>
          <StatusBar animated={true} backgroundColor={BRAND_BLUE} barStyle="light-content" />
          <View style={stylesNoNotifications.TopBar}>
            <Text style={stylesNoNotifications.TopBarText}>notificaciones</Text>
            <TouchableOpacity style={stylesNoNotifications.TopBarArrow} onPress={() => navigation.goBack()}>
              <Image source={require('../assets/Notifications/WhiteArrowIcon.png')} />
            </TouchableOpacity>
          </View>
          <View style={stylesNoNotifications.NoNotifactionsContainer}>
            <Image
              style={stylesNoNotifications.NoNotifactionsImage}
              source={require('../assets/Notifications/WhiteBellIcon.png')}
            />
            <Text medium={true} bold={true} style={stylesNoNotifications.NoNotifactionsText}>
              No tienes notificaciones
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const stylesNotifications = StyleSheet.create({
  TopBar: {
    justifyContent: 'center',
  },
  TopBarArrow: {
    marginRight: 20,
    position: 'absolute',
    right: 1,
  },
  TopBarText: {
    alignSelf: 'center',
    color: DARKER_BLUE,
    fontFamily: TERMINABOLD,
    fontSize: 20,
    marginVertical: getHeight(12),
  },
  container: {
    marginHorizontal: 16,
    marginTop: 18,
    height: getHeight(28),
  },
  amountNotifications: {
    position: 'absolute',
    left: 1,
  },
  textContainer:{
    marginLeft:12
  },
  btnCleanContainer: {
    flexDirection: 'row',
    right: 1,
    position: 'absolute',
  },
  btnCleanImage: {
    marginRight: 6,
  },
  ScrollContainer: {
    height: '85%',
    marginTop: 6,
  },
  itemContainer: {
    marginHorizontal: 16,
  },
  itemImage: {
    width: '100%',
    height: 95,
    marginBottom: 12,
    resizeMode: 'contain',
  },
  trashIcon: {
    marginRight: 14,
  },
  btnTrash: {
    position: 'absolute',
    right: 1,
  },
  separator: {
    height: 1,
    backgroundColor: LIGHTER_GRAY,
    marginTop: 8,
    marginBottom: 12,
  },
});

const stylesNoNotifications = StyleSheet.create({
  TopBar: {
    backgroundColor: BRAND_BLUE,
    justifyContent: 'center',
  },
  TopBarArrow: {
    marginLeft: 20,
    position: 'absolute',
    left: 1,
  },
  TopBarText: {
    alignSelf: 'center',
    color: 'white',
    fontFamily: TERMINABOLD,
    fontSize: 20,
    marginVertical: getHeight(12),
  },
  NoNotifactionsContainer: {
    justifyContent: 'center',
    height: '93%',
  },
  NoNotifactionsImage: {
    alignSelf: 'center',
    marginBottom: 12,
  },
  NoNotifactionsText: {
    alignSelf: 'center',
    fontSize: 16,
  },
});
