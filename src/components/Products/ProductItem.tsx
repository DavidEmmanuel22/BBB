/* eslint-disable react-native/no-inline-styles */

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { BLUE, GRAY, LIGHTER_GRAY, PRIMARY_BLUE } from '../../constants/colors';
import { CartController } from '../../controllers/CartController';
import { ProductByCategory } from '../../models/Objects/ProductByCategory';
import { GetAttribute } from '../../utils/genericFunctions';
import { getHeight, getWidth } from '../../utils/interfaceDimentions';
import { separateDecimals } from '../../utils/separeteDecimals';
import { RowContent } from '../../utils/stylesGenetic';
import Text from '../Text';

interface IProps {
  item: ProductByCategory;
}

const ProductItem: React.FC<IProps> = ({ item }) => {
  const price = separateDecimals(item.price || 0);
  const imageProduct = GetAttribute(item.custom_attributes, 'scene7_urls');
  const priceSpecial = GetAttribute(item.custom_attributes, 'special_price');
  const priceDeal = separateDecimals(parseFloat(priceSpecial || '0') || 0);
  const navigation = useNavigation();
  const { loadingCart, AddToCart } = CartController();
  const handleAddToCart = async () => {
    await AddToCart(item.sku!, 1);
  };
  return (
    <View style={styles.contain}>
      {imageProduct && (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ProductDetail', { sku: item.sku, id: item.id });
          }}
        >
          <Image
            style={styles.image}
            source={{
              uri: imageProduct.replace('http://', 'https://').split(';')[0],
            }}
          />
        </TouchableOpacity>
      )}
      <Text size={getWidth(14)} style={styles.description}>
        {item.name || ''}
      </Text>
      <View style={styles.contentPrice}>
        <View style={RowContent}>
          <Text color={BLUE} size={getWidth(15)} style={styles.normal}>
            {priceSpecial ? priceDeal.price : price.price}
          </Text>
          <Text size={getWidth(8)} color={BLUE}>
            {priceSpecial ? priceDeal.decimals : price.decimals}
          </Text>
        </View>
        {priceSpecial && (
          <View style={RowContent}>
            <Text color={GRAY} size={getWidth(15)} style={styles.discount}>
              {price.price}
            </Text>
            <Text color={GRAY} size={getWidth(8)} style={styles.discount}>
              {price.decimals}
            </Text>
          </View>
        )}
      </View>
      <TouchableOpacity disabled={loadingCart} onPress={handleAddToCart} style={styles.button}>
        {loadingCart ? <ActivityIndicator /> : <Text color={PRIMARY_BLUE}>Agregar</Text>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    width: getWidth(160),
    height: getHeight(290),
    marginTop: getHeight(8),
    borderColor: LIGHTER_GRAY,
    borderWidth: getWidth(1),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    height: getWidth(128),
    width: getWidth(128),
    resizeMode: 'contain',
  },
  description: {
    maxHeight: getHeight(40),
    textAlign: 'center',
    marginHorizontal: getWidth(8),
  },
  contentPrice: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'stretch',
  },
  normal: {},
  discount: {
    textDecorationLine: 'line-through',
  },
  button: {
    marginHorizontal: getWidth(8),
    borderColor: LIGHTER_GRAY,
    borderWidth: getWidth(1),
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: getHeight(8),
  },
});
export default ProductItem;
