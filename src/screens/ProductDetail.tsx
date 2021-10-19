/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { StyleSheet, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/core';

import Container from '../components/Container';
import { getHeight, getWidth } from '../utils/interfaceDimentions';
import ImageSelector from '../components/ProductDetail/ImageSelector';
import ProductDescription from '../components/ProductDetail/ProductDescription';
import DeliverySection from '../components/ProductDetail/DeliverySection';
import TabOptionsProduct from '../components/ProductDetail/TabOptionsProduct';
import { ProductDetailController } from '../controllers/ProductDetailController';
import { PRIMARY_BLUE } from '../constants/colors';
import fetchHelper from '../utils/fetchHelper';
import { URL_PRODUCT_REVIEWS } from '../constants/URLs';

interface IProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}

const ProductDetail: React.FC<IProps> = ({ route }) => {
  const { initializeProduct, product, loading } = ProductDetailController();
  const sku = route.params?.sku;

  useEffect(() => {
    initializeProduct(sku);

    fetchHelper(URL_PRODUCT_REVIEWS('47133365'), {}, { useAdminToken: true })
      .then(() => {
        // console.log('res', res);
      })
      .catch(() => {
        // console.log('error', error);
      });
    return () => {};
  }, []);
  return (
    <Container scroll={true} containerStyles={styles.container}>
      {loading ? (
        <ActivityIndicator style={styles.loadingIndicator} size="large" color={PRIMARY_BLUE} />
      ) : (
        <KeyboardAvoidingView keyboardVerticalOffset={80} behavior={'position'}>
          <ImageSelector product={product} />
          <ProductDescription product={product} />
          <DeliverySection />
          <TabOptionsProduct product={product} />
        </KeyboardAvoidingView>
      )}
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
  loadingIndicator: {
    marginTop: getHeight(150),
  },
});

export default ProductDetail;
