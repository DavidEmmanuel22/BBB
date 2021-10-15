/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';

import { BLUE, GRAY2, PRIMARY_BLUE } from '../../constants/colors';
import { getHeight, getWidth } from '../../utils/interfaceDimentions';
import Text from '../Text';
import { ProductDetail } from '../../models/Objects/Product';
import { formatDescription, GetAttribute } from '../../utils/genericFunctions';
import IconGeneric from '../IconGeneric';
import { Rating } from 'react-native-ratings';
import { RowContent } from '../../utils/stylesGenetic';
import RatingProgress from './ProgressRating';

interface IProps {
  product: ProductDetail;
}
export const ShowMoreButton = ({ showMore = true, onPress = () => {} }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.showMoreButton}>
      <Text style={styles.rightSpace} color={PRIMARY_BLUE}>
        {showMore ? 'Ver mas características' : 'Ver menos'}
      </Text>
      <IconGeneric name={showMore ? 'chevronDown' : 'chevronUp'} width={getWidth(12)} iconColor={PRIMARY_BLUE} />
    </TouchableOpacity>
  );
};
const TabOptionsProduct: React.FC<IProps> = ({ product }) => {
  const [indexTab, setIndexTab] = useState(0);
  const routes = [
    { key: 'details', title: 'Detalles' },
    { key: 'opinions', title: 'Opinions' },
    { key: 'returns', title: 'Política de devoluciones' },
  ];
  const shortDescription = GetAttribute(product.custom_attributes, 'short_description') || '';
  const description = GetAttribute(product.custom_attributes, 'description') || '';
  const ratingProduct = 4;
  const countReviews = 3;
  const countRatings = 5;
  const [showMoreDescription, setShowMoreDescription] = useState(false);
  const Details = () => {
    return (
      <View>
        <Text color={GRAY2} size={getWidth(13)}>
          {formatDescription(shortDescription)}{' '}
        </Text>
        {!showMoreDescription && <ShowMoreButton onPress={() => setShowMoreDescription(!showMoreDescription)} />}
        {showMoreDescription && (
          <Text color={GRAY2} size={getWidth(13)}>
            {formatDescription(description)}{' '}
          </Text>
        )}
        {showMoreDescription && (
          <ShowMoreButton showMore={false} onPress={() => setShowMoreDescription(!showMoreDescription)} />
        )}
      </View>
    );
  };

  const Reviews = ({ rating = 0 }) => {
    const ratingsList = [0, 0, 0];
    return (
      <View>
        <Text size={getWidth(18)} color={BLUE}>
          Calificación general
        </Text>
        <View style={[RowContent, { marginTop: getHeight(10) }]}>
          <Rating readonly startingValue={rating} ratingCount={5} imageSize={getWidth(20)} style={styles.rating} />
          <Text>{`${rating} de 5`} </Text>
        </View>
        <Text color={GRAY2} style={styles.spaceUp}>
          {`${countRatings} calificaciones, ${countReviews} opiniones`}{' '}
        </Text>
        {ratingsList.map(() => (
          <RatingProgress />
        ))}
      </View>
    );
  };
  const tabOption = ({ item = { title: '' }, index = 0 }) => {
    return (
      <TouchableOpacity onPress={() => setIndexTab(index)} style={tabOptionStyle(index === indexTab)}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => 'keyContent' + index}
        style={styles.listOptions}
        horizontal
        data={routes}
        renderItem={tabOption}
      />

      {indexTab === 0 && <Details />}
      {indexTab === 1 && <Reviews rating={ratingProduct} />}
      {indexTab === 2 && <Details />}
    </View>
  );
};
const tabOptionStyle = (isSelected: boolean): ViewStyle => {
  return {
    padding: getWidth(4),
    marginRight: getWidth(8),
    borderBottomColor: PRIMARY_BLUE,
    borderBottomWidth: isSelected ? getWidth(4) : 0,
  };
};
const styles = StyleSheet.create({
  listOptions: {
    marginVertical: getHeight(18),
  },

  rightSpace: {
    marginRight: getWidth(10),
  },
  showMoreButton: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    alignSelf: 'flex-start',
    marginRight: getWidth(10),
  },
  spaceUp: {
    marginTop: getHeight(10),
  },
  ratingProgress: {
    justifyContent: 'space-between',
  },
});

export default TabOptionsProduct;
