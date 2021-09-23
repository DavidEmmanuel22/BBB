import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {LIGHTER_GRAY} from '../../../constants/colors';

const ProductCard = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://m.media-amazon.com/images/I/51F2Y0S7AaS._AC_SX466_.jpg',
        }}
      />
      <View style={styles.detail}>
        <Text style={styles.description} numberOfLines={2}>
          Trampa para insectos de poliresina Dynatrap® color negro
        </Text>
        <Text style={styles.price}>$3,199.00</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
  },
  container: {
    height: 103,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: LIGHTER_GRAY,
    marginBottom: 12,
    alignItems: 'center',
  },
  detail: {
    flex: 1,
    fontFamily: 'Effra',
    marginLeft: 24,
    flexDirection: 'column',
  },
  description: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
    color: '#212529',
  },
  price: {
    fontFamily: 'Effra',
    fontSize: 14,
    fontWeight: '700',
    color: '#1a4e8a',
  },
});
