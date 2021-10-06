/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/core';

import Container, { StatusBarStyle } from '../components/Container';
import { getHeight, getWidth } from '../utils/interfaceDimentions';
import ImageSelector from '../components/ProductDetail/ImageSelector';

interface IProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}

const ProductDetail: React.FC<IProps> = ({ route }) => {
  return (
    <Container containerStyles={styles.container} statusBarStyle={StatusBarStyle.DARK}>
      <ImageSelector />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: getWidth(24),
    paddingRight: getWidth(24),
    flex: 1,
  },
});

export default ProductDetail;
