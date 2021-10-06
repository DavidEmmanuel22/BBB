import { ScrollView, View, StyleSheet, StatusBar, TouchableOpacity, Image, Text } from 'react-native';
import React, { useRef } from 'react';

import Container from '../components/Container';
import SocialButtons from '../components/SocialButtons';
import LoginRegisterDisclaimer from '../components/LoginRegisterDisclaimer';
import { TextField } from 'rn-material-ui-textfield';
import { DARKER_BLUE, PRIMARY_BLUE } from '../constants/colors';
import { RegisterController } from '../controllers/RegisterController';
import { NavigationProp } from '@react-navigation/core';

interface IProps {
  navigation: NavigationProp<any, any>;
}

const Register: React.FC<IProps> = ({ navigation }) => {
  //Obtaining the methods used in Controller
  const {
    name,
    lastname,
    email,
    password,
    nameError,
    lastnameError,
    emailError,
    passwordError,
    showPassword,
    change_Name,
    change_Lastname,
    change_Email,
    change_Password,
    change_ShowPassword,
    Continue,
  } = RegisterController();

  //References
  const ref_textinput_Lastname = useRef<any>();
  const ref_textinput_Email = useRef<any>();
  const ref_textinput_Password = useRef<any>();

  return (
    <ScrollView contentContainerStyle={styles.container} contentInsetAdjustmentBehavior="automatic">
      <Container>
        {/* Status bar color change */}
        <StatusBar backgroundColor="white" />

        {/* Title "crear cuenta" */}
        <Text
          style={styles.Title}
        >
          crear cuenta
        </Text>

        {/* Text inputs */}
        <View style={styles.inputsContainer}>
          {/* Text input Nombre */}
          <TextField
            label="Nombre"
            error={nameError}
            value={name}
            onChangeText={(name) => change_Name(name)}
            onSubmitEditing={() => ref_textinput_Lastname?.current?.focus()}
            blurOnSubmit={false}
          />

          {/* Text input Apellidos */}
          <TextField
            label="Apellidos"
            error={lastnameError}
            value={lastname}
            onChangeText={(lastname) => change_Lastname(lastname)}
            ref={ref_textinput_Lastname}
            onSubmitEditing={() => ref_textinput_Email?.current?.focus()}
            blurOnSubmit={false}
          />

          {/* Text input Correo electrónico */}
          <TextField
            label="Correo electrónico"
            error={emailError}
            value={email}
            onChangeText={(email) => change_Email(email)}
            keyboardType="email-address"
            ref={ref_textinput_Email}
            onSubmitEditing={() => ref_textinput_Password?.current?.focus()}
            blurOnSubmit={false}
          />

          {/* Text input Contraseña */}
          <View>
            <TextField
              label="Contraseña"
              error={passwordError}
              value={password}
              onChangeText={(password) => change_Password(password)}
              secureTextEntry={showPassword}
              ref={ref_textinput_Password}
              style={{
                marginRight: 48,
              }}
            />
            <TouchableOpacity
              onPress={change_ShowPassword}
              style={styles.passwordIcon}
            >
              <Image
                source={
                  showPassword ? require('../assets/Login/EyeOpenIcon.png') : require('../assets/Login/EyeIcon.png')
                }
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Button Continuar */}
        <View
          style={styles.btnContinueContainer}
        >
          <TouchableOpacity
            onPress={() => Continue(navigation)}
            style={styles.btnContinue}
          >
            <Text
              style={styles.btnTextContinue}
            >
              Continuar
            </Text>
          </TouchableOpacity>
        </View>

        {/* Facebook/AppleID/Google Buttons */}
        <SocialButtons />

        {/* Privacy policy text */}
        <LoginRegisterDisclaimer parent="register" />
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
  },
  Title:{
    alignSelf: 'center',
    fontFamily: 'TerminaW05-Bold',
    color: DARKER_BLUE,
    fontSize: 22,
    marginTop: 10,
  },
  inputsContainer: {
    marginTop: 12,
    marginBottom: 24,
  },
  passwordIcon:{
    position: 'absolute',
    height: 30,
    width: 40,
    right: 1,
    marginTop: 34,
  },
  btnContinueContainer:{
    alignItems: 'center',
  },
  btnContinue:{
    backgroundColor: PRIMARY_BLUE,
    width: '100%',
    height: 50,
    justifyContent: 'center',
  },
  btnTextContinue:{
    textAlign: 'center',
    color: 'white',
  }
});

export default Register;
