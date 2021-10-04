import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Review from '../../assets/icons/Review';
import { getWidth } from '../../utils/interfaceDimentions';
import Button from '../Button';

const { height } = Dimensions.get('screen');

const EmptyList = () => {
  return (
    <View style={[styles.containerMessage, { height: height / 2 }]}>
      <View style={styles.icon}>
        <Review />
      </View>
      <Text style={styles.message1}>No cuentas con pedidos</Text>
      <Text style={styles.message2}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</Text>
      <Button containerStyle={styles.buttonStyle} title="Explorar productos" onPress={() => {}} />
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
