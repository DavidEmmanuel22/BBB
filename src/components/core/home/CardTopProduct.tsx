import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Button from '../../Button';
import Favorite from '../../icons/Favorit';

type CardTopProduct = {
  url: string;
  description: string;
  price: string;
  onPress: () => void;
};

const CardTopProduct = ({url, description, price, onPress}: CardTopProduct) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: url,
        }}
        resizeMode="cover"
        style={[styles.imgProduct, styles.positionIconFavorite]}>
        <Favorite />
      </ImageBackground>
      <View style={styles.containerDescription}>
        <Text numberOfLines={2} style={styles.description}>
          {description}
        </Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <View>
        <Button title="Agregar" type="SECONDARY" onPress={onPress} />
      </View>
    </View>
  );
};

export default CardTopProduct;

const styles = StyleSheet.create({
  containerDescription: {
    alignItems: 'center',
  },
  description: {
    textAlign: 'center',
    color: '#212529',
    fontWeight: '400',
    fontSize: 15,
    marginTop: 12,
    marginBottom: 12,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1a4e8a',
  },
  container: {
    flexDirection: 'column',
    borderColor: '#e9ecef',
    borderWidth: 1,
    borderStyle: 'solid',
    height: 280,
    padding: 8,
    width: 200,
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
    resizeMode: 'contain',
  },
});
