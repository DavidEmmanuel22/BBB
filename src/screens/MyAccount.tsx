/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavigationProp, RouteProp } from '@react-navigation/core';
import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar, Text } from 'react-native';
import { PRIMARY_BLUE, LIGHTER_GRAY, DARKER_BLUE, DARK } from '../constants/colors';
import { TERMINABOLD } from '../constants/fonts';
import useAuthContext from '../context/AuthContext';

interface IProps {
  route: RouteProp<any, any>;
  navigation: NavigationProp<any, any>;
}

export const MyAccount: React.FC<IProps> = ({ navigation }) => {
  const { signOut, accessToken, user, isLoadingGetUserData }: any = useAuthContext();

  return (
    <View style={styles.container}>
      {/* Status bar color change */}
      <StatusBar animated={true} backgroundColor="white" />

      {/* Title */}
      <Text style={styles.txthola}>hola,</Text>
      {!isLoadingGetUserData && (
        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.txtName}>
          {user?.firstname + ' ' + user?.lastname}
        </Text>
      )}

      {/* TopRight Icons */}
      <View
        style={{
          position: 'absolute',
          right: 1,
          flexDirection: 'row',
          marginTop: 16,
          marginRight: 33,
        }}
      >
        <TouchableOpacity>
          <Image source={require('../assets/MyAccount/NotificationsIcon.png')} style={{ marginHorizontal: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/MyAccount/ConfigIcon.png')} style={{ marginHorizontal: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/MyAccount/SupportIcon.png')} style={{ marginLeft: 10 }} />
        </TouchableOpacity>
      </View>

      {/* Choices: */}
      <View style={styles.OpcionesContainer}>
        {/* Editar perfil */}
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={() => {
            navigation.navigate('Profile');
          }}
        >
          <Image source={require('../assets/MyAccount/EditIcon.png')} style={{ marginRight: 8, alignSelf: 'center' }} />

          <Text style={styles.lblEditarPerfil}>Editar perfil</Text>
        </TouchableOpacity>

        {/* Cerrar sesion */}
        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => signOut()}>
          <Image
            source={require('../assets/MyAccount/LogOutIcon.png')}
            style={{ marginRight: 8, marginLeft: 24, alignSelf: 'center' }}
          />

          <Text style={styles.lblCerrarSesion}>Cerrar sesion</Text>
        </TouchableOpacity>
      </View>

      {/* Menu */}
      <ScrollView style={styles.MenuContainer}>
        {/* My orders */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginHorizontal: 33,
            height: 48,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('orders', { user, accessToken })}
        >
          <Image source={require('../assets/MyAccount/MisPedidosIcon.png')} />
          <Text
            style={{
              marginLeft: 12,
              fontFamily: 'Effra_Rg',
              fontSize: 16,
              color: DARK,
            }}
          >
            Mis pedidos
          </Text>
          <Image source={require('../assets/MyAccount/ArrowIcon.png')} style={{ position: 'absolute', right: 1 }} />
        </TouchableOpacity>

        <View
          style={{
            marginHorizontal: 33,
            height: 1,
            marginTop: 3,
            backgroundColor: LIGHTER_GRAY,
          }}
        />

        {/* My Addresses */}
        <TouchableOpacity
          onPress={() => navigation.navigate('directions')}
          style={{
            flexDirection: 'row',
            marginHorizontal: 33,
            height: 48,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Image source={require('../assets/MyAccount/MisDireccionesIcon.png')} />
          <Text
            style={{
              marginLeft: 12,
              fontFamily: 'Effra_Rg',
              fontSize: 16,
              color: DARK,
            }}
          >
            Mis direcciones
          </Text>
          <Image source={require('../assets/MyAccount/ArrowIcon.png')} style={{ position: 'absolute', right: 1 }} />
        </TouchableOpacity>

        <View
          style={{
            marginHorizontal: 33,
            height: 1,
            marginTop: 3,
            backgroundColor: LIGHTER_GRAY,
          }}
        />

        {/* My favourite store */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginHorizontal: 33,
            height: 48,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Image source={require('../assets/MyAccount/MiTiendaFavoritaIcon.png')} />
          <Text
            style={{
              marginLeft: 12,
              fontFamily: 'Effra_Rg',
              fontSize: 16,
              color: DARK,
            }}
          >
            Mi tienda favorita
          </Text>
          <Image source={require('../assets/MyAccount/ArrowIcon.png')} style={{ position: 'absolute', right: 1 }} />
        </TouchableOpacity>

        <View
          style={{
            marginHorizontal: 33,
            height: 1,
            marginTop: 3,
            backgroundColor: LIGHTER_GRAY,
          }}
        />

        {/* My payment options */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginHorizontal: 33,
            height: 48,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Image source={require('../assets/MyAccount/MisOpcionesDePagoIcon.png')} />
          <Text
            style={{
              marginLeft: 12,
              fontFamily: 'Effra_Rg',
              fontSize: 16,
              color: DARK,
            }}
          >
            Mis opciones de pago
          </Text>
          <Image source={require('../assets/MyAccount/ArrowIcon.png')} style={{ position: 'absolute', right: 1 }} />
        </TouchableOpacity>

        <View
          style={{
            marginHorizontal: 33,
            height: 1,
            marginTop: 3,
            backgroundColor: LIGHTER_GRAY,
          }}
        />

        {/* My gift cards */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginHorizontal: 33,
            height: 48,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Image source={require('../assets/MyAccount/MisTarjetasDeRegaloIcon.png')} />
          <Text
            style={{
              marginLeft: 12,
              fontFamily: 'Effra_Rg',
              fontSize: 16,
              color: DARK,
            }}
          >
            Mis tarjetas de regalo
          </Text>
          <Image source={require('../assets/MyAccount/ArrowIcon.png')} style={{ position: 'absolute', right: 1 }} />
        </TouchableOpacity>

        <View
          style={{
            marginHorizontal: 33,
            height: 1,
            marginTop: 3,
            backgroundColor: LIGHTER_GRAY,
          }}
        />

        {/* My offers */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginHorizontal: 33,
            height: 48,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Image source={require('../assets/MyAccount/MisOfertasIcon.png')} />
          <Text
            style={{
              marginLeft: 12,
              fontFamily: 'Effra_Rg',
              fontSize: 16,
              color: DARK,
            }}
          >
            Mis ofertas
          </Text>
          <Image source={require('../assets/MyAccount/ArrowIcon.png')} style={{ position: 'absolute', right: 1 }} />
        </TouchableOpacity>

        <View
          style={{
            marginHorizontal: 33,
            height: 1,
            marginTop: 3,
            backgroundColor: LIGHTER_GRAY,
          }}
        />

        {/* My gift tables */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginHorizontal: 33,
            height: 48,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Image source={require('../assets/MyAccount/MiMesaDeRegalosIcon.png')} />
          <Text
            style={{
              marginLeft: 12,
              fontFamily: 'Effra_Rg',
              fontSize: 16,
              color: DARK,
            }}
          >
            Mis mesas de regalos
          </Text>
          <Image source={require('../assets/MyAccount/ArrowIcon.png')} style={{ position: 'absolute', right: 1 }} />
        </TouchableOpacity>

        <View
          style={{
            marginHorizontal: 33,
            height: 1,
            marginTop: 3,
            backgroundColor: LIGHTER_GRAY,
          }}
        />

        {/* My reviews */}
        <TouchableOpacity
          onPress={() => navigation.navigate('reviews')}
          style={{
            flexDirection: 'row',
            marginHorizontal: 33,
            height: 48,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Image source={require('../assets/MyAccount/MisResenasIcon.png')} />
          <Text
            style={{
              marginLeft: 12,
              fontFamily: 'Effra_Rg',
              fontSize: 16,
              color: DARK,
            }}
          >
            Mis reseñas
          </Text>
          <Image source={require('../assets/MyAccount/ArrowIcon.png')} style={{ position: 'absolute', right: 1 }} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  txthola: {
    marginLeft: 36,
    marginTop: 16,
    fontSize: 20,
    color: DARKER_BLUE,
  },
  txtName: {
    marginLeft: 36,
    fontSize: 24,
    fontFamily: TERMINABOLD,
    color: DARKER_BLUE,
    width: '70%',
  },
  OpcionesContainer: {
    flexDirection: 'row',
    marginLeft: 36,
  },
  lblEditarPerfil: {
    color: PRIMARY_BLUE,
    fontFamily: 'Effra_Rg',
    fontSize: 16,
  },
  lblCerrarSesion: {
    color: PRIMARY_BLUE,
    fontFamily: 'Effra_Rg',
    fontSize: 16,
  },
  MenuContainer: {
    marginTop: 38,
  },
});
