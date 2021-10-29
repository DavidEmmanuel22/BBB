import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import TextComponent from '../Text';
import { BLUE, GRAY, LIGHTER_GRAY, PRIMARY_BLUE } from '../../constants/colors';
import { getHeight, getWidth } from '../../utils/interfaceDimentions';
import { separateDecimals } from '../../utils/separeteDecimals';
import { RowContent } from '../../utils/stylesGenetic';
import { Doc } from '../../models/Objects/Items';
import { useNavigation } from '@react-navigation/core';

interface IProps {
  item: Doc;
}

export const Product: React.FC<IProps> = ({ item }) => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.contain}>
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { sku: item.id, id: item.id })}>
        <Image
          style={styles.image}
          source={{
            uri: item.imageId,
          }}
        />
      </TouchableOpacity>

      <TextComponent size={getWidth(14)} style={styles.description}>
        {item.name || ''}
      </TextComponent>
      <View style={styles.contentPrice}>
        <View style={RowContent}>
          <TextComponent color={BLUE} size={getWidth(15)} style={styles.normal}>
            {item.special_price
              ? separateDecimals(item.special_price || 0).price
              : separateDecimals(item.priceCents || 0).price}
          </TextComponent>
          <TextComponent size={getWidth(8)} color={BLUE}>
            {item.special_price
              ? separateDecimals(item.special_price || 0).decimals
              : separateDecimals(item.priceCents || 0).decimals}
          </TextComponent>
        </View>
        {item.special_price && (
          <View style={RowContent}>
            <TextComponent color={GRAY} size={getWidth(15)} style={styles.discount}>
              {separateDecimals(item.priceCents || 0).price}
            </TextComponent>
            <TextComponent color={GRAY} size={getWidth(8)} style={styles.discount}>
              {separateDecimals(item.priceCents || 0).decimals}
            </TextComponent>
          </View>
        )}
      </View>
      <TouchableOpacity style={styles.button}>
        <TextComponent color={PRIMARY_BLUE}>Agregar</TextComponent>
      </TouchableOpacity>
    </View>
  );
  
};
const styles = StyleSheet.create({
    contain: {
      width: getWidth(160),
      height: getHeight(290),
      marginTop: getHeight(8),
      marginHorizontal: getWidth(4),
      borderColor: LIGHTER_GRAY,
      borderWidth: getWidth(1),
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    image: {
      height: getWidth(128),
      width: getWidth(128),
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
    wrapperColumn: {
      justifyContent: 'space-between',
    },
  });
