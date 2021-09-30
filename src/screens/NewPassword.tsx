import { NavigationProp, RouteProp } from '@react-navigation/core'
import React, { useRef } from 'react'

import { DARKER_BLUE, DARK, PRIMARY_BLUE } from '../constants/colors'
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { TextField } from 'rn-material-ui-textfield'
import { NewPasswordController } from '../controllers/NewPasswordController';
import { User } from '../models/Objects/User'

interface IProps {
    route: RouteProp<any, any>
    navigation: NavigationProp<any, any>
};

export const NewPassword: React.FC<IProps> = ({ route, navigation }) => {

    const user: User = route.params.user;

    const {
        actualPassword,
        change_ActualPassword,
        newPassword,
        change_NewPassword,
        verificationPassword,
        change_VerificationPassword,

        errorActualPassword,
        errorNewPassword,
        errorVerificationPassword,

        showactualPassword,
        setshowactualPassword,
        shownewPassword,
        setshowNewPassword,
        showverificationPassword,
        setshowVerificationPassword,

        Confirm
    } = NewPasswordController();

    //Referencias
    const ref_textinput_NewPassword = useRef();
    const ref_textinput_VerificationPassword = useRef();

    return (
        <View>
            {/* Status bar color change */}
            <StatusBar
                animated={true}
                backgroundColor="white" />

            {/* Page content */}
            <View style={{ marginHorizontal: 23, justifyContent: 'center', height: "100%" }}>

                {/* Upper text */}
                <Text style={{ fontFamily: "Effra_Rg", fontSize: 16, color: DARK }}>Ingresa tu actual contraseña seguido de la nueva  y confírmala.</Text>

                {/* Current password */}
                <View>
                    <TextField
                        label="Contraseña actual"
                        error={errorActualPassword}
                        secureTextEntry={showactualPassword}
                        value={actualPassword}
                        onChangeText={actualPassword => change_ActualPassword(actualPassword)}
                        onSubmitEditing={() => ref_textinput_NewPassword.current.focus()}
                        blurOnSubmit={false}
                    ></TextField>
                    <TouchableOpacity
                        onPress={() => setshowactualPassword(!showactualPassword)}
                        style={{
                            position: 'absolute',
                            height: 35,
                            width: 30,
                            right: 1,
                            marginTop: 34,
                            marginRight: 14
                        }}>
                        <Image source={showactualPassword ? require('../assets/NewPassword/EyeCloseIcon.png') : require('../assets/Login/EyeOpenIcon.png')}></Image>
                    </TouchableOpacity>
                </View>

                {/* New Password */}
                <View>
                    <TextField
                        label="Nueva contraseña"
                        error={errorNewPassword}
                        secureTextEntry={shownewPassword}
                        value={newPassword}
                        onChangeText={newPassword => change_NewPassword(newPassword)}
                        ref={ref_textinput_NewPassword}
                        onSubmitEditing={() => ref_textinput_VerificationPassword.current.focus()}
                        blurOnSubmit={false}
                    ></TextField>
                    <TouchableOpacity
                        onPress={() => setshowNewPassword(!shownewPassword)}
                        style={{
                            position: 'absolute',
                            height: 35,
                            width: 30,
                            right: 1,
                            marginTop: 34,
                            marginRight: 14
                        }}>
                        <Image source={shownewPassword ? require('../assets/NewPassword/EyeCloseIcon.png') : require('../assets/Login/EyeOpenIcon.png')}></Image>
                    </TouchableOpacity>
                </View>

                {/* Confirm new password */}
                <View>
                    <TextField
                        label="Confirmar nueva contraseña"
                        error={errorVerificationPassword}
                        secureTextEntry={showverificationPassword}
                        value={verificationPassword}
                        onChangeText={verificationPassword => change_VerificationPassword(verificationPassword)}
                        ref={ref_textinput_VerificationPassword}
                    ></TextField>
                    <TouchableOpacity
                        onPress={() => setshowVerificationPassword(!showverificationPassword)}
                        style={{
                            position: 'absolute',
                            height: 35,
                            width: 30,
                            right: 1,
                            marginTop: 34,
                            marginRight: 14
                        }}>
                        <Image source={showverificationPassword ? require('../assets/NewPassword/EyeCloseIcon.png') : require('../assets/Login/EyeOpenIcon.png')}></Image>
                    </TouchableOpacity>
                </View>

                {/* Save button */}
                <TouchableOpacity
                    onPress={() => Confirm(user, navigation)}
                    style={{
                        backgroundColor: PRIMARY_BLUE,
                        alignSelf: 'center',
                        width: 310,
                        height: 52,
                        marginTop: 18,
                        marginBottom: 20,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text style={{ color: 'white' }}>Confirmar</Text>
                </TouchableOpacity>
            </View>

            {/* Title */}
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
