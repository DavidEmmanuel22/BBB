import { NavigationProp } from '@react-navigation/core';
import React from 'react'
import { Alert, Image, TextInput, View, ScrollView, StatusBar } from 'react-native';
import Text from '../components/Text';
import { DARKER_BLUE, PRIMARY_BLUE } from '../constants/colors'
import { TextField, FilledTextField, OutlinedTextField } from 'rn-material-ui-textfield'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IProps {
    navigation: NavigationProp<any, any>
};

export const Profile: React.FC<IProps> = ({ navigation }) => {
    return (
        <View>
            {/* Cambio de color de la Status bar */}
            <StatusBar
                animated={true}
                backgroundColor="white" />

            {/* 
                El siguiente Scroll View contiene toda la vista
                exceptuando el icono de flecha y el titulo de la vista 
            */}
            <ScrollView>

                {/* Informacion personal */}
                <Text style={{ marginTop: 75, marginLeft: 24, color: PRIMARY_BLUE }}>Informacion personal</Text>

                {/* Nombre */}
                <View style={{ marginHorizontal: 24, marginTop: -5 }}>
                    <TextField label="Nombre"></TextField>
                </View>

                {/* Apellido */}
                <View style={{ marginHorizontal: 24, marginTop: -5 }}>
                    <TextField label="Apellido"></TextField>
                </View>

                {/* Correo electronico */}
                <View style={{ marginHorizontal: 24, marginTop: -5 }}>
                    <TextField label="Correo electrónico" keyboardType="email-address"></TextField>
                </View>

                {/* Mis intereses */}
                <Text style={{ marginTop: 18, marginLeft: 24, color: PRIMARY_BLUE }}>Mis intereses</Text>

                {/* Checkbox de Baño */}
                <BouncyCheckbox
                    size={20}
                    text="Baño"
                    unfillColor="white"
                    textStyle={{
                        fontFamily: "Effra_Rg",
                        color: "black",
                        textDecorationLine: "none"
                    }}
                    onPress={() => { }}
                    style={{ marginLeft: 24, marginTop: 10 }}
                />

                {/* Checkbox de Cocina */}
                <BouncyCheckbox
                    size={20}
                    text="Cocina"
                    unfillColor="white"
                    textStyle={{
                        fontFamily: "Effra_Rg",
                        color: "black",
                        textDecorationLine: "none"
                    }}
                    onPress={() => { }}
                    style={{ marginLeft: 24 }}
                />

                {/* Checkbox de Cuidado personal */}
                <BouncyCheckbox
                    size={20}
                    text="Ciudado personal"
                    unfillColor="white"
                    textStyle={{
                        fontFamily: "Effra_Rg",
                        color: "black",
                        textDecorationLine: "none"
                    }}
                    onPress={() => { }}
                    style={{ marginLeft: 24 }}
                />

                {/* Checkbox de Decoracion */}
                <BouncyCheckbox
                    size={20}
                    text="Decoración"
                    unfillColor="white"
                    textStyle={{
                        fontFamily: "Effra_Rg",
                        color: "black",
                        textDecorationLine: "none"
                    }}
                    onPress={() => { }}
                    style={{ marginLeft: 24 }}
                />

                {/* Checkbox de Mascotas viajes y mas */}
                <BouncyCheckbox
                    size={20}
                    text="Mascotas viajes y más"
                    unfillColor="white"
                    textStyle={{
                        fontFamily: "Effra_Rg",
                        color: "black",
                        textDecorationLine: "none"
                    }}
                    onPress={() => { }}
                    style={{ marginLeft: 24 }}
                />

                {/* Checkbox de Recamara */}
                <BouncyCheckbox
                    size={20}
                    text="Recámara"
                    unfillColor="white"
                    textStyle={{
                        fontFamily: "Effra_Rg",
                        color: "black",
                        textDecorationLine: "none"
                    }}
                    onPress={() => { }}
                    style={{ marginLeft: 24 }}
                />

                {/* Checkbox de Organizacion y limpieza */}
                <BouncyCheckbox
                    size={20}
                    text="Organización y limpieza"
                    unfillColor="white"
                    textStyle={{
                        fontFamily: "Effra_Rg",
                        color: "black",
                        textDecorationLine: "none"
                    }}
                    onPress={() => { }}
                    style={{ marginLeft: 24 }}
                />

                {/* Checkbox de Zona Outlet */}
                <BouncyCheckbox
                    size={20}
                    text="Zona outlet"
                    unfillColor="white"
                    textStyle={{
                        fontFamily: "Effra_Rg",
                        color: "black",
                        textDecorationLine: "none"
                    }}
                    onPress={() => { }}
                    style={{ marginLeft: 24 }}
                />

                {/* Boton de cambiar contraseña */}
                <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 30 }}
                    onPress={() => navigation.navigate("NewPassword")}>
                    <Image source={require('../assets/Profile/LockIcon.png')}></Image>
                    <Text style={{ marginLeft: 10 }}>Cambiar contraseña</Text>
                </TouchableOpacity>

                {/* Boton de guardar */}
                <TouchableOpacity style={{
                    backgroundColor: PRIMARY_BLUE, alignSelf: 'center', width: 303, height: 52, marginTop: 18, marginBottom: 20, justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{ color: 'white' }}>Guardar</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Titulo */}
            <View style={{ width: "100%", height: 60, position: 'absolute', backgroundColor: 'white' }} >

                {/* Icono de flecha */}
                <TouchableOpacity onPress={()=> navigation.goBack()} style={{ marginTop: 24, marginLeft: 24, width:"20%", height:25 }} > 
                    <Image source={require('../assets/Profile/ArrowIcon.png')}/>
                </TouchableOpacity>

                {/* Titulo de la pantalla */}
                <Text style={{ fontFamily: "TerminaW05-Bold", fontSize:20, position: 'absolute', alignSelf: 'center', marginTop: 20, color: DARKER_BLUE }}>mi perfil</Text>
            </View>
        </View>
    )
}