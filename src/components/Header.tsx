import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import Icon from './Icon';

import { getHeight } from '../utils/interfaceDimentions';
import { RowContent } from '../utils/stylesGenetic';

import { BLUE, WHITE } from '../constants/colors';

interface IProps {
  children: React.ReactNode | React.ReactNode[] | string;
  backButton?: boolean;
}

const Header: React.FC<IProps> = ({ children, backButton = false }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.contentHeader}>
      {backButton && (
        <TouchableOpacity style={styles.backArrow} onPress={() => navigation.goBack()}>
          <Icon name="back-arrow-icon" size={22} color={WHITE} />
        </TouchableOpacity>
      )}
      <View style={RowContent}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentHeader: {
    width: '100%',
    height: getHeight(100),
    backgroundColor: BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: getHeight(35),
    position: 'relative',
  },
  backArrow: {
    position: 'absolute',
    bottom: 13,
    left: 24,
  },
});

export default Header;
