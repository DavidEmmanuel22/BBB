import React from 'react';
import { Text as NativeText, StyleSheet, TextStyle } from 'react-native';

import { DARK } from '../constants/colors';
import { EFFRA, EFFRA_BOLD } from '../constants/fonts';
import { getWidth } from '../utils/interfaceDimentions';

interface IProps {
  children: React.ReactNode | React.ReactNode[] | string;
  onPress?(): void;
  size?: number;
  style?: object;
  color?: string;
  medium?: boolean;
  bold?: boolean;
}

const Text: React.FC<IProps> = ({
  children,
  size = getWidth(16),
  style = {},
  color = DARK,
  onPress = undefined,
  medium = false,
  bold = false,
}) => {
  const stylesObj: TextStyle = {
    ...styles.text,
    fontSize: size,
    fontWeight: medium ? '600' : '400',
    color,
    fontFamily: bold ? EFFRA_BOLD : EFFRA,
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
    letterSpacing: 0.8,
  },
});

export default Text;
