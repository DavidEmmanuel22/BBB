/* eslint-disable react-hooks/exhaustive-deps */
import { NavigationProp, RouteProp } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { Image, View, ScrollView, StatusBar } from 'react-native';
import Text from '../components/Text';
import { DARKER_BLUE, PRIMARY_BLUE } from '../constants/colors';
import { TextField } from 'rn-material-ui-textfield';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { User } from '../models/Objects/User';
import { ProfileController } from '../controllers/ProfileController';
import useAuthContext from '../context/AuthContext';

interface IProps {
  navigation: NavigationProp<any, any>;
}

export const Profile: React.FC<IProps> = ({ navigation }) => {
  
  const { user }: any = useAuthContext();

  const {
    name,
    setName,
    lastname,
    setLastName,
    email,
    setEmail,
    nameError,
    lastnameError,
    emailError,
    saveClicked,
    ChangePassword,
    Save,
  } = ProfileController();

  useEffect(() => {
    setName(user?.firstname);
    setLastName(user?.lastname);
    setEmail(user?.email);
  }, [])

  return (
    <View pointerEvents={saveClicked ? 'none' : 'auto'} style={[{}, saveClicked ? { opacity: 0.3 } : { opacity: 1 }]}>
      {/* Status bar color change */}
      <StatusBar animated={true} backgroundColor="white" />

      {/*
        The following Scroll View contains the entire view
        except for the arrow icon and the title of the view
      */}
      <ScrollView>
        {/* Personal information */}
        <Text style={{ marginTop: 75, marginLeft: 24, color: PRIMARY_BLUE }}>Informacion personal</Text>

        {/* Name */}
        <View style={{ marginHorizontal: 24 }}>
          <TextField error={nameError} label="Nombre" value={name} onChangeText={(name) => setName(name)} />
        </View>

        {/* Lastname */}
        <View style={{ marginHorizontal: 24 }}>
          <TextField
            error={lastnameError}
            label="Apellido"
            value={lastname}
            onChangeText={(lastname) => setLastName(lastname)}
          />
        </View>

        {/* Email */}
        <View style={{ marginHorizontal: 24 }}>
          <TextField
            error={emailError}
            label="Correo electrónico"
            keyboardType="email-address"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        {/* My interests */}
        <Text style={{ marginTop: 18, marginLeft: 24, color: PRIMARY_BLUE }}>Mis intereses</Text>

        {/* Bathroom Checkbox */}
        <BouncyCheckbox
          size={20}
          text="Baño"
          unfillColor="white"
          textStyle={{
            fontFamily: 'Effra_Rg',
            color: 'black',
            textDecorationLine: 'none',
          }}
          onPress={() => {}}
          style={{ marginLeft: 24, marginTop: 10 }}
        />

        {/* Kitchen Checkbox */}
        <BouncyCheckbox
          size={20}
          text="Cocina"
          unfillColor="white"
          textStyle={{
            fontFamily: 'Effra_Rg',
            color: 'black',
            textDecorationLine: 'none',
          }}
          onPress={() => {}}
          style={{ marginLeft: 24 }}
        />

        {/* Personal Care Checkbox */}
        <BouncyCheckbox
          size={20}
          text="Ciudado personal"
          unfillColor="white"
          textStyle={{
            fontFamily: 'Effra_Rg',
            color: 'black',
            textDecorationLine: 'none',
          }}
          onPress={() => {}}
          style={{ marginLeft: 24 }}
        />

        {/* Decoration Checkbox */}
        <BouncyCheckbox
          size={20}
          text="Decoración"
          unfillColor="white"
          textStyle={{
            fontFamily: 'Effra_Rg',
            color: 'black',
            textDecorationLine: 'none',
          }}
          onPress={() => {}}
          style={{ marginLeft: 24 }}
        />

        {/* Pet checkbox travel and more */}
        <BouncyCheckbox
          size={20}
          text="Mascotas viajes y más"
          unfillColor="white"
          textStyle={{
            fontFamily: 'Effra_Rg',
            color: 'black',
            textDecorationLine: 'none',
          }}
          onPress={() => {}}
          style={{ marginLeft: 24 }}
        />

        {/* Bedroom Checkbox */}
        <BouncyCheckbox
          size={20}
          text="Recámara"
          unfillColor="white"
          textStyle={{
            fontFamily: 'Effra_Rg',
            color: 'black',
            textDecorationLine: 'none',
          }}
          onPress={() => {}}
          style={{ marginLeft: 24 }}
        />

        {/* Organization and cleaning checkbox */}
        <BouncyCheckbox
          size={20}
          text="Organización y limpieza"
          unfillColor="white"
          textStyle={{
            fontFamily: 'Effra_Rg',
            color: 'black',
            textDecorationLine: 'none',
          }}
          onPress={() => {}}
          style={{ marginLeft: 24 }}
        />

        {/* Outlet Zone Checkbox */}
        <BouncyCheckbox
          size={20}
          text="Zona outlet"
          unfillColor="white"
          textStyle={{
            fontFamily: 'Effra_Rg',
            color: 'black',
            textDecorationLine: 'none',
          }}
          onPress={() => {}}
          style={{ marginLeft: 24 }}
        />

        {/* Change password button */}
        <TouchableOpacity
          style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 30 }}
          onPress={() => ChangePassword(user, navigation)}
        >
          <Image source={require('../assets/Profile/LockIcon.png')} />
          <Text style={{ marginLeft: 10 }}>Cambiar contraseña</Text>
        </TouchableOpacity>

        {/* Save button */}
        <TouchableOpacity
          onPress={() => {
            Save(user);
          }}
          style={{
            backgroundColor: PRIMARY_BLUE,
            alignSelf: 'center',
            width: 303,
            height: 52,
            marginTop: 18,
            marginBottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white' }}>Guardar</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Titulo */}
      <View
        style={{
          width: '100%',
          height: 60,
          position: 'absolute',
          backgroundColor: 'white',
        }}
      >
        {/* Icono de flecha */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginTop: 24, marginLeft: 24, width: '20%', height: 25 }}
        >
          <Image source={require('../assets/Profile/ArrowIcon.png')} />
        </TouchableOpacity>

        {/* Titulo de la pantalla */}
        <Text
          style={{
            fontFamily: 'TerminaW05-Bold',
            fontSize: 20,
            position: 'absolute',
            alignSelf: 'center',
            marginTop: 20,
            color: DARKER_BLUE,
          }}
        >
          mi perfil
        </Text>
      </View>
    </View>
  );
};
