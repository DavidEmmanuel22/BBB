import { NavigationProp, RouteProp } from '@react-navigation/core';
import React from 'react';
import { Image, StatusBar, Switch, Text, TouchableOpacity, View } from 'react-native';

import { DARK, DARKER_BLUE, GREEN, PRIMARY_BLUE, RED } from '../constants/colors';
import { Customer } from '../models/Objects/Customer';
import { RegisterPolicyController } from '../controllers/RegisterPolicyController';

interface IProps {
  route: RouteProp<any, any>;
  navigation: NavigationProp<any, any>;
}

export const RegisterPolicy: React.FC<IProps> = ({ route, navigation }) => {
  let customer: Customer = route?.params?.customer;

  const { politicasSwitch, setPoliticasSwitch, promocionesSwitch, setPromocionesSwitch, Continue } =
    RegisterPolicyController();

  return (
    <View>
      {/* Status bar color change */}
      <StatusBar animated={true} backgroundColor="white" />

      {/* Title "crear cuenta" */}
      <Text
        style={{
          position: 'absolute',
          alignSelf: 'center',
          fontFamily: 'TerminaW05-Bold',
          color: DARKER_BLUE,
          fontSize: 22,
          marginTop: 19,
        }}
      >
        crear cuenta
      </Text>

      {/* Arrow icon */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          marginTop: 26,
          marginLeft: 24,
          width: '20%',
          height: 25,
        }}
      >
        <Image source={require('../assets/Profile/ArrowIcon.png')} />
      </TouchableOpacity>

      {/* X icon */}
      <TouchableOpacity
        style={{
          marginTop: 26,
          marginRight: 24,
          position: 'absolute',
          right: 1,
        }}
        onPress={() => navigation.goBack()}
      >
        <Image source={require('../assets/NewPassword/XIcon.png')} />
      </TouchableOpacity>

      {/* Page content */}
      <View
        style={{
          marginHorizontal: 23,
          justifyContent: 'center',
          height: '100%',
        }}
      >
        {/* Upper text */}
        <Text
          style={{
            fontFamily: 'Effra_Rg',
            fontSize: 16,
            color: DARK,
          }}
        >
          Para continuar es necesario aceptar las políticas de privacidad.
        </Text>

        {/* Privacy policies */}
        <View
          style={{
            marginVertical: 30,
            flexDirection: 'row',
          }}
        >
          <Text
            style={{
              fontFamily: 'Effra_Rg',
              fontSize: 16,
              textDecorationLine: 'underline',
              color: DARK,
            }}
          >
            Políticas de Privacidad
          </Text>

          <Switch
            value={politicasSwitch}
            onValueChange={() => setPoliticasSwitch(!politicasSwitch)}
            trackColor={{ false: RED, true: GREEN }}
            thumbColor="white"
            style={{
              position: 'absolute',
              right: 1,
              marginRight: 10,
            }}
          />
        </View>

        {/* Receive promotions */}
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <Text
            style={{
              fontFamily: 'Effra_Rg',
              fontSize: 16,
              color: DARK,
            }}
          >
            Recibir promociones
          </Text>

          <Switch
            value={promocionesSwitch}
            onValueChange={() => setPromocionesSwitch(!promocionesSwitch)}
            trackColor={{ false: RED, true: GREEN }}
            thumbColor="white"
            style={{
              position: 'absolute',
              right: 1,
              marginRight: 10,
            }}
          />
        </View>

        {/* Continue button */}
        <View
          style={[
            {
              marginTop: 30,
              alignItems: 'center',
            },
            politicasSwitch ? { opacity: 1 } : { opacity: 0.3 },
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              Continue(customer, navigation);
            }}
            disabled={!politicasSwitch}
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
              Continuar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
