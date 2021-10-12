/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/core';

import Container from '../components/Container';
import { getHeight, getWidth } from '../utils/interfaceDimentions';
import ImageSelector from '../components/ProductDetail/ImageSelector';
import ProductDescription from '../components/ProductDetail/ProductDescription';
import DeliverySection from '../components/ProductDetail/DeliverySection';

interface IProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}

const ProductDetail: React.FC<IProps> = () => {
  return (
    <Container scroll={true} containerStyles={styles.container}>
      <KeyboardAvoidingView keyboardVerticalOffset={80} behavior={'position'}>
        <ImageSelector />
        <ProductDescription />
        <DeliverySection />
      </KeyboardAvoidingView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: getWidth(24),
    paddingRight: getWidth(24),
    flex: 0,
    paddingBottom: getHeight(50),
  },
});

export default ProductDetail;
