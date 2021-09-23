import React from 'react';
import {Text as NativeText, StyleSheet} from 'react-native';

import {DARK} from '../constants/colors';
import {EFFRA} from '../constants/fonts';

interface IProps {
  children: JSX.Element | JSX.Element[] | string;
  onPress?(): void;
  size?: number;
  style?: object;
  color?: string;
}

const Text: React.FC<IProps> = ({
  children,
  size = 16,
  style = {},
  color = DARK,
  onPress = undefined,
}) => {
  const stylesObj = {
    ...styles.text,
    fontSize: size,
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
    fontWeight: '400',
    letterSpacing: 0.8,
  },
});

export default Text;
