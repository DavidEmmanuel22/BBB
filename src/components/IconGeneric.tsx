import React from 'react';
import { TouchableOpacity } from 'react-native';
import SvgIcon from 'react-native-svg-icon';

import icons from '../utils/iconList';

const IconGeneric = ({ iconColor = '', onPress = () => {}, ...rest }) =>
  onPress ? (
    <TouchableOpacity onPress={onPress}>
      <SvgIcon fill={iconColor} {...rest} svgs={icons} />
    </TouchableOpacity>
  ) : (
    <SvgIcon fill={iconColor} {...rest} svgs={icons} />
  );

export default IconGeneric;
