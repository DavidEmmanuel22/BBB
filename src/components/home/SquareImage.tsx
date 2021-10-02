/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TextStyle } from 'react-native';

type SquareImageProps = {
  uri?: string;
  size: number;
  height?: number;
  width?: number;
  text?: string;
  color?: string;
  background?: string;
  styleText?: TextStyle;
  margin?: number;
  source?: any;
};

const SquareImage = ({ uri, size, height, source, width, text, margin, styleText, background }: SquareImageProps) => {
  const image: any = uri ? { uri: uri } : undefined;
  const media = image || source;

  return (
    <View
      style={{
        width: width || size,
        height: height || size,
        marginHorizontal: margin,
        backgroundColor: background,
        alignSelf: 'flex-start',
      }}
    >
      <View style={styles.container}>
        <ImageBackground source={media} resizeMode="cover" style={styles.image}>
          <Text style={[styles.text, styleText]}>{text}</Text>
        </ImageBackground>
      </View>
    </View>
  );
};

export default SquareImage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
