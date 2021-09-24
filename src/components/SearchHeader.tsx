import React, { useRef, useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import { StackHeaderProps } from '@react-navigation/stack';
import { BLUE, LIGHTER_GRAY2 } from '../constants/colors';
import { changeSelect, selectUIISelected } from '../store/slices/uiSlice';
import { useDispatch, useSelector } from 'react-redux';

interface itemNav {
  id: Number;
  text: string;
  nameNav: string;
}
const categories: Array<itemNav> = [
  { id: 0, text: 'Destacados', nameNav: 'Index' },
  { id: 1, text: 'Categorías', nameNav: 'Categories' },
  { id: 2, text: 'Zona oulet', nameNav: '' },
  { id: 4, text: 'Mesa', nameNav: '' },
];
interface IProps extends StackHeaderProps {
  close?: boolean;
}

const SearchHeader: React.FC<IProps> = ({ close = false, ...props }) => {
  const dispatch = useDispatch();
  const categorySelect = useSelector(selectUIISelected);
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
  const handleNav = (item: itemNav) => {
    props.navigation.navigate(item.nameNav);
    dispatch(changeSelect(item.text));
  };

  return (

    <View style={{ width: "100%", height: 90, backgroundColor: BLUE, justifyContent: 'center', alignItems: 'center' }}>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: "75%" }}>
          <TextInput placeholder="Busca tu producto"
            placeholderTextColor={LIGHTER_GRAY2}
            onFocus={handleFocus}
            ref={searchInputRef}
            style={{ borderRadius: 200, backgroundColor: 'white', color: 'black', paddingLeft: 36, fontSize: 16, height: 40 }}></TextInput>
          <TouchableOpacity style={{ position: 'absolute', right: 1, marginTop: 12, marginRight: 20 }}>
            <Image source={require('../assets/QRIcon.png')}></Image>
          </TouchableOpacity>

          <Image style={{ position: 'absolute', left: 1, marginTop: 10, marginLeft: 12 }} source={require('../assets/SearchIcon.png')}></Image>
        </View>
        <TouchableOpacity style={{ alignSelf: 'center', marginLeft: 20 }}>
          <Image source={require('../assets/CarIcon.png')}></Image>
        </TouchableOpacity>

      </View>

    </View>

  );
};


export default SearchHeader;
