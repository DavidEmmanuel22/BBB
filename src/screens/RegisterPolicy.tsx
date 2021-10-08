import { NavigationProp, RouteProp } from '@react-navigation/core';
import React from 'react';
import { Image, StatusBar, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

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
      <Text style={styles.title}>crear cuenta</Text>

      {/* Arrow icon */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrowIcon}>
        <Image source={require('../assets/Profile/ArrowIcon.png')} />
      </TouchableOpacity>

      {/* X icon */}
      <TouchableOpacity style={styles.xIcon} onPress={() => navigation.goBack()}>
        <Image source={require('../assets/NewPassword/XIcon.png')} />
      </TouchableOpacity>

      {/* Page content */}
      <View style={styles.container}>
        {/* Upper text */}
        <Text style={styles.upperText}>Para continuar es necesario aceptar las políticas de privacidad.</Text>

        {/* Privacy policies */}
        <View style={styles.switchPrivacyContainer}>
          <Text style={styles.switchPrivacyText}>Políticas de Privacidad</Text>

          <Switch
            value={politicasSwitch}
            onValueChange={() => setPoliticasSwitch(!politicasSwitch)}
            trackColor={{ false: RED, true: GREEN }}
            thumbColor="white"
            style={styles.switchPrivacy}
          />
        </View>

        {/* Receive promotions */}
        <View style={styles.switchPromotionsContainer}>
          <Text style={styles.switchPromotionsText}>Recibir promociones</Text>

          <Switch
            value={promocionesSwitch}
            onValueChange={() => setPromocionesSwitch(!promocionesSwitch)}
            trackColor={{ false: RED, true: GREEN }}
            thumbColor="white"
            style={styles.switchPromotions}
          />
        </View>

        {/* Continue button */}
        <View style={[styles.btnContinueContainer, politicasSwitch ? { opacity: 1 } : { opacity: 0.3 }]}>
          <TouchableOpacity
            onPress={() => {
              Continue(customer, navigation);
            }}
            disabled={!politicasSwitch}
            style={styles.btnContinue}
          >
            <Text style={styles.btnContinueText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    position: 'absolute',
    alignSelf: 'center',
    fontFamily: 'TerminaW05-Bold',
    color: DARKER_BLUE,
    fontSize: 22,
    marginTop: 19,
  },
  arrowIcon: {
    position: 'absolute',
    marginTop: 26,
    marginLeft: 24,
    width: '20%',
    height: 25,
  },
  xIcon: {
    marginTop: 26,
    marginRight: 24,
    position: 'absolute',
    right: 1,
  },
  container: {
    marginHorizontal: 23,
    justifyContent: 'center',
    height: '100%',
  },
  upperText: {
    fontFamily: 'Effra_Rg',
    fontSize: 16,
    color: DARK,
  },
  switchPrivacyContainer: {
    marginVertical: 30,
    flexDirection: 'row',
  },
  switchPrivacyText: {
    fontFamily: 'Effra_Rg',
    fontSize: 16,
    textDecorationLine: 'underline',
    color: DARK,
  },
  switchPrivacy: {
    position: 'absolute',
    right: 1,
    marginRight: 10,
  },
  switchPromotionsContainer: {
    flexDirection: 'row',
  },
  switchPromotionsText: {
    fontFamily: 'Effra_Rg',
    fontSize: 16,
    color: DARK,
  },
  switchPromotions: {
    position: 'absolute',
    right: 1,
    marginRight: 10,
  },
  btnContinueContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  btnContinueText: {
    textAlign: 'center',
    color: 'white',
  },
  btnContinue: {
    backgroundColor: PRIMARY_BLUE,
    width: '100%',
    height: 50,
    justifyContent: 'center',
  },
});
