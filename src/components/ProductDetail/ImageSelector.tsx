/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { StyleSheet, View, Image, ImageStyle, TouchableOpacity } from 'react-native';
import { getHeight, getWidth } from '../../utils/interfaceDimentions';
import ImageModal from 'react-native-image-modal';
import { PRIMARY_BLUE, WHITE } from '../../constants/colors';
import IconGeneric from '../IconGeneric';
import { ProductDetail } from '../../models/Objects/Product';
import { formatImage, GetAttribute } from '../../utils/genericFunctions';
interface IProps {
  product: ProductDetail;
}

const ImageSelector: React.FC<IProps> = ({ product }) => {
  const imageProduct = GetAttribute(product.custom_attributes, 'scene7_urls');
  const imagesSeparate = imageProduct?.split(';');

  const [imageSelect, setImageSelect] = useState(imagesSeparate ? formatImage(imagesSeparate[0]) : '');

  const ImageSelection = ({ uri = '', isSelection = false, index = 0 }) => {
    return (
      <TouchableOpacity
        key={'imageSelect' + index}
        onPress={() => {
          setImageSelect(uri);
        }}
        style={selectionImage(isSelection)}
      >
        <View style={styles.imageContent}>
          <Image
            source={{
              uri: uri,
            }}
            style={styles.imageSelection}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
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
            uri: imageSelect,
          }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.contentImages}>
        {imagesSeparate?.map((uri, index) => {
          const uriFormat = formatImage(uri);
          return <ImageSelection index={index} uri={uriFormat} isSelection={imageSelect === uriFormat} />;
        })}
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
