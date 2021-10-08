import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { BLUE, GRAY } from '../constants/colors';
import { getWidth } from '../utils/interfaceDimentions';
import { separateDecimals } from '../utils/separeteDecimals';
import { RowContent } from '../utils/stylesGenetic';

import Text from './Text';

interface IProps {
  price: number;
  isDeal?: boolean;
  colorPrice?: string;
  colorDeal?: string;
  size?: number;
  sizeDecimals?: number;
  style?: ViewStyle;
}

const PriceGeneric: React.FC<IProps> = ({
  price = 0,
  isDeal = false,
  colorPrice = BLUE,
  size = getWidth(15),
  sizeDecimals = getWidth(8),
  colorDeal = GRAY,
  style = {},
}) => {
  const priceNew = separateDecimals(price);

  return (
    <View style={[RowContent, style]}>
      <Text medium={true} color={isDeal ? colorDeal : colorPrice} size={size} style={isDeal ? styles.discount : {}}>
        {priceNew.price}
      </Text>
      <Text
        medium={true}
        size={sizeDecimals}
        color={isDeal ? colorDeal : colorPrice}
        style={isDeal ? styles.discount : {}}
      >
        {priceNew.decimals}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  discount: {
    textDecorationLine: 'line-through',
  },
});
export default PriceGeneric;
