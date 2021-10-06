/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { StyleSheet, View, Image, Text, ImageStyle } from 'react-native';
import { getHeight, getWidth } from '../../utils/interfaceDimentions';
import ImageModal from 'react-native-image-modal';
import { PRIMARY_BLUE, WHITE } from '../../constants/colors';
import IconGeneric from '../IconGeneric';
interface IProps {}

const ImageSelector: React.FC<IProps> = ({}) => {
  const ImageSelection = ({ uri = '', isSelection = false }) => {
    return (
      <View style={selectionImage(isSelection)}>
        <View style={styles.imageContent}>
          <Image
            source={{
              uri: 'https://64.media.tumblr.com/efaa470a462601bee5a49f46115eb755/tumblr_inline_olu4x55Kjg1u0e4qb_400.jpg',
            }}
            style={styles.imageSelection}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.content}>
      <View style={styles.contentIcons}>
        <IconGeneric
          onPress={() => {
            //   navigation.goBack();
          }}
          name={'favorite'}
          iconColor={PRIMARY_BLUE}
          width={getWidth(25)}
          height={getWidth(25)}
        />
        <IconGeneric
          onPress={() => {
            //   navigation.goBack();
          }}
          name={'shareArrow'}
          iconColor={PRIMARY_BLUE}
          width={getWidth(25)}
          height={getWidth(25)}
          style={{ marginTop: getHeight(20) }}
        />
      </View>
      <View>
        <ImageModal
          source={{
            uri: 'https://64.media.tumblr.com/efaa470a462601bee5a49f46115eb755/tumblr_inline_olu4x55Kjg1u0e4qb_400.jpg',
          }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.contentImages}>
        <ImageSelection isSelection={true} />
        <ImageSelection />
      </View>
    </View>
  );
};

const selectionImage = (isSelected: boolean): ImageStyle => {
  return { backgroundColor: isSelected ? PRIMARY_BLUE : WHITE, padding: getWidth(2), marginHorizontal: getWidth(8) };
};
const styles = StyleSheet.create({
  contentIcons: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  content: {
    alignItems: 'center',
    position: 'relative',
    marginTop: getHeight(25),
  },
  image: {
    height: getWidth(200),
    width: getWidth(200),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  contentImages: {
    flexDirection: 'row',
    marginTop: getHeight(16),
  },
  imageSelection: {
    height: getWidth(45),
    width: getWidth(45),

    resizeMode: 'contain',
    alignSelf: 'center',
  },
  imageContent: {
    backgroundColor: WHITE,
    padding: getWidth(2),
  },
});

export default ImageSelector;
