import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableOpacity } from 'react-native';
import { View, StatusBar, StyleSheet, Text, TextInput } from 'react-native';
import { GRAY, PRIMARY_BLUE, WHITE, LIGHTER_GRAY4 } from '../constants/colors';
import Button, { BUTTONTYPE } from '../components/Button';
import { getHeight } from '../utils/interfaceDimentions';
import { DirectionsController } from '../controllers/DirectionsController';
import { RouteProp } from '@react-navigation/core';

type HeaderProps = {
  onPress?: () => void;
};
const Header = ({ onPress }: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onPress} style={styles.iconLeft}>
        <FontAwesomeIcon style={styles.icon} icon="arrow-left" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Nueva dirección</Text>
    </View>
  );
};
interface IProps {
  route: RouteProp<any, any>;
}

const AddDirections: React.FC<IProps> = ({ route }) => {
  const item = route.params;
  const { city, changeCity } = DirectionsController();

  return (
    <View>
      <Header />
      <StatusBar animated={true} backgroundColor="white" />

      <TextInput
        placeholder="Nombre"
        keyboardType="default"
        placeholderTextColor={GRAY}
        value={item!!.firstname}
        onChangeText={(city) => changeCity(city)}
        blurOnSubmit={false}
        style={styles.inputEmail}
      />
      <View
        style={[
          styles.inputEmailSeparator,
          city ? { backgroundColor: PRIMARY_BLUE } : { backgroundColor: LIGHTER_GRAY4 },
        ]}
      />
      <TextInput
        placeholder="Apellido"
        keyboardType="default"
        placeholderTextColor={GRAY}
        value={item!!.lastname}
        onChangeText={(city) => changeCity(city)}
        blurOnSubmit={false}
        style={styles.inputEmail}
      />
      <View
        style={[
          styles.inputEmailSeparator,
          city ? { backgroundColor: PRIMARY_BLUE } : { backgroundColor: LIGHTER_GRAY4 },
        ]}
      />
      <TextInput
        placeholder="Telefono"
        keyboardType="default"
        placeholderTextColor={GRAY}
        value={item!!.telephone}
        onChangeText={(city) => changeCity(city)}
        blurOnSubmit={false}
        style={styles.inputEmail}
      />
      <View
        style={[
          styles.inputEmailSeparator,
          city ? { backgroundColor: PRIMARY_BLUE } : { backgroundColor: LIGHTER_GRAY4 },
        ]}
      />
      <TextInput
        placeholder="Calle y numero"
        keyboardType="default"
        placeholderTextColor={GRAY}
        value={item!!.street[0]!!}
        onChangeText={(city) => changeCity(city)}
        blurOnSubmit={false}
        style={styles.inputEmail}
      />
      <View
        style={[
          styles.inputEmailSeparator,
          city ? { backgroundColor: PRIMARY_BLUE } : { backgroundColor: LIGHTER_GRAY4 },
        ]}
      />
      <TextInput
        placeholder="Codigo postal"
        keyboardType="default"
        placeholderTextColor={GRAY}
        value={item!!.postcode}
        onChangeText={(city) => changeCity(city)}
        blurOnSubmit={false}
        style={styles.inputEmail}
      />
      <View
        style={[
          styles.inputEmailSeparator,
          city ? { backgroundColor: PRIMARY_BLUE } : { backgroundColor: LIGHTER_GRAY4 },
        ]}
      />
      <TextInput
        placeholder="Ciudad"
        keyboardType="default"
        placeholderTextColor={GRAY}
        value={item!!.city}
        onChangeText={(city) => changeCity(city)}
        blurOnSubmit={false}
        style={styles.inputEmail}
      />
      <View
        style={[
          styles.inputEmailSeparator,
          city ? { backgroundColor: PRIMARY_BLUE } : { backgroundColor: LIGHTER_GRAY4 },
        ]}
      />
      <TextInput
        placeholder="Colonia"
        keyboardType="default"
        placeholderTextColor={GRAY}
        value={item!!.custom_attributes[0]!!.value!!}
        onChangeText={(city) => changeCity(city)}
        blurOnSubmit={false}
        style={styles.inputEmail}
      />
      <View
        style={[
          styles.inputEmailSeparator,
          city ? { backgroundColor: PRIMARY_BLUE } : { backgroundColor: LIGHTER_GRAY4 },
        ]}
      />
      <TextInput
        placeholder="Estado"
        keyboardType="default"
        placeholderTextColor={GRAY}
        value={item!!.region.region}
        onChangeText={(city) => changeCity(city)}
        blurOnSubmit={false}
        style={styles.inputEmail}
      />
      <View
        style={[
          styles.inputEmailSeparator,
          city ? { backgroundColor: PRIMARY_BLUE } : { backgroundColor: LIGHTER_GRAY4 },
        ]}
      />
      <Button
        title="Agregar dirección"
        onPress={() => {}}
        type={BUTTONTYPE.PRIMARY}
        containerStyle={styles.filterButton}
        textStyle={styles.filterButtonText}
      />
    </View>
  );
};

export default AddDirections;
const styles = StyleSheet.create({
  containetStyle: {
    paddingLeft: 0,
    paddingRight: 0,
    margin: 0,
  },
  inputEmail: {
    borderRadius: 200,
    backgroundColor: 'white',
    color: 'black',
    marginLeft: 50,
    marginRight: 30,
    fontSize: 16,
    height: 40,
  },
  inputEmailSeparator: {
    backgroundColor: LIGHTER_GRAY4,
    height: 1,
    marginHorizontal: 30,
  },
  headerContainer: {
    position: 'relative',
    height: getHeight(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WHITE,
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
    color: 'black',
  },
  filterButtonText: {
    color: WHITE,
    fontFamily: 'Effra-Regular',
    fontWeight: '400',
  },
  filterButton: {
    height: 36,
    width: 300,
    marginLeft: 30,
  },
});
