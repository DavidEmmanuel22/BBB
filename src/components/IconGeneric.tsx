import React from 'react';
import { TouchableOpacity } from 'react-native';
import SvgIcon from 'react-native-svg-icon';

import icons from '../utils/iconList';

const IconGeneric = ({ iconColor = '', onPress = () => {}, ...rest }) =>
  onPress ? (
    <TouchableOpacity hitSlop={{ left: 20, right: 20, top: 20, bottom: 20 }} onPress={onPress}>
      <SvgIcon fill={iconColor} {...rest} svgs={icons} />
    </TouchableOpacity>
  ) : (
    <SvgIcon fill={iconColor} {...rest} svgs={icons} />
  );

export default IconGeneric;
