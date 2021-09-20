import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';

type OfferProps = {
  source: any;
  height?: number | string;
};

const {width: wWidth, height: wHeight} = Dimensions.get('window');

const OfferCard = ({source, height}: OfferProps) => {
  return (
    <View style={[styles.container, {height: height}]}>
      <View style={{flex: 1}}>
        <Image style={styles.image} source={source} />
      </View>
    </View>
  );
};

export default OfferCard;
const styles = StyleSheet.create({
  container: {
    height: wHeight / 3,
    width: wWidth - 62,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 135 / 76,
    resizeMode: 'contain',
  },
});
