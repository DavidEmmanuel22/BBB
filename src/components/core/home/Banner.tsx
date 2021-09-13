import React from 'react';
import {Dimensions, Image, StyleSheet, View, ViewStyle} from 'react-native';

type BannerProps = {
  uri: string;
  containerStyle?: ViewStyle;
};

const Banner = ({uri, containerStyle}: BannerProps) => {
  const {width} = Dimensions.get('window');
  const widthResize = width - 64;
  return (
    <View style={[{width: widthResize}, styles.container, containerStyle]}>
      <View style={{flex: 1}}>
        <Image
          style={styles.image}
          source={{
            uri,
          }}
        />
      </View>
    </View>
  );
};

export default Banner;
const styles = StyleSheet.create({
  container: {
    height: 168,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
});
