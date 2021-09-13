import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

type CardCategoryProps = {
  uri: string;
  label: string;
  width?: string | number;
  height?: string | number;
  size?: number;
  margin?: number;
};

const CardCategory = ({
  uri,
  margin,
  size,
  label,
  width,
  height,
}: CardCategoryProps) => {
  const image: any = uri ? {uri: uri} : undefined;

  return (
    <View
      style={{
        width: width || size,
        height: height || size,
        marginHorizontal: margin,
      }}>
      <View style={{flex: 1, marginBottom: 18}}>
        <Image style={styles.image} source={image} />
      </View>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

export default CardCategory;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: '#1a4e8a',
    fontWeight: 'bold',
  },
});
