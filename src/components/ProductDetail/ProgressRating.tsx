import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GRAY2, PRIMARY_BLUE } from '../../constants/colors';
import { getHeight, getWidth } from '../../utils/interfaceDimentions';
import { RowContent } from '../../utils/stylesGenetic';
import Text from '../Text';
import ProgressBar from './ProgressBar';
const RatingProgress = ({ stars = 5, count = 3, totalCount = 10 }) => {
  return (
    <View style={[RowContent, styles.spaceUp, styles.ratingProgress]}>
      <Text size={getWidth(14)}>{`${stars} estrellas`}</Text>
      <ProgressBar totalSteps={totalCount} index={count} />
      <Text color={count > 0 ? PRIMARY_BLUE : GRAY2} size={getWidth(14)}>
        {count}
      </Text>
    </View>
  );
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

export default RatingProgress;
