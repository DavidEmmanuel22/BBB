import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

type CategoryProps = {
  uri?: string;
  label: string;
  width?: string | number;
  height?: string | number;
  size?: number;
  source?: any;
};

const CategoryCard = ({
  uri,
  source,
  size,
  label,
  width,
  height,
}: CategoryProps) => {
  const image: any = uri ? {uri: uri} : undefined;
  const media = image || source;

  return (
    <View
      style={{
        width: width || size,
        height: height || size,
      }}>
      <View style={styles.containerImage}>
        <Image style={styles.image} source={media} />
      </View>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  containerImage: {
    flex: 1,
    marginBottom: 4,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'stretch',
  },
  text: {
    fontSize: 15,
    color: '#1a4e8a',
    fontFamily: 'Effra',
    fontWeight: 'bold',
  },
});
