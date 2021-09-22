import { NavigationProp } from '@react-navigation/core'
import React from 'react'
import { DARKER_BLUE, DARK, PRIMARY_BLUE } from '../constants/colors'
import { Image, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { TextField } from 'rn-material-ui-textfield'

interface IProps {
    navigation: NavigationProp<any, any>
};

export const NewPassword: React.FC<IProps> = ({ navigation }) => {
    return (
        <View>
            {/* Cambio de color de la Status bar */}
            <StatusBar
                animated={true}
                backgroundColor="white" />

            {/* Contenido de pagina */}
            <View style={{ marginHorizontal: 23, justifyContent: 'center', height: "100%" }}>

                {/* Texto superior*/}
                <Text style={{ fontFamily: "Effra_Rg", fontSize: 16, color: DARK }}>Ingresa tu actual contraseña seguido de la nueva  y confírmala.</Text>

                {/* Contraseña actual */}
                <View>
                    <TextField label="Contraseña actual" secureTextEntry={true}></TextField>
                    <TouchableOpacity style={{position:'absolute', right:1, marginTop:34, marginRight:14}}>
                        <Image source={require('../assets/NewPassword/EyeCloseIcon.png')}></Image>
                    </TouchableOpacity>
                </View>

                {/* Nueva contraseña */}
                <View>
                    <TextField label="Nueva contraseña" secureTextEntry={true}></TextField>
                    <TouchableOpacity style={{position:'absolute', right:1, marginTop:34, marginRight:14}}>
                        <Image source={require('../assets/NewPassword/EyeCloseIcon.png')}></Image>
                    </TouchableOpacity>
                </View>

                {/* Confirmar nueva contraseña */}
                <View>
                    <TextField label="Confirmar nueva contraseña" secureTextEntry={true}></TextField>
                    <TouchableOpacity style={{position:'absolute', right:1, marginTop:34, marginRight:14}}>
                        <Image source={require('../assets/NewPassword/EyeCloseIcon.png')}></Image>
                    </TouchableOpacity>
                </View>

                {/* Boton de guardar */}
                <TouchableOpacity style={{
                    backgroundColor: PRIMARY_BLUE, alignSelf: 'center', width: 310, height: 52, marginTop: 18, marginBottom: 20, justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{ color: 'white' }}>Confirmar</Text>
                </TouchableOpacity>
            </View>

            {/* Titulo */}
            <View style={{ width: "100%", height: 60, position: 'absolute', backgroundColor: 'white' }} >

                {/* Icono de x */}
                <TouchableOpacity style={{ marginTop: 26, marginRight: 24, position: 'absolute', right: 1 }} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/NewPassword/XIcon.png')} />
                </TouchableOpacity>

                {/* Titulo de la pantalla */}
                <Text style={{ fontFamily: "TerminaW05-Bold", position: 'absolute', alignSelf: 'center', fontSize: 20, marginTop: 20, color: DARKER_BLUE }}>nueva contraseña</Text>
            </View>

        </View>
    )
}
