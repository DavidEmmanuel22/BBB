import React from 'react';
import { View, ViewStyle } from 'react-native';
import { LIGHTER_GRAY, PRIMARY_BLUE } from '../../constants/colors';
import { getHeight, getWidth } from '../../utils/interfaceDimentions';
const ProgressBar = ({
  color = PRIMARY_BLUE,
  index = 0,
  totalSteps = 5,
  styleContain = {},
  styleBar = {},
  width = getWidth(200),
}) => {
  return (
    <View style={[bar(width), styleContain]}>
      <View style={[progress(index, totalSteps, color), styleBar]} />
    </View>
  );
};

const bar = (width = getWidth(200)): ViewStyle => {
  return {
    height: getHeight(12),
    backgroundColor: LIGHTER_GRAY,
    width,
  };
};
const progress = (step = 0, totalSteps = 5, color = PRIMARY_BLUE): ViewStyle => ({
  width: `${step * (100 / totalSteps)}%`,
  height: '100%',
  alignSelf: 'flex-start',
  backgroundColor: color,

  borderRadius: getWidth(2.5),
});

export default ProgressBar;
