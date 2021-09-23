import { NavigationProp } from '@react-navigation/core';
import React, { useState } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar, Alert } from 'react-native';
import Text from '../components/Text';
import { PRIMARY_BLUE, LIGHTER_GRAY, DARKER_BLUE, DARK } from '../constants/colors';
import { TERMINABOLD } from '../constants/fonts';

interface IProps {
    navigation: NavigationProp<any, any>
  };
  
export const MyAccount: React.FC<IProps> = ({ navigation }) => {

    return (
        <View style={styles.container}>

            {/* Cambio de color de la Status bar */}
            <StatusBar
                animated={true}
                backgroundColor="white" />

            {/* Titulo */}
            <Text style={styles.txthola}>hola,</Text>
            <Text style={styles.txtName}>ruby green</Text>

            {/* TopRight Icons */}
            <View style={{ position: 'absolute', right: 1, flexDirection: 'row', marginTop: 16, marginRight: 33 }}>
                <TouchableOpacity>
                    <Image source={require("../assets/MyAccount/NotificationsIcon.png")}
                        style={{ marginHorizontal: 10 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require("../assets/MyAccount/ConfigIcon.png")}
                        style={{ marginHorizontal: 10 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require("../assets/MyAccount/SupportIcon.png")}
                        style={{ marginLeft: 10 }} />
                </TouchableOpacity>
            </View>

            {/* Opciones: */}
            <View style={styles.OpcionesContainer}>

                {/* Editar perfil */}
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('Profile')}>
                    <Image source={require("../assets/MyAccount/EditIcon.png")}
                        style={{ marginRight: 8, alignSelf: 'center' }} />

                    <Text style={styles.lblEditarPerfil}>Editar perfil</Text>
                </TouchableOpacity>

                {/* Cerrar sesion */}
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Image source={require("../assets/MyAccount/LogOutIcon.png")}
                        style={{ marginRight: 8, marginLeft: 24, alignSelf: 'center' }} />

                    <Text style={styles.lblCerrarSesion}>Cerrar sesion</Text>
                </TouchableOpacity>

            </View>

            {/* Menu */}
            <ScrollView style={styles.MenuContainer}>

                {/* Mis pedidos */}
                <TouchableOpacity style={{ flexDirection: 'row', marginHorizontal: 33, height: 48, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Image source={require("../assets/MyAccount/MisPedidosIcon.png")} />
                    <Text style={{ marginLeft: 12, fontFamily: "Effra_Rg", fontSize:16, color: DARK }}>Mis pedidos</Text>
                    <Image source={require("../assets/MyAccount/ArrowIcon.png")} style={{ position: 'absolute', right: 1 }} />
                </TouchableOpacity>

                <View style={{ marginHorizontal: 33, height: 1, marginTop: 3, backgroundColor: LIGHTER_GRAY }}></View>

                {/* Mis direcciones */}
                <TouchableOpacity style={{ flexDirection: 'row', marginHorizontal: 33, height: 48, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Image source={require("../assets/MyAccount/MisDireccionesIcon.png")} />
                    <Text style={{ marginLeft: 12, fontFamily: "Effra_Rg", fontSize:16, color: DARK }}>Mis direcciones</Text>
                    <Image source={require("../assets/MyAccount/ArrowIcon.png")} style={{ position: 'absolute', right: 1 }} />
                </TouchableOpacity>

                <View style={{ marginHorizontal: 33, height: 1, marginTop: 3, backgroundColor: LIGHTER_GRAY }}></View>

                {/* Mi tienda favorita */}
                <TouchableOpacity style={{ flexDirection: 'row', marginHorizontal: 33, height: 48, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Image source={require("../assets/MyAccount/MiTiendaFavoritaIcon.png")} />
                    <Text style={{ marginLeft: 12, fontFamily: "Effra_Rg", fontSize:16, color: DARK }}>Mi tienda favorita</Text>
                    <Image source={require("../assets/MyAccount/ArrowIcon.png")} style={{ position: 'absolute', right: 1 }} />
                </TouchableOpacity>

                <View style={{ marginHorizontal: 33, height: 1, marginTop: 3, backgroundColor: LIGHTER_GRAY }}></View>

                {/* Mis opciones de pago */}
                <TouchableOpacity style={{ flexDirection: 'row', marginHorizontal: 33, height: 48, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Image source={require("../assets/MyAccount/MisOpcionesDePagoIcon.png")} />
                    <Text style={{ marginLeft: 12, fontFamily: "Effra_Rg", fontSize:16, color: DARK }}>Mis opciones de pago</Text>
                    <Image source={require("../assets/MyAccount/ArrowIcon.png")} style={{ position: 'absolute', right: 1 }} />
                </TouchableOpacity>

                <View style={{ marginHorizontal: 33, height: 1, marginTop: 3, backgroundColor: LIGHTER_GRAY }}></View>

                {/* Mis tarjetas de regalo */}
                <TouchableOpacity style={{ flexDirection: 'row', marginHorizontal: 33, height: 48, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Image source={require("../assets/MyAccount/MisTarjetasDeRegaloIcon.png")} />
                    <Text style={{ marginLeft: 12, fontFamily: "Effra_Rg", fontSize:16, color: DARK }}>Mis tarjetas de regalo</Text>
                    <Image source={require("../assets/MyAccount/ArrowIcon.png")} style={{ position: 'absolute', right: 1 }} />
                </TouchableOpacity>

                <View style={{ marginHorizontal: 33, height: 1, marginTop: 3, backgroundColor: LIGHTER_GRAY }}></View>

                {/* Mis ofertas */}
                <TouchableOpacity style={{ flexDirection: 'row', marginHorizontal: 33, height: 48, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Image source={require("../assets/MyAccount/MisOfertasIcon.png")} />
                    <Text style={{ marginLeft: 12, fontFamily: "Effra_Rg", fontSize:16, color: DARK }}>Mis ofertas</Text>
                    <Image source={require("../assets/MyAccount/ArrowIcon.png")} style={{ position: 'absolute', right: 1 }} />
                </TouchableOpacity>

                <View style={{ marginHorizontal: 33, height: 1, marginTop: 3, backgroundColor: LIGHTER_GRAY }}></View>

                {/* Mis mesas de regalos */}
                <TouchableOpacity style={{ flexDirection: 'row', marginHorizontal: 33, height: 48, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Image source={require("../assets/MyAccount/MiMesaDeRegalosIcon.png")} />
                    <Text style={{ marginLeft: 12, fontFamily: "Effra_Rg", fontSize:16, color: DARK }}>Mis mesas de regalos</Text>
                    <Image source={require("../assets/MyAccount/ArrowIcon.png")} style={{ position: 'absolute', right: 1 }} />
                </TouchableOpacity>

                <View style={{ marginHorizontal: 33, height: 1, marginTop: 3, backgroundColor: LIGHTER_GRAY }}></View>

                {/* Mis reseñas */}
                <TouchableOpacity style={{ flexDirection: 'row', marginHorizontal: 33, height: 48, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Image source={require("../assets/MyAccount/MisResenasIcon.png")} />
                    <Text style={{ marginLeft: 12, fontFamily: "Effra_Rg", fontSize:16, color: DARK }}>Mis reseñas</Text>
                    <Image source={require("../assets/MyAccount/ArrowIcon.png")} style={{ position: 'absolute', right: 1 }} />
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%"
    },
    txthola: {
        marginLeft: 36,
        marginTop: 16,
        fontSize: 20,
        color: DARKER_BLUE
    },
    txtName: {
        marginLeft: 36,
        fontSize: 24,
        fontFamily: TERMINABOLD,
        color: DARKER_BLUE
    },
    OpcionesContainer: {
        flexDirection: 'row',
        marginLeft: 36
    },
    lblEditarPerfil: {
        color: PRIMARY_BLUE,
        fontFamily: "Effra_Rg", 
        fontSize:16
    },
    lblCerrarSesion: {
        color: PRIMARY_BLUE,
        fontFamily: "Effra_Rg", 
        fontSize:16
    },
    MenuContainer: {
        marginTop: 38
    }
});
