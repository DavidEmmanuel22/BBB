import React from 'react';
import { TouchableOpacity, View, Text, ButtonProps, StyleSheet } from 'react-native';

import { PRIMARY_BLUE, LIGHTER_GRAY, DARK, WHITE } from '../constants/colors';

export enum BUTTONTYPE {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY'
};

enum ICON_POSITION {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT'
};

interface IProps extends ButtonProps {
  type?: BUTTONTYPE,
  iconPosition?: ICON_POSITION,
  containerStyle?: Object,
  textStyle?: Object,
  icon?(): JSX.Element,
  iconStyle?: Object
};

const Button: React.FC<IProps> = ({
  onPress,
  title,
  type = BUTTONTYPE.PRIMARY,
  containerStyle = {},
  textStyle = {},
  icon = null,
  iconStyle = {}
}) => {
  const buttonTypeStyles = () => {
    switch (type) {
      case BUTTONTYPE.PRIMARY:
        return [styles.primary, styles.primaryText];
      case BUTTONTYPE.SECONDARY:
        return [styles.secondary, styles.secondaryText]
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View
        style={{
          ...styles.btn,
          ...buttonTypeStyles()[0],
          ...containerStyle
        }}
      >
        { icon !== null
          ? <View style={{ ...styles.iconContainer, ...iconStyle}}>
            { icon() }
          </View>
          : null
        }
        <Text
          style={{
            ...styles.btnText,
            ...buttonTypeStyles()[1],
            ...textStyle
          }}
        >
          { title }
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    flexDirection: 'row',
    height: 52,
    justifyContent: 'center',
    marginTop: 4,
    marginBottom: 4
  },
  btnText: {
    alignItems: 'center',
    fontFamily: 'Effra',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: DARK
  },
  primary: {
    backgroundColor: PRIMARY_BLUE,
    borderColor: PRIMARY_BLUE
  },
  primaryText: {
    color: WHITE
  },
  secondary: {
    borderColor: LIGHTER_GRAY
  },
  secondaryText: {
    color: PRIMARY_BLUE
  },
  iconContainer: {
    marginRight: 10
  }
});

export default Button;