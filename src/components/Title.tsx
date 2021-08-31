import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { DARKER_BLUE } from '../constants/colors';
import { TERMINABOLD } from '../constants/fonts';

export enum POSITION {
  LEFT = 'LEFT',
  CENTER = 'CENTER',
  RIGHT = 'RIGHT'
};

export enum HEADING {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6'
};

interface IProps {
  children:
      JSX.Element
      | JSX.Element[]
      | string;
  heading?: HEADING,
  position?: POSITION
};

const Title: React.FC<IProps> = ({
  children,
  heading = HEADING.H1,
  position = POSITION.LEFT
}) => {
  // @ts-ignore
  const headingStyles = styles[heading.toLowerCase()];
  // @ts-ignore
  const positionStyles = styles[position.toLowerCase()];

  return <View style={styles.wrapper}>
      <Text style={{
          ...styles.title,
          ...headingStyles,
          ...positionStyles
      }}>
          { children }
      </Text>
  </View>;
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 12
  },
  title: {
    color: DARKER_BLUE,
    fontFamily: TERMINABOLD,
    lineHeight: 28
  },
  left: {
    textAlign: 'left'
  },
  center: {
    textAlign: 'center'
  },
  right: {
    textAlign: 'right'
  },
  h1: {
    fontSize: 24
  },
  h2: {
    fontSize: 20
  }
});

export default Title;