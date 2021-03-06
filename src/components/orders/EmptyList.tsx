import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Star from '../../assets/icons/Star';
import { getWidth } from '../../utils/interfaceDimentions';
import Button from '../Button';

const { height } = Dimensions.get('screen');

const EmptyList = () => {
  return (
    <View style={[styles.containerMessage, { height: height / 2 }]}>
      <View style={styles.icon}>
        <Star />
      </View>
      <Text style={styles.message1}>No cuentas con reseñas</Text>
      <Text style={styles.message2}>Comparte tu calificación y opinión de los productos que has comprado.</Text>
      <Button containerStyle={styles.buttonStyle} title="Ver mis productos" onPress={() => {}} />
    </View>
  );
};

export default EmptyList;
const styles = StyleSheet.create({
  containerMessage: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 18,
    justifyContent: 'center',
  },
  buttonStyle: {
    marginTop: 18,
    width: getWidth(250),
  },
  icon: {
    marginBottom: 18,
  },
  message1: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  message2: {
    fontSize: 16,
    textAlign: 'center',
  },
});
