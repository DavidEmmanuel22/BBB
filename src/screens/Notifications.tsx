import { NavigationProp } from '@react-navigation/core';
import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native';
import Text from '../components/Text';
import { BRAND_BLUE, DARK, DARKER_BLUE, GRAY2, LIGHTER_GRAY, PRIMARY_BLUE } from '../constants/colors';
import { TERMINABOLD } from '../constants/fonts';
import { getHeight } from '../utils/interfaceDimentions';

interface IProps {
  navigation: NavigationProp<any, any>;
}

export const Notifications: React.FC<IProps> = ({ navigation }) => {
  
    const [prueba, setprueba] = useState(false);

  return (
    <View>
      {prueba ? (
        <TouchableOpacity  onPress={() => setprueba(!prueba)}>
          <StatusBar animated={true} backgroundColor="white" />
          <View style={stylesNotifications.TopBar}>
            <Text style={stylesNotifications.TopBarText}>notificaciones</Text>
            <TouchableOpacity style={stylesNotifications.TopBarArrow} onPress={() => navigation.goBack()}>
              <Image source={require('../assets/Notifications/XIcon.png')} />
            </TouchableOpacity>
          </View>
          <View style={stylesNotifications.container}>
            <Text style={stylesNotifications.amountNotifications} bold={true}>
              1 notificación nueva
            </Text>
            <TouchableOpacity style={stylesNotifications.btnCleanContainer} onPress={() => {}}>
              <Image
                style={stylesNotifications.btnCleanImage}
                source={require('../assets/Notifications/EraseIcon.png')}
              />
              <Text bold={true} color={PRIMARY_BLUE}>
                Limpiar todo
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={{height:"85%", marginTop:6}}>
            <View style={{ marginHorizontal: 16 }}>
              <Image
                style={{ width: '100%', resizeMode: 'contain' }}
                source={require('../assets/Notifications/pruebaNotificacion.png')}
              />
              <View>
                <Text color={GRAY2} size={13}>
                  Hace un momento
                </Text>
                <Text color={DARK} size={14} bold={true}>
                  BVVA, 4 meses sin intereses en compras mínimo $1,200.00 MXN (del 6 al 12 de septiembre de 2021)
                </Text>
                <Image
                  style={{ position: 'absolute', right: 1 }}
                  source={require('../assets/Notifications/TrashIcon.png')}
                />
              </View>
              <View style={{ height: 1, backgroundColor: LIGHTER_GRAY, marginTop: 8 }} />
            </View>
          
          </ScrollView>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setprueba(!prueba)}>
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
        </TouchableOpacity>
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
  btnCleanContainer: {
    flexDirection: 'row',
    right: 1,
    position: 'absolute',
  },
  btnCleanImage: {
    marginRight: 6,
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
