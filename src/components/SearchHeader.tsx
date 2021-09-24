import React, {useRef, useEffect} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {StackHeaderProps} from '@react-navigation/stack';

import Container, {StatusBarStyle} from './Container';
import Icon from './Icon';
import {DARK, BLUE, WHITE, LIGHTER_GRAY2} from '../constants/colors';
import {EFFRA} from '../constants/fonts';
import {getHeight, getWidth} from '../utils/interfaceDimentions';

interface IProps extends StackHeaderProps {
  close?: boolean;
}

const SearchHeader: React.FC<IProps> = ({close = false, ...props}) => {
  const searchInputRef = useRef<any>(null);

  useEffect(() => {
    if (typeof props.route.name === 'string' && props.route.name === 'Search') {
      searchInputRef.current.focus();
    }
  }, [props.route]);

  const handleFocus = () => {
    if (typeof props.route.name === 'string' && props.route.name !== 'Search') {
      props.navigation.navigate('Search');
    }
  };

  return (
    <View style={styles.container}>
      <Container
        scroll={false}
        contentWrapperStyles={styles.wrapper}
        statusBarStyle={StatusBarStyle.LIGHT}>
        <View style={styles.formGroup}>
          <Icon
            name="search-icon"
            size={16}
            color={LIGHTER_GRAY2}
            style={[styles.icon, styles.searchIcon]}
          />
          <TextInput
            placeholder="Busca tu producto"
            placeholderTextColor={LIGHTER_GRAY2}
            onFocus={handleFocus}
            ref={searchInputRef}
            style={styles.formControl}
          />
          <Icon
            name="barcode-icon"
            size={16}
            color={DARK}
            onPress={() => {}}
            style={[styles.icon, styles.barcodeIcon]}
          />
        </View>
        <View style={styles.headerRight}>
          <Icon
            name="cart-icon"
            size={24}
            color={WHITE}
            style={styles.cartIcon}
            onPress={() => {}}
          />
          {close && (
            <Icon
              name="cross-icon"
              size={22}
              color={WHITE}
              style={styles.crossIcon}
              onPress={() => {}}
            />
          )}
        </View>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: BLUE,
    height: getHeight(100),
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formGroup: {
    flex: 1,
    position: 'relative',
    marginRight: getWidth(20),
  },
  formControl: {
    backgroundColor: WHITE,
    fontFamily: EFFRA,
    fontSize: getWidth(16),
    height: getHeight(30),
    paddingLeft: getWidth(36),
    paddingRight: getWidth(36),
    borderRadius: getWidth(15),
    width: '100%',
  },
  icon: {
    position: 'absolute',
    top: getHeight(9),
    zIndex: 1,
  },
  searchIcon: {
    left: getWidth(14),
  },
  barcodeIcon: {
    top: getHeight(10),
    right: getWidth(16),
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  crossIcon: {
    marginLeft: getHeight(10),
  },
});

export default SearchHeader;
