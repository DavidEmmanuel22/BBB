import {Dimensions} from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const designWidth = 375;
export const designHeight = 812;

export const getWidth = (size: number) => {
  return (windowWidth * size) / designWidth;
};

export const getHeight = (size: number) => {
  return (windowHeight * size) / designHeight;
};
