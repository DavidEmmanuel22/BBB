import React from 'react';
import { View, Dimensions } from 'react-native';

import Text from '../components/Text';
import { GRAY2 } from '../constants/colors';

interface IProps {
  parent: string;
}

const LoginRegisterDisclaimer: React.FC<IProps> = ({ parent }) => (
  <View
    style={{
      alignItems: 'center',
      marginTop: Dimensions.get('window').height - (parent === 'login' ? 700 : 720),
    }}
  >
    <Text color={GRAY2} size={14}>
      Al iniciar sesión o registrarte aceptas las
    </Text>
    <Text size={14}>Políticas de Privacidad</Text>
  </View>
);

export default LoginRegisterDisclaimer;
