import React, { useRef, useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { StackHeaderProps } from '@react-navigation/stack';
import { BLUE, LIGHTER_GRAY2, WHITE } from '../constants/colors';
import { changeSelect, selectUIISelected } from '../store/slices/uiSlice';
import { useDispatch, useSelector } from 'react-redux';
import CategoryItem from './home/CategoryItem';
import { getHeight, getWidth } from '../utils/interfaceDimentions';
import { StyleSheet } from 'react-native';
import { RowContent } from '../utils/stylesGenetic';
import Text from '../components/Text';
import IconGeneric from './IconGeneric';
import { useNavigation } from '@react-navigation/native';
import { selectUISubTitleHeader, selectUITitleHeader } from '../store/slices/uiSlice';
import { addSearch, changeData, recoverSearches, selectData } from '../store/slices/searchSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
const ScreensWithoutTabs = ['ProductsByCategory', 'ProductDetail'];

const SearchHeader: React.FC<IProps> = ({ ...props }) => {
  const [showQR, setShowQR] = useState(true);
  const [isSearch, setIsSearch] = useState(true);
  const searchText = useSelector(selectData);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const categorySelect = useSelector(selectUIISelected);
  const [showTab, setShowTab] = useState(false);
  const title = useSelector(selectUITitleHeader);
  const subTitle = useSelector(selectUISubTitleHeader);
  const searchInputRef = useRef<TextInput>(null);
  useEffect(() => {
    if (typeof props.route.name === 'string' && ScreensWithoutTabs.includes(props.route.name)) {
      setShowTab(false);
      setIsSearch(false);
    } else {
      setShowTab(true);
      setIsSearch(false);
    }
    if (typeof props.route.name === 'string' && props.route.name === 'Search') {
      searchInputRef?.current?.focus();
      setShowQR(!showQR);
      setShowTab(false);
      setIsSearch(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.route]);

  useEffect(() => {
    const searches = async () => {
      let jsonSearches = await AsyncStorage.getItem('searches');
      if (jsonSearches) {
        dispatch(recoverSearches(JSON.parse(jsonSearches)));
      }
    };
    searches();
  });

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
      <View style={Styles.contentHeader}>
        <View style={RowContent}>
          {showTab || isSearch ? (
            <View style={{ width: '75%' }}>
              <TextInput
                value={searchText}
                placeholder="Busca tu producto"
                placeholderTextColor={LIGHTER_GRAY2}
                onChangeText={(text) => dispatch(changeData(text))}
                onFocus={handleFocus}
                ref={searchInputRef}
                onSubmitEditing={() => dispatch(addSearch(searchText))}
                style={Styles.input}
              />

              {showQR ? (
                <TouchableOpacity style={Styles.qrButton}>
                  <Image source={require('../assets/QRIcon.png')} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    dispatch(changeData(''));
                  }}
                  style={Styles.cleanButton}
                >
                  <Image source={require('../assets/Search/CleanIcon.png')} />
                </TouchableOpacity>
              )}

              <Image style={Styles.searchImage} source={require('../assets/SearchIcon.png')} />
            </View>
          ) : (
            <View style={{ width: '75%', flexDirection: 'row', alignItems: 'center' }}>
              <IconGeneric
                onPress={() => {
                  navigation.goBack();
                }}
                name={'backButton'}
                iconColor={WHITE}
                width={getWidth(20)}
                height={getWidth(20)}
              />
              <View style={{ marginLeft: getWidth(10) }}>
                <Text color={WHITE} size={getWidth(14)}>
                  {title}
                </Text>
                <Text medium color={WHITE} size={getWidth(18)}>
                  {subTitle}
                </Text>
              </View>
            </View>
          )}
          {showQR ? (
            <TouchableOpacity style={{ alignSelf: 'center', marginLeft: 20 }}>
              <Image source={require('../assets/CarIcon.png')} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                dispatch(changeData(''));
                navigation.goBack();
              }}
              style={{ alignSelf: 'center', marginLeft: 20 }}
            >
              <Image source={require('../assets/Search/XIcon.png')} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {showTab && isSearch === false && (
        <View style={Styles.tabContainer}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={({ item }: any) => (
              <View key={item.id} style={{ marginRight: 28 }}>
                <CategoryItem
                  isSelected={item.id === categorySelect}
                  label={item.text}
                  onPress={() => {
                    handleNav(item);
                  }}
                />
              </View>
            )}
            keyExtractor={(item) => 'key' + item.id}
          />
        </View>
      )}
    </>
  );
};
const Styles = StyleSheet.create({
  tabContainer: {
    marginLeft: 32,
    marginRight: 32,
    flexDirection: 'row',
  },
  contentHeader: {
    width: '100%',
    height: getHeight(100),
    backgroundColor: BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: getHeight(15),
  },
  input: {
    borderRadius: 200,
    backgroundColor: 'white',
    color: 'black',
    paddingLeft: 36,
    fontSize: 16,
    height: 40,
  },
  qrButton: {
    position: 'absolute',
    right: 1,
    marginTop: 12,
    marginRight: 20,
  },
  cleanButton: {
    position: 'absolute',
    right: 1,
    marginTop: 9,
    marginRight: 14,
  },
  searchImage: {
    position: 'absolute',
    left: 1,
    marginTop: 10,
    marginLeft: 12,
  },
});

export default SearchHeader;
