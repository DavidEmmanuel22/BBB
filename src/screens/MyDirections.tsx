import React from 'react';
import { View, StatusBar, StyleSheet, Text } from 'react-native';
import { GRAY2, PRIMARY_BLUE, WHITE, DARK, LIGHTER_GRAY2 } from '../constants/colors';
import Container from '../components/Container';
import { ScrollView } from 'react-native-gesture-handler';
import Button, { BUTTONTYPE } from '../components/Button';
import IconGeneric from '../components/IconGeneric';

const MyDirections: React.FC = () => {
  const styles = StyleSheet.create({
    filterButton: {
      height: 36,
    },
    iconButton: {
      marginTop: 75,
    },
    deleteButtonText: {
      color: PRIMARY_BLUE,
      fontFamily: 'Effra-Regular',
      fontWeight: '400',
      marginLeft: -80,
    },
    filterButtonText: {
      color: WHITE,
      fontFamily: 'Effra-Regular',
      fontWeight: '400',
    },
    textTypeBlueDark: {
      fontFamily: 'TerminaW05-Bold',
      color: DARK,
      fontSize: 20,
      marginTop: -50,
      marginHorizontal: 0,
      textAlign: 'center',
    },
    textTypeBlue: {
      fontFamily: 'Effra_Rg',
      color: GRAY2,
      fontSize: 18,
      marginTop: 18,
      marginHorizontal: 0,
      textAlign: 'center',
    },
    line: {
      borderBottomColor: PRIMARY_BLUE,
      borderBottomWidth: 1,
    },
    icon: {
      marginLeft: 130,
      marginTop: 200,
    },
  });

  return (
    <ScrollView>
      <Container>
        <StatusBar animated={true} backgroundColor="white" />
        <View style={styles.icon}>
          <IconGeneric name={'directions'} iconColor={LIGHTER_GRAY2} width={100} height={100} />
        </View>

        <Text style={styles.textTypeBlueDark}>Aun no tienes direcciones guardadas</Text>
        <Text style={styles.textTypeBlue}>Puedes agregar cuantas direcciones necesites o prefieras</Text>

        <Button
          title="Agregar dirección"
          onPress={() => {}}
          type={BUTTONTYPE.PRIMARY}
          containerStyle={styles.filterButton}
          textStyle={styles.filterButtonText}
        />
      </Container>
    </ScrollView>
  );
};

export default MyDirections;
