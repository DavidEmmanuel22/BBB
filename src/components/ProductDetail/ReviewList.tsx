import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BLUE, GRAY2, LIGHTER_GRAY, PRIMARY_BLUE } from '../../constants/colors';
import { getHeight, getWidth } from '../../utils/interfaceDimentions';
import { RowContent } from '../../utils/stylesGenetic';
import IconGeneric from '../IconGeneric';
import Text from '../Text';
import { AirbnbRating } from 'react-native-ratings';
import { AddOpinion } from './TabOptionsProduct';

export const ReviewItem = ({
  title = 'Excelente',
  rating = 3,
  description = 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.',
  date = '12/02/2020',
  name = 'Example',
  index = 0,
}) => {
  return (
    <View key={'reviewList' + index} style={styles.contentReview}>
      <View style={RowContent}>
        <IconGeneric
          style={styles.spaceRight}
          iconColor={BLUE}
          height={getWidth(16)}
          width={getWidth(16)}
          name="user"
        />
        <Text size={getWidth(13)} color={PRIMARY_BLUE}>
          {name}
        </Text>
      </View>
      <Text style={styles.spaceUp2} medium>
        {title}
      </Text>
      <AirbnbRating
        selectedColor={PRIMARY_BLUE}
        showRating={false}
        count={5}
        defaultRating={rating}
        size={getWidth(13)}
        starContainerStyle={styles.rate}
      />
      <Text size={getWidth(13)} color={GRAY2} style={styles.spaceUp2}>
        {date}
      </Text>
      <Text size={getWidth(13)} style={styles.spaceUp}>
        {description}
      </Text>
    </View>
  );
};

const ReviewList = ({ data = [0] }) => {
  return (
    <View>
      <Text medium style={styles.reviewText} size={getWidth(18)} color={BLUE}>
        Opiniones
      </Text>
      {data.length < 1 ? (
        <Text>No existen opiniones</Text>
      ) : (
        data.map((item, index) => {
          return <ReviewItem index={index} />;
        })
      )}
      <AddOpinion />
    </View>
  );
};

const styles = StyleSheet.create({
  rate: {
    alignSelf: 'flex-start',
    marginTop: getHeight(5),
  },
  contentReview: {
    borderWidth: getWidth(1),
    marginTop: getHeight(8),
    borderColor: LIGHTER_GRAY,
    padding: getWidth(15),
  },
  spaceUp: {
    marginTop: getHeight(10),
  },
  reviewText: {
    marginVertical: getHeight(15),
  },
  spaceUp2: {
    marginTop: getHeight(5),
  },
  spaceRight: {
    marginRight: getHeight(10),
  },
});
export default ReviewList;
