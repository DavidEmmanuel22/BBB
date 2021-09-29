import React, {useRef, useEffect, useState} from 'react';
import {View, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import {StackHeaderProps} from '@react-navigation/stack';
import {BLUE, LIGHTER_GRAY2} from '../constants/colors';
import {changeSelect, selectUIISelected} from '../store/slices/uiSlice';
import {useDispatch, useSelector} from 'react-redux';
import CategoryItem from '../components/core/home/CategoryItem';
import {getHeight} from '../utils/interfaceDimentions';

interface itemNav {
  id: Number;
  text: string;
  nameNav: string;
}
const categories: Array<itemNav> = [
  {id: 0, text: 'Destacados', nameNav: 'Index'},
  {id: 1, text: 'Categorías', nameNav: 'Categories'},
  {id: 2, text: 'Zona oulet', nameNav: ''},
  {id: 4, text: 'Mesa', nameNav: ''},
];
interface IProps extends StackHeaderProps {
  close?: boolean;
}

const SearchHeader: React.FC<IProps> = ({close = false, ...props}) => {
  const dispatch = useDispatch();
  const categorySelect = useSelector(selectUIISelected);
  const [showTab, setShowTab] = useState(false);
  const searchInputRef = useRef<any>(null);
  useEffect(() => {
    if (typeof props.route.name === 'string' && props.route.name === 'Search') {
      searchInputRef.current.focus();
    }
    if (
      typeof props.route.name === 'string' &&
      props.route.name === 'Products'
    ) {
      setShowTab(false);
    } else {
      setShowTab(true);
    }
  }, [props.route]);

  const handleFocus = () => {
    if (typeof props.route.name === 'string' && props.route.name !== 'Search') {
      props.navigation.navigate('Search');
    }
  };
  const handleNav = (item: itemNav) => {
    dispatch(changeSelect(item.id));
  };

  return (
    <>
      <View
        style={{
          width: '100%',
          height: getHeight(100),
          backgroundColor: BLUE,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: getHeight(15),
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '75%'}}>
            <TextInput
              placeholder="Busca tu producto"
              placeholderTextColor={LIGHTER_GRAY2}
              onFocus={handleFocus}
              ref={searchInputRef}
              style={{
                borderRadius: 200,
                backgroundColor: 'white',
                color: 'black',
                paddingLeft: 36,
                fontSize: 16,
                height: 40,
              }}></TextInput>
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: 1,
                marginTop: 12,
                marginRight: 20,
              }}>
              <Image source={require('../assets/QRIcon.png')}></Image>
            </TouchableOpacity>

            <Image
              style={{
                position: 'absolute',
                left: 1,
                marginTop: 10,
                marginLeft: 12,
              }}
              source={require('../assets/SearchIcon.png')}></Image>
          </View>
          <TouchableOpacity style={{alignSelf: 'center', marginLeft: 20}}>
            <Image source={require('../assets/CarIcon.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
      {showTab && (
        <View style={{flexDirection: 'row'}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={({item}: any) => (
              <View key={item.id} style={{marginRight: 28}}>
                <CategoryItem
                  isSelected={item.id === categorySelect}
                  label={item.text}
                  onPress={() => {
                    handleNav(item);
                  }}
                />
              </View>
            )}
            keyExtractor={item => 'key' + item.id}
          />
        </View>
      )}
    </>
  );
};

export default SearchHeader;
