import { ScrollView, View, StyleSheet, StatusBar, TouchableOpacity, Image, Text } from 'react-native';
import React, { useRef } from 'react';

import Container from '../components/Container';
import SocialButtons from '../components/SocialButtons';
import LoginRegisterDisclaimer from '../components/LoginRegisterDisclaimer';
import { TextField } from 'rn-material-ui-textfield';
import { DARKER_BLUE, PRIMARY_BLUE } from '../constants/colors';
import { RegisterController } from '../controllers/RegisterController';

const Register: React.FC = () => {

  //Obteniendo los metodos ultilizados en Controller
  const {
    nombre,
    apellidos,
    email,
    password,
    nombreError,
    apellidosError,
    emailError,
    passwordError,
    showPassword,
    change_Nombre,
    change_Apellidos,
    change_Email,
    change_Password,
    change_ShowPassword,
    Continuar
  } = RegisterController();

  //Referencias
  const ref_textinput_Apellidos = useRef();
  const ref_textinput_Email = useRef();
  const ref_textinput_Password = useRef();

  return (

    <ScrollView
      contentContainerStyle={styles.container}
      contentInsetAdjustmentBehavior="automatic">

      <Container>

        {/* Cambio de color de Status bar */}
        <StatusBar
          backgroundColor="white" />

        {/* Titulo "crear cuenta" */}
        <Text style={{
          alignSelf: 'center',
          fontFamily: "TerminaW05-Bold",
          color: DARKER_BLUE,
          fontSize: 22,
          marginTop: 10
        }}>
          crear cuenta
        </Text>

        {/* Entradas de texto */}
        <View style={styles.inputsContainer}>

          {/* Entrada de texto de Nombre */}
          <TextField
            label="Nombre"
            error={nombreError}
            value={nombre}
            onChangeText={nombre => change_Nombre(nombre)}
            onSubmitEditing={() => ref_textinput_Apellidos.current.focus()}
            blurOnSubmit={false}></TextField>

          {/* Entrada de texto de Apellidos */}
          <TextField
            label="Apellidos"
            error={apellidosError}
            value={apellidos}
            onChangeText={apellidos => change_Apellidos(apellidos)}
            ref={ref_textinput_Apellidos}
            onSubmitEditing={() => ref_textinput_Email.current.focus()}
            blurOnSubmit={false}></TextField>

          {/* Entrada de texto de Correo electrónico */}
          <TextField
            label="Correo electrónico"
            error={emailError}
            value={email}
            onChangeText={email => change_Email(email)}
            keyboardType="email-address"
            ref={ref_textinput_Email}
            onSubmitEditing={() => ref_textinput_Password.current.focus()}
            blurOnSubmit={false}></TextField>

          {/* Entrada de texto de Contraseña */}
          <View>
            <TextField
              label="Contraseña"
              error={passwordError}
              value={password}
              onChangeText={password => change_Password(password)}
              secureTextEntry={showPassword}
              ref={ref_textinput_Password}
              style={{
                marginRight:48
              }}></TextField>
            <TouchableOpacity
              onPress={change_ShowPassword}
              style={{
                position: 'absolute',
                height:30,
                width:40,
                right: 1,
                marginTop: 34
              }}>
              <Image source={showPassword ? require('../assets/Login/EyeOpenIcon.png') : require('../assets/Login/EyeIcon.png')}></Image>
            </TouchableOpacity>
          </View>

        </View>

        {/* Boton Continuar */}
        <View style={{
          alignItems: 'center'
        }}>
          <TouchableOpacity
            onPress={Continuar}
            style={{
              backgroundColor: PRIMARY_BLUE,
              width: "100%",
              height: 50,
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                color: "white"
              }}>Continuar</Text>
          </TouchableOpacity>

        </View>

        {/* Botones de Facebook/AppleID/Google */}
        <SocialButtons />

        {/* Texto de politicas de privacidad */}
        <LoginRegisterDisclaimer parent="register" />

      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
  },
  inputsContainer: {
    marginTop: 12,
    marginBottom: 24,
  },
  buttonsContainer: {},
});

export default Register;
