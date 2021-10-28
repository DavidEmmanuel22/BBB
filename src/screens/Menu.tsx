import { NavigationProp } from '@react-navigation/core';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import Container from '../components/Container';

interface IProps {
  navigation: NavigationProp<any, any>
}

const Menu: React.FC<IProps> = ({ navigation }) => {
  return (
    <Container>
      <Text>Menú</Text>
      <TouchableOpacity onPress={() => navigation.navigate('PaymentMethodsAndRefunds')}>
        <Text>Métodos de pago y reembolsos</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Menu;
