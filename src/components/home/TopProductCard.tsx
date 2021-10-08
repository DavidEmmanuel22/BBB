import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Button from '../Button';
import Favorite from '../../assets/icons/Favorit';
import { LIGHTER_GRAY } from '../../constants/colors';
import PriceGeneric from '../PriceGeneric';
import { getWidth } from '../../utils/interfaceDimentions';

type TopProduct = {
  source: any;
  description: string;
  price: any;
  onPress: () => void;
};

const TopProductCard = ({ source, description, price, onPress }: TopProduct) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={source} style={[styles.imgProduct, styles.positionIconFavorite]}>
        <Favorite />
      </ImageBackground>
      <View style={styles.containerDescription}>
        <Text numberOfLines={2} style={styles.description}>
          {description}
        </Text>
        <View style={styles.containerPrice}>
          <PriceGeneric style={styles.spaceRight} size={getWidth(20)} sizeDecimals={getWidth(12)} price={price} />
          {/*<PriceGeneric isDeal size={getWidth(20)} sizeDecimals={getWidth(12)} price={3912.21} /> */}
        </View>
      </View>
      <View>
        <Button title="Agregar" type="SECONDARY" onPress={onPress} />
      </View>
    </View>
  );
};

export default TopProductCard;

const styles = StyleSheet.create({
  containerDescription: {
    alignItems: 'center',
  },
  containerPrice: {
    flexDirection: 'row',
  },
  description: {
    textAlign: 'center',
    color: '#212529',
    fontFamily: 'Effra',
    fontWeight: '400',
    fontSize: 15,
    marginTop: 12,
    marginBottom: 12,
  },
  spaceRight: {
    marginRight: getWidth(10),
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Effra',
    color: '#1a4e8a',
    marginRight: 12,
  },
  container: {
    flexDirection: 'column',
    borderColor: LIGHTER_GRAY,
    borderWidth: 1,
    borderStyle: 'solid',
    height: 280,
    padding: 8,
    width: 170,
    borderRadius: 4,
  },
  positionIconFavorite: {
    paddingTop: 5,
    paddingRight: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  imgProduct: {
    margin: 8,
    flex: 1,
    alignSelf: 'center',
    aspectRatio: 1 / 1,
  },
});
