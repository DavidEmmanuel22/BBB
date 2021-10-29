import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableOpacity } from 'react-native';
import { View, StatusBar, StyleSheet, Text } from 'react-native';
import { GRAY2, PRIMARY_BLUE, WHITE, DARK, BLUE } from '../constants/colors';
import Button, { BUTTONTYPE } from '../components/Button';
import IconGeneric from '../components/IconGeneric';
import { getHeight } from '../utils/interfaceDimentions';
import { DirectionsController } from '../controllers/DirectionsController';
import { DirectionsModel } from '../models/DirectionsModel';
import ListDirection from '../components/Direction/ListDirection';

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
  const { getDirections } = DirectionsModel();
  const { address, changeAddress } = DirectionsController();

  useEffect(() => {
    getDirections().then((res) => {
      changeAddress(res.addresses);
    });
  });

  const click = () => {};
  return (
    <View>
      <Header />
      <StatusBar animated={true} backgroundColor="white" />
      <ListDirection data={address} />
      {address.map((item) => {
        item.default_shipping ? <Text>probando</Text> : <Text> otra probando</Text>;
      })}
      <Button
        title="Agregar dirección"
        onPress={() => click()}
        type={BUTTONTYPE.SECONDARY}
        containerStyle={styles.filterButton}
        textStyle={styles.deleteButtonText}
        icon={() => (
          <IconGeneric name={'add'} iconColor={PRIMARY_BLUE} width={30} height={30} style={styles.iconButton} />
        )}
      />
    </View>
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
    marginLeft: 130,
    marginTop: 200,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'TerminaW05-Bold',
    color: 'white',
  },
  filterButton: {
    height: 36,
  },
  iconButton: {
    marginTop: 0,
  },
  deleteButtonText: {
    color: PRIMARY_BLUE,
    fontFamily: 'Effra-Regular',
    fontWeight: '400',
    marginLeft: -10,
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
});
