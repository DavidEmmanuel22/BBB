import React from 'react';
import { View, StyleSheet, Dimensions, ImageBackground } from 'react-native';

const { width, height } = Dimensions.get('window');

const CarouselItem = ({ item }: any) => {
  return (
    <View style={styles.cardView}>
      <ImageBackground source={{ uri: item?.url }} resizeMode="cover" style={[styles.image]} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 124,
    height: height / 3,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
});

export default CarouselItem;
