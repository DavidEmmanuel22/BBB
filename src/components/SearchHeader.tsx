import React, { useRef, useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import { StackHeaderProps } from '@react-navigation/stack';
import { LIGHTER_GRAY2, WHITE } from '../constants/colors';
import { changeSelect, selectUIISelected } from '../store/slices/uiSlice';
import { useDispatch, useSelector } from 'react-redux';
import CategoryItem from './home/CategoryItem';
import { getHeight, getWidth } from '../utils/interfaceDimentions';
import Text from '../components/Text';
import IconGeneric from './IconGeneric';
import { selectUISubTitleHeader, selectUITitleHeader } from '../store/slices/uiSlice';
import { addSearch, changeData, recoverSearches, selectData } from '../store/slices/searchSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './Header';
import { CartController } from '../controllers/CartController';

interface itemNav {
  id: number;
  text: string;
  nameNav: string;
}
const categories: Array<itemNav> = [
  { id: 0, text: 'Destacados', nameNav: 'Index' },
  { id: 1, text: 'Categorías', nameNav: 'Categories' },
  { id: 2, text: 'Zona outlet', nameNav: '' },
  { id: 3, text: 'Marcas', nameNav: '' },
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
  const categorySelect = useSelector(selectUIISelected);
  const [showTab, setShowTab] = useState(false);
  const title = useSelector(selectUITitleHeader);
  const subTitle = useSelector(selectUISubTitleHeader);

  const { currentCart } = CartController();
  const numberItems = currentCart ? currentCart.items_count : 0;
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
      <Header>
        {showTab || isSearch ? (
          <View style={Styles.contentInput}>
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

            <TouchableOpacity disabled={true} style={Styles.searchImage}>
              <Image source={require('../assets/SearchIcon.png')} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={Styles.contentBack}>
            <IconGeneric
              onPress={() => {
                props.navigation.goBack();
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
          <TouchableOpacity style={Styles.touchCart} onPress={() => props.navigation.navigate('Cart')}>
            {numberItems > 0 && (
              <View style={Styles.carCount}>
                <Text size={getWidth(14)}>{numberItems}</Text>
              </View>
            )}
            <Image source={require('../assets/CarIcon.png')} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              dispatch(changeData(''));
              props.navigation.goBack();
            }}
            style={Styles.touchExit}
          >
            <Image source={require('../assets/Search/XIcon.png')} />
          </TouchableOpacity>
        )}
      </Header>

      {showTab && isSearch === false && (
        <View style={Styles.tabContainer}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={({ item }: any) => (
              <View key={item.id} style={{ marginRight: getWidth(28) }}>
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
  contentInput: { width: '80%' },
  contentBack: { width: '75%', flexDirection: 'row', alignItems: 'center' },
  touchExit: { alignSelf: 'center', marginLeft: getWidth(20) },
  touchCart: {
    alignSelf: 'center',
    marginLeft: getWidth(20),
  },
  carCount: {
    position: 'absolute',
    backgroundColor: 'white',
    width: getWidth(20),
    height: getWidth(20),
    borderRadius: getWidth(10),
    right: getWidth(-15),
    top: getWidth(-15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    marginLeft: getWidth(32),
    marginRight: getWidth(32),
    flexDirection: 'row',
  },
  input: {
    borderRadius: getWidth(200),
    backgroundColor: 'white',
    color: 'black',
    paddingLeft: getWidth(36),
    fontSize: getWidth(16),
  },
  qrButton: {
    position: 'absolute',
    height: '100%',
    right: getWidth(1),
    justifyContent: 'center',
    marginRight: getWidth(20),
  },
  cleanButton: {
    position: 'absolute',
    height: '100%',
    right: getWidth(1),
    justifyContent: 'center',
    marginRight: getWidth(20),
  },
  searchImage: {
    position: 'absolute',
    height: '100%',
    left: getWidth(1),
    justifyContent: 'center',
    marginLeft: getWidth(11),
  },
});

export default SearchHeader;
