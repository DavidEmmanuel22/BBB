import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationProp} from '@react-navigation/core';

import Container from '../components/Container';
import Title from '../components/Title';
import Input from '../components/Input';
import Button, {BUTTONTYPE} from '../components/Button';
import SocialButtons from '../components/SocialButtons';
import Text from '../components/Text';
import Icon from '../components/Icon';
import LoginRegisterDisclaimer from '../components/LoginRegisterDisclaimer';
import {GRAY} from '../constants/colors';

interface IProps {
  navigation: NavigationProp<any, any>;
}

const Login: React.FC<IProps> = ({navigation}) => {
  return (
    <Container scroll={true}>
      <Title>inicia sesión</Title>

      <View style={styles.inputsContainer}>
        <Input
          placeholder="Correo electrónico"
          keyboardType="email-address"
          startIcon={() => <Icon name="user-icon" size={17} color={GRAY} />}
        />
        <Input
          placeholder="Contraseña"
          secureTextEntry={true}
          startIcon={() => <Icon name="key-icon" size={14} color={GRAY} />}
          endIcon={() => (
            <Icon name="eye-icon" size={18} color={GRAY} onPress={() => {}} />
          )}
        />

        <View style={styles.forgotPasswordContainer}>
          <Text onPress={() => {}}>Recuperar contraseña</Text>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          title="Iniciar sesión"
          onPress={() => navigation.navigate('MyAccount')}
        />
        <Button
          title="Crear cuenta"
          onPress={() => navigation.navigate('Register')}
          type={BUTTONTYPE.SECONDARY}
        />
      </View>

      <SocialButtons />

      <LoginRegisterDisclaimer parent="login" />
    </Container>
  );
};

const styles = StyleSheet.create({
  inputsContainer: {
    marginTop: 24,
    marginBottom: 24,
  },
  buttonsContainer: {},
  forgotPasswordContainer: {
    alignItems: 'flex-end',
  },
});

export default Login;
