import React, { useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';
import { NavigationProp } from '@react-navigation/core';

import SocialButtons from '../components/SocialButtons';
import LoginRegisterDisclaimer from '../components/LoginRegisterDisclaimer';
import { DARKER_BLUE, LIGHTER_GRAY4, GRAY, PRIMARY_BLUE, LIGHTER_GRAY2 } from '../constants/colors';
import { LoginController } from '../controllers/LoginController';
import { ScrollView } from 'react-native-gesture-handler';

interface IProps {
  navigation: NavigationProp<any, any>;
}

const Login: React.FC<IProps> = ({ navigation }) => {
  //Obtaining the methods used in Controller
  const { email, change_Email, password, change_Password, showPassword, change_ShowPassword, LogInCLicked, LogIn } =
    LoginController();

  //References
  const ref_textinput_password = useRef();

  return (
    <ScrollView>
      {/* Status bar color change */}
      <StatusBar animated={true} backgroundColor="white" />

      {/* Title */}
      <Text
        style={[
          {
            fontFamily: 'TerminaW05-Bold',
            color: DARKER_BLUE,
            fontSize: 24,
            marginTop: 24,
            marginHorizontal: 30,
          },
          LogInCLicked ? { opacity: 0.2 } : { opacity: 1 },
        ]}
      >
        inicia sesión
      </Text>

      {/* Text input Email */}
      <View
        style={[
          {
            marginTop: 26,
          },
          LogInCLicked ? { opacity: 0.2 } : { opacity: 1 },
        ]}
        pointerEvents={LogInCLicked ? 'none' : 'auto'}
      >
        <TextInput
          placeholder="Correo electrónico"
          keyboardType="email-address"
          placeholderTextColor={GRAY}
          value={email}
          onChangeText={(email) => change_Email(email)}
          onSubmitEditing={() => ref_textinput_password.current.focus()}
          blurOnSubmit={false}
          style={{
            borderRadius: 200,
            backgroundColor: 'white',
            color: 'black',
            marginLeft: 50,
            marginRight: 30,
            fontSize: 16,
            height: 40,
          }}
        />

        <View
          style={[
            {
              backgroundColor: LIGHTER_GRAY4,
              height: 1,
              marginHorizontal: 30,
            },
            email ? { backgroundColor: PRIMARY_BLUE } : { backgroundColor: LIGHTER_GRAY4 },
          ]}
        />

        <Image
          style={{
            position: 'absolute',
            left: 1,
            marginTop: 10,
            marginLeft: 30,
          }}
          source={email ? require('../assets/Login/UserBLACKIcon.png') : require('../assets/Login/UserIcon.png')}
        />
      </View>

      {/* Text entry Password */}
      <View
        style={[
          {
            marginTop: 26,
          },
          LogInCLicked ? { opacity: 0.2 } : { opacity: 1 },
        ]}
        pointerEvents={LogInCLicked ? 'none' : 'auto'}
      >
        <TextInput
          placeholder="Contraseña"
          placeholderTextColor={GRAY}
          value={password}
          onChangeText={(password) => change_Password(password)}
          secureTextEntry={showPassword}
          ref={ref_textinput_password}
          style={{
            borderRadius: 200,
            backgroundColor: 'white',
            color: 'black',
            marginLeft: 52,
            marginRight: 65,
            fontSize: 16,
            height: 40,
          }}
        />

        <View
          style={[
            {
              backgroundColor: LIGHTER_GRAY4,
              height: 1,
              marginHorizontal: 30,
            },
            password ? { backgroundColor: PRIMARY_BLUE } : { backgroundColor: LIGHTER_GRAY4 },
          ]}
        />

        <Image
          style={{
            position: 'absolute',
            left: 1,
            marginTop: 10,
            marginLeft: 30,
          }}
          source={password ? require('../assets/Login/KeyBLACKIcon.png') : require('../assets/Login/KeyIcon.png')}
        />

        <TouchableOpacity
          onPress={change_ShowPassword}
          style={{
            position: 'absolute',
            right: 1,
            marginTop: 10,
            marginRight: 30,
            height: 30,
            width: 30,
          }}
        >
          <Image
            source={showPassword ? require('../assets/Login/EyeOpenIcon.png') : require('../assets/Login/EyeIcon.png')}
          />
        </TouchableOpacity>
      </View>

      {/* Boton de recuperar contraseña */}
      <TouchableOpacity
        style={{
          alignSelf: 'flex-end',
          marginRight: 30,
          marginTop: 8,
        }}
        disabled={LogInCLicked}
      >
        <Text
          style={[
            {
              fontFamily: 'Effra_Rg',
              fontSize: 16,
            },
            LogInCLicked ? { opacity: 0.2 } : { opacity: 1 },
          ]}
        >
          Recuperar contraseña
        </Text>
      </TouchableOpacity>

      <View
        style={{
          marginHorizontal: 30,
          marginTop: 18,
          alignItems: 'center',
        }}
        pointerEvents={LogInCLicked ? 'none' : 'auto'}
      >
        {/* Boton de iniciar sesion */}
        <TouchableOpacity
          onPress={() => LogIn(navigation)}
          style={{
            backgroundColor: PRIMARY_BLUE,
            width: '100%',
            height: 50,
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
            }}
          >
            {LogInCLicked ? 'Ingresando...' : 'Iniciar sesión'}
          </Text>
        </TouchableOpacity>
        {/* Boton de crear cuenta */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={[
            {
              backgroundColor: 'white',
              borderWidth: 1,
              width: '100%',
              height: 50,
              justifyContent: 'center',
              marginTop: 10,
            },
            LogInCLicked ? { borderColor: LIGHTER_GRAY4 } : { borderColor: LIGHTER_GRAY2 },
          ]}
        >
          <Text
            style={[
              {
                textAlign: 'center',
              },
              LogInCLicked ? { color: LIGHTER_GRAY2 } : { color: PRIMARY_BLUE },
            ]}
          >
            Crear cuenta
          </Text>
        </TouchableOpacity>
      </View>

      {/* Facebook/AppleID/Google Buttons*/}
      <View
        style={[
          {
            marginHorizontal: 30,
          },
          LogInCLicked ? { opacity: 0.2 } : { opacity: 1 },
        ]}
        pointerEvents={LogInCLicked ? 'none' : 'auto'}
      >
        <SocialButtons />
      </View>

      {/* Privacy policy text */}
      <View style={[LogInCLicked ? { opacity: 0.2 } : { opacity: 1 }]} pointerEvents={LogInCLicked ? 'none' : 'auto'}>
        <LoginRegisterDisclaimer parent="login" />
      </View>
    </ScrollView>
  );
};

export default Login;
