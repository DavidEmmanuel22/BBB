import React from 'react';
import {Text as NativeText, StyleSheet, TextStyle} from 'react-native';

import {DARK} from '../constants/colors';
import {EFFRA} from '../constants/fonts';

interface IProps {
  children: JSX.Element | JSX.Element[] | string;
  onPress?(): void;
  size?: number;
  style?: object;
  color?: string;
  medium?: boolean;
}

const Text: React.FC<IProps> = ({
  children,
  size = 16,
  style = {},
  color = DARK,
  onPress = undefined,
  medium = false,
}) => {
  const stylesObj: TextStyle = {
    ...styles.text,
    fontSize: size,
    fontWeight: medium ? '600' : '400',
    color,
    ...style,
  };

  return (
    <NativeText style={stylesObj} onPress={onPress}>
      {children}
    </NativeText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: EFFRA,
    letterSpacing: 0.8,
  },
});

export default Text;
