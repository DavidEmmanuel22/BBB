import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../components/Header';
import Text from '../components/Text';

import { RowContent } from '../utils/stylesGenetic';

import { GRAY, WHITE } from '../constants/colors';
import { TERMINABOLD } from '../constants/fonts';
import Icon from '../components/Icon';
import Button from '../components/Button';
import { CartController } from '../controllers/CartController';
import AllCart from '../components/Cart/AllCart';
const Cart: React.FC = () => {
  const { currentCart } = CartController();
  const numberItems = currentCart ? currentCart.items_count : 0;

  return (
    <>
      <Header backButton={true}>
        <Text size={20} color={WHITE} medium={true} style={{ fontFamily: TERMINABOLD, marginTop: 20 }}>
          mi carrito
        </Text>
      </Header>
      <View style={[RowContent, { minHeight: '90%', justifyContent: 'center' }]}>
        {numberItems === 0 ? (
          <View style={styles.container}>
            <Icon name="cart-icon" size={32} color={GRAY} />
            <Text medium={true} style={styles.textTitle}>
              Tu carrito está vacío
            </Text>
            <Button title="Agregar productos" onPress={() => {}} containerStyle={styles.productsBtn} />
          </View>
        ) : (
          <AllCart />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  textTitle: {
    marginTop: 24,
  },
  productsBtn: {
    marginTop: 24,
    paddingLeft: 60,
    paddingRight: 60,
  },
});

export default Cart;
