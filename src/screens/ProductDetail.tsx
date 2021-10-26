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
import Button from '../components/Button';
import { CartController } from '../controllers/CartController';

interface IProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}

const ProductDetail: React.FC<IProps> = ({ route }) => {
  const { initializeProduct, product, loading, reviews } = ProductDetailController();
  const { AddToCart, loadingCart } = CartController();
  const sku = route.params?.sku;
  // const id = route.params?.id;

  const reviewValues = reviews.map((review) => {
    return review.ratings?.map((item) => {
      return item;
    });
  });
  const quality = reviewValues.map((item) => {
    return item?.filter((itemInt) => itemInt.rating_name === 'Quality')[0];
  });

  const value = reviewValues.map((item) => {
    return item?.filter((itemInt) => itemInt.rating_name === 'Value')[0];
  });

  const price = reviewValues.map((item) => {
    return item?.filter((itemInt) => itemInt.rating_name === 'Price')[0];
  });

  const allQualifications = [quality, value, price];

  const allQualificationsCount = quality.concat(value).concat(price).length;

  const rating = reviewValues.map((item) => {
    return item?.filter((itemInt) => itemInt.rating_name === 'Rating')[0];
  });

  const reviewGeneral = rating.reduce((sum, item) => sum + (item?.value || 0), 0) / rating.length;

  useEffect(() => {
    initializeProduct(sku);

    return () => {};
  }, []);
  return (
    <Container scroll={true} containerStyles={styles.container}>
      {loading ? (
        <ActivityIndicator style={styles.loadingIndicator} size="large" color={PRIMARY_BLUE} />
      ) : (
        <KeyboardAvoidingView keyboardVerticalOffset={80} behavior={'position'}>
          <ImageSelector product={product} />
          <ProductDescription
            reviewCounts={reviews.length}
            reviewRating={reviewGeneral ? reviewGeneral : 0}
            product={product}
          />
          <DeliverySection />
          <TabOptionsProduct
            allQualifications={allQualifications}
            countQualification={allQualificationsCount}
            reviewRating={reviewGeneral}
            product={product}
            reviews={reviews}
            allRatings={rating}
          />
          <Button
            loading={loadingCart}
            title="Agregar"
            onPress={() => {
              AddToCart(sku, 1);
            }}
          />
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
