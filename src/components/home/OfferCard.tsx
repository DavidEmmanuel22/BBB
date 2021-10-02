import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

type OfferProps = {
  source: any;
  height?: number | string;
};

const { width, height: h } = Dimensions.get('window');

const OfferCard = ({ source, height = h / 4 }: OfferProps) => {
  return (
    <View style={[styles.container, { height }]}>
      <Image style={styles.image} source={source} />
    </View>
  );
};

export default OfferCard;
const styles = StyleSheet.create({
  container: {
    width: width - 62,
  },
  image: {
    width: undefined,
    height: undefined,
    flex: 1,
    resizeMode: 'stretch',
  },
});
