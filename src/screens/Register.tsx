import { ScrollView, View, StyleSheet, StatusBar } from 'react-native';
import React from 'react';

import Container from '../components/Container';
import Title, {HEADING, POSITION} from '../components/Title';
import Input from '../components/Input';
import Button from '../components/Button';
import SocialButtons from '../components/SocialButtons';
import LoginRegisterDisclaimer from '../components/LoginRegisterDisclaimer';

const Register: React.FC = () => {
  return (
    
    <ScrollView
      contentContainerStyle={styles.container}
      contentInsetAdjustmentBehavior="automatic">
      <Container>
        <Title heading={HEADING.H2} position={POSITION.CENTER}>
          crear cuenta
        </Title>
      <StatusBar
        backgroundColor="white" />

        <View style={styles.inputsContainer}>
          <Input label="Nombre" />
          <Input label="Apellidos" />
          <Input label="Correo electrónico" keyboardType="email-address" />
          <Input label="Contraseña" secureTextEntry={true} />
        </View>

        <View style={styles.buttonsContainer}>
          <Button title="Continuar" onPress={() => {}} />
        </View>

        <SocialButtons />

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
    marginTop: 24,
    marginBottom: 24,
  },
  buttonsContainer: {},
});

export default Register;
