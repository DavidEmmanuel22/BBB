/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';

import { BLUE, GRAY2, LIGHTER_GRAY, PRIMARY_BLUE } from '../../constants/colors';
import { getHeight, getWidth } from '../../utils/interfaceDimentions';
import Text from '../Text';
import { ProductDetail, ProductReview } from '../../models/Objects/Product';
import { formatDescription, GetAttribute } from '../../utils/genericFunctions';
import IconGeneric from '../IconGeneric';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { RowContent } from '../../utils/stylesGenetic';
import RatingProgress from './ProgressRating';
import ReviewList from './ReviewList';
import { ReviewTitleQualification } from '../../constants/generics';
interface IProps {
  product: ProductDetail;
  reviews: Array<ProductReview>;
  reviewRating: number;
  countQualification: number;
  allQualifications: Array<any>;
  allRatings: Array<any>;
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
export const AddOpinion = ({ onPress = () => {} }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.showMoreButton}>
      <IconGeneric style={styles.rightSpace} name={'plus'} width={getWidth(12)} iconColor={PRIMARY_BLUE} />
      <Text color={PRIMARY_BLUE}>{'Agregar opinión'}</Text>
    </TouchableOpacity>
  );
};
const TabOptionsProduct: React.FC<IProps> = ({
  product,
  reviews,
  reviewRating = 0,
  countQualification = 0,
  allQualifications,
  allRatings,
}) => {
  const [indexTab, setIndexTab] = useState(0);
  const routes = [
    { key: 'details', title: 'Detalles' },
    { key: 'opinions', title: 'Opinions' },
    { key: 'returns', title: 'Política de devoluciones' },
  ];
  const shortDescription = GetAttribute(product.custom_attributes, 'short_description') || '';
  const description = GetAttribute(product.custom_attributes, 'description') || '';

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
  const OtherAspects = ({ titleOther = 'Quality', ratingOther = 4 }) => {
    const title = ReviewTitleQualification(titleOther);
    return (
      <View style={styles.otherAspects}>
        <Text medium size={getWidth(14)}>
          {title}
        </Text>
        <AirbnbRating
          selectedColor={PRIMARY_BLUE}
          showRating={false}
          count={5}
          defaultRating={ratingOther}
          size={getWidth(13)}
        />
      </View>
    );
  };
  const Separation = () => {
    return <View style={styles.separation} />;
  };
  const Reviews = ({ rating = 0 }) => {
    const starsCount = [5, 4, 3, 2, 1];
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
          {`${countQualification} calificaciones, ${reviews.length} opiniones`}{' '}
        </Text>
        {starsCount.map((item, index) => {
          const rates = allRatings.filter((rate) => rate.value === item);
          return <RatingProgress count={rates.length} totalCount={allRatings.length} stars={item} index={index} />;
        })}
        <AddOpinion />
        <Separation />
        <Text style={styles.spaceUp} size={getWidth(18)} color={BLUE}>
          Otros aspectos evaluados
        </Text>
        {allQualifications.map((item) => {
          const title = item[0].rating_name;
          const stars = item.reduce((sum: any, rate: { value: number }) => sum + rate.value, 0) / item.length;
          return <OtherAspects titleOther={title} ratingOther={stars} />;
        })}
        <ReviewList data={reviews} />
        <Separation />
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
      {indexTab === 1 && <Reviews rating={reviewRating} />}
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
  otherAspects: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: getHeight(10),
  },
  separation: {
    height: getHeight(1),
    backgroundColor: LIGHTER_GRAY,
    width: '100%',
    marginVertical: getHeight(10),
  },
});

export default TabOptionsProduct;
