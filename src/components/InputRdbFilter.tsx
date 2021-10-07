/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { TouchableOpacity, View, Text, ButtonProps, StyleSheet } from 'react-native';
import IconGeneric from '../components/IconGeneric';
import { PRIMARY_BLUE, LIGHTER_GRAY2, DARK, GRAY, GREEN_FILTERS } from '../constants/colors';
import { FilterController } from '../controllers/FilterController';
import { getHeight, getWidth } from '../utils/interfaceDimentions';
import Icon from 'react-native-vector-icons/Ionicons';

interface IProps {
  iconRdb?: Boolean;
  notIcon?: Boolean;
  collapsable?: Boolean;
  icon?: String;
  text?: String;
}

const InputRdbFilter: React.FC<IProps> = ({
  iconRdb = true,
  notIcon = true,
  collapsable = true,
  icon = '',
  text = '',
}) => {
  const { testMetodo, testMetodoChb, rdbChecked, chbChecked } = FilterController();
  return notIcon ? (
    <View style={collapsable ? radioStyle.btn : radioStyle.btnIn}>
      <IconGeneric
        name={iconRdb ? (rdbChecked ? 'rdbChecked' : 'rdb') : chbChecked ? 'chbChecked' : 'chb'}
        iconColor={iconRdb ? (rdbChecked ? GREEN_FILTERS : LIGHTER_GRAY2) : chbChecked ? GREEN_FILTERS : LIGHTER_GRAY2}
        width={100}
        height={100}
        onPress={iconRdb ? testMetodo : testMetodoChb}
      />
      <Text style={radioStyle.text} onPress={iconRdb ? testMetodo : testMetodoChb}>
        {text}
      </Text>
      {collapsable ? (
        <Icon style={radioStyle.leftSpace} color={GRAY} size={getWidth(20)} name="chevron-down-outline" />
      ) : null}
    </View>
  ) : (
    <TouchableOpacity style={radioStyle.btn} onPress={iconRdb ? testMetodo : testMetodoChb}>
      <IconGeneric
        name={iconRdb ? (rdbChecked ? 'rdbChecked' : 'rdb') : chbChecked ? 'chbChecked' : 'chb'}
        iconColor={iconRdb ? (rdbChecked ? GREEN_FILTERS : LIGHTER_GRAY2) : chbChecked ? GREEN_FILTERS : LIGHTER_GRAY2}
        width={100}
        height={100}
      />
      <IconGeneric name={icon} iconColor={DARK} width={100} height={100} style={radioStyle.text} />

      <Text style={radioStyle.text}>{text} </Text>
    </TouchableOpacity>
  );
};

const radioStyle = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    height: 35,
    marginLeft: 30,
  },
  btnIn: {
    flexDirection: 'row',
    height: 35,
    marginLeft: 50,
  },
  text: {
    marginTop: 0,
    marginLeft: -60,
  },
  leftSpace: {
    marginLeft: getWidth(50),
  },
});

export default InputRdbFilter;
