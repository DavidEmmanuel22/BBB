/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DARK, GRAY2, PRIMARY_BLUE, WHITE } from '../../constants/colors';
import { getHeight, getWidth } from '../../utils/interfaceDimentions';
import Text from '../Text';
import { Rating } from 'react-native-ratings';
import { RowContent } from '../../utils/stylesGenetic';
import PriceGeneric from '../PriceGeneric';
import IconGeneric from '../IconGeneric';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { EFFRA } from '../../constants/fonts';
import { ProductDetail } from '../../models/Objects/Product';
import { GetAttribute } from '../../utils/genericFunctions';

interface IProps {
  product: ProductDetail;
  reviewRating: number;
  reviewCounts: number;
}
const ProductDescription: React.FC<IProps> = ({ product, reviewCounts = 0, reviewRating = 0 }) => {
  const priceSpecial = GetAttribute(product.custom_attributes, 'special_price');

  return (
    <View style={styles.content}>
      <Text color={GRAY2} size={getWidth(12)}>
        SKU#: {product?.sku}
      </Text>
      <Text style={styles.description} color={DARK} size={getWidth(16)} medium={true}>
        {product?.name}
      </Text>
      <View style={RowContent}>
        <Rating readonly startingValue={reviewRating} ratingCount={5} imageSize={getWidth(20)} style={styles.rating} />
        <Text color={GRAY2} size={getWidth(14)}>
          {reviewCounts} opiniones
        </Text>
      </View>
      <View style={[RowContent, styles.contentPrice]}>
        <PriceGeneric
          style={styles.spaceRight}
          size={getWidth(20)}
          sizeDecimals={getWidth(12)}
          price={priceSpecial ? parseFloat(priceSpecial || '0') : product.price || 0}
        />
        {priceSpecial && (
          <PriceGeneric isDeal size={getWidth(20)} sizeDecimals={getWidth(12)} price={product.price || 0} />
        )}
        <View style={styles.compareContain}>
          <IconGeneric
            onPress={() => {}}
            name={'compare'}
            iconColor={PRIMARY_BLUE}
            width={getWidth(18)}
            height={getWidth(16)}
            style={styles.spaceRight}
          />
          <Text color={PRIMARY_BLUE}>Comparar</Text>
        </View>
      </View>
      <BouncyCheckbox
        size={getWidth(20)}
        text="Notificarme cuando baje el precio"
        fillColor={PRIMARY_BLUE}
        unfillColor={WHITE}
        textStyle={styles.checkText}
        onPress={() => {}}
        isChecked={true}
        style={styles.contentCheck}
        iconStyle={styles.iconChecker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: getHeight(25),
  },
  description: {
    marginVertical: getHeight(5),
  },
  rating: {
    alignSelf: 'flex-start',
    marginRight: getWidth(10),
  },
  spaceRight: {
    marginRight: getWidth(10),
  },
  contentPrice: {
    marginTop: getWidth(10),
    width: '100%',
  },
  compareContain: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  checkText: {
    fontFamily: EFFRA,
    color: DARK,
    textDecorationLine: 'none',
  },
  iconChecker: {
    borderRadius: getWidth(5),
  },
  contentCheck: { marginTop: getHeight(10), borderRadius: 0 },
});

export default ProductDescription;
