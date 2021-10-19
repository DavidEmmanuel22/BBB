import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableOpacity } from 'react-native';
import { View, StatusBar, StyleSheet, Text } from 'react-native';
import { GRAY2, PRIMARY_BLUE, WHITE, DARK, LIGHTER_GRAY2, BLUE } from '../constants/colors';
import Container from '../components/Container';
import { ScrollView } from 'react-native-gesture-handler';
import Button, { BUTTONTYPE } from '../components/Button';
import IconGeneric from '../components/IconGeneric';
import { getHeight } from '../utils/interfaceDimentions';

type HeaderProps = {
  onPress?: () => void;
};
const Header = ({ onPress }: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onPress} style={styles.iconLeft}>
        <FontAwesomeIcon style={styles.icon} icon="arrow-left" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Mis Direcciones</Text>
    </View>
  );
};
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
      fontSize: 16,
      marginTop: -50,
      marginHorizontal: 0,
      textAlign: 'center',
    },
    textTypeBlue: {
      fontFamily: 'Effra_Rg',
      color: GRAY2,
      fontSize: 16,
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
      <Header />
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
const styles = StyleSheet.create({
  containetStyle: {
    paddingLeft: 0,
    paddingRight: 0,
    margin: 0,
  },
  headerContainer: {
    position: 'relative',
    height: getHeight(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BLUE,
  },
  iconLeft: {
    position: 'absolute',
    left: 25,
  },
  icon: {
    color: 'white',
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'TerminaW05-Bold',
    color: 'white',
  },
});
