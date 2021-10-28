import React from 'react';
import { TouchableOpacity } from 'react-native';
import SvgIcon from 'react-native-svg-icon';

import icons from '../utils/iconList';
interface IProps {
  iconColor: string;
  onPress?: any;
  name: string;
  height?: number;
  width?: number;
}
const IconGeneric = ({ iconColor = '', onPress, width, height, name, ...rest }: IProps) =>
  onPress ? (
    <TouchableOpacity onPress={onPress}>
      <SvgIcon width={width} height={height} name={name} fill={iconColor} {...rest} svgs={icons} />
    </TouchableOpacity>
  ) : (
    <SvgIcon width={width} height={height} name={name} fill={iconColor} {...rest} svgs={icons} />
  );

export default IconGeneric;
