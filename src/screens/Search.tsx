import React, { useEffect } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, ScrollView, Modal, FlatList } from 'react-native';
import TextComponent from '../components/Text';
import { useDispatch, useSelector } from 'react-redux';
import { BLUE, DARK, GRAY, LIGHTER_GRAY, LIGHTER_GRAY2, PRIMARY_BLUE } from '../constants/colors';
import {
  changeData,
  selectData,
  selectSearches,
  selectObjects,
  selectEnterKeyPressed,
  setMarcaClicked,
  selectMarcas,
  selectProducts,
} from '../store/slices/searchSlice';
import { SearchController } from '../controllers/SearchController';
import { EFFRA } from '../constants/fonts';
import { getHeight, getWidth } from '../utils/interfaceDimentions';
import { RowContent } from '../utils/stylesGenetic';
import { separateDecimals } from '../utils/separeteDecimals';
import { useNavigation } from '@react-navigation/core';
import { Product } from '../components/Search/Product';

const Search: React.FC = () => {
  const { findItems, showModal, setshowModal, startAmount, setstartAmount } = SearchController();

  const dispatch = useDispatch();
  const searchText = useSelector(selectData);
  const searches = useSelector(selectSearches);
  const items = useSelector(selectObjects);
  const enterKey = useSelector(selectEnterKeyPressed);
  const marcas = useSelector(selectMarcas);
  const products = useSelector(selectProducts);
  const navigation: any = useNavigation();

  const loadMore = () => {
    setstartAmount(startAmount + 50);
    findItems(searchText, '50');
  };

  useEffect(() => {
    setstartAmount(0);
    if (searchText.length >= 3) {
      findItems(searchText, '50');
    }
  }, [searchText]);

  return (
    <View>
      {marcas ? (
        <Modal transparent={true} animationType="slide" visible={showModal} onRequestClose={() => {}}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Marcas</Text>

            <TouchableOpacity style={styles.modalXImage} onPress={() => setshowModal(!showModal)}>
              <Image source={require('../assets/NewPassword/XIcon.png')} />
            </TouchableOpacity>

            <ScrollView>
              {marcas.map((item) => (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      setshowModal(!showModal);
                      dispatch(setMarcaClicked(true));
                      dispatch(changeData(item.value));
                    }}
                    style={styles.itemContainer}
                  >
                    <Image style={styles.QRImage} source={require('../assets/Search/StarIcon.png')} />

                    <Text numberOfLines={1} style={styles.itemText}>
                      {item.value}
                    </Text>
                  </TouchableOpacity>
                  <View style={styles.itemSeparator} />
                </>
              ))}
            </ScrollView>
          </View>
        </Modal>
      ) : (
        <></>
      )}

      {enterKey ? (
        searchText.length <= 2 ? (
          <View>
            <TouchableOpacity style={styles.itemContainer}>
              <Image style={styles.QRImage} source={require('../assets/QRIcon.png')} />

              <Text numberOfLines={1} style={styles.itemText}>
                Escanear código
              </Text>
            </TouchableOpacity>
            <View style={styles.itemSeparator} />

            <ScrollView style={{ height: '75%' }}>
              {searches.length > 0 ? (
                searches.map((items) => (
                  <TouchableOpacity onPress={() => dispatch(changeData(items))} style={styles.searchContainer}>
                    <View style={{ flexDirection: 'row' }}>
                      <Image style={styles.searchImage} source={require('../assets/Search/SearchIcon.png')} />
                      <Text numberOfLines={1} style={styles.searchText}>
                        {items}
                      </Text>
                    </View>

                    <View style={styles.searchSeparator} />
                  </TouchableOpacity>
                ))
              ) : (
                <TouchableOpacity disabled={true} style={styles.itemContainer}>
                  <Image style={styles.QRImage} source={require('../assets/Search/FindIcon.png')} />

                  <Text numberOfLines={1} style={[styles.itemText, { color: LIGHTER_GRAY2 }]}>
                    Sin búsquedas recientes
                  </Text>
                </TouchableOpacity>
              )}
            </ScrollView>
          </View>
        ) : (
          <View>
            <TextComponent style={styles.Amount}>
              {items?.placements[0].numFound} {products ? 'coincidencias' : ''}
            </TextComponent>
            {marcas ? (
              <TouchableOpacity
                onPress={() => setshowModal(!showModal)}
                style={{ position: 'absolute', right: 1, marginRight: 28, marginTop: 16, flexDirection: 'row' }}
              >
                <TextComponent
                  style={{
                    color: PRIMARY_BLUE,
                    marginRight: 8,
                  }}
                >
                  Marcas
                </TextComponent>
                <Image
                  style={{ height: 16, width: 16, alignSelf: 'center' }}
                  source={require('../assets/Search/FiltrarIcon.png')}
                />
              </TouchableOpacity>
            ) : (
              <></>
            )}

            <FlatList
              key={'_'}
              keyExtractor={(item) => '_' + item.id}
              numColumns={1}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  key={'_' + item.id}
                  onPress={() => {
                    navigation.navigate('ProductDetail', { sku: item.id });
                  }}
                  style={styles.itemsContainer}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <Image style={styles.itemImage} source={{ uri: item.imageId }} />

                    <Text numberOfLines={1} style={styles.itemText}>
                      {item.name}
                    </Text>
                  </View>
                  <View style={styles.itemSeparator} />
                </TouchableOpacity>
              )}
              data={products}
              onEndReached={loadMore}
            />
          </View>
        )
      ) : (
        <View style={{ height: '100%' }}>
          <TextComponent style={styles.Amount}>
            {items?.placements[0].numFound} {products ? 'coincidencias' : ''}
          </TextComponent>

          <TouchableOpacity
            onPress={() => setshowModal(!showModal)}
            style={{ position: 'absolute', right: 1, marginRight: 28, marginTop: 16, flexDirection: 'row' }}
          >
            <TextComponent
              style={{
                color: PRIMARY_BLUE,
                marginRight: 8,
              }}
            >
              Marcas
            </TextComponent>
            <Image
              style={{ height: 16, width: 16, alignSelf: 'center' }}
              source={require('../assets/Search/FiltrarIcon.png')}
            />
          </TouchableOpacity>

          <FlatList
            key={'#'}
            keyExtractor={(item) => '#' + item.id}
            contentContainerStyle={{ alignItems: 'center' }}
            numColumns={2}
            renderItem={({ item, index }) => <Product key={'#' + item.id} item={item} />}
            data={products}
            onEndReached={loadMore}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    position: 'absolute',
    bottom: 1,
    right: 1,
    left: 1,
    borderRadius: 12,
    height: '50%',
  },
  modalTitle: {
    marginLeft: 26,
    marginTop: 20,
    fontFamily: EFFRA,
    fontSize: 18,
  },
  modalXImage: {
    position: 'absolute',
    right: 1,
    marginRight: 30,
    marginTop: 30,
  },
  itemContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 12,
  },
  itemsContainer: {
    marginHorizontal: 20,
    marginTop: 12,
  },
  QRImage: {
    alignSelf: 'center',
  },
  itemImage: {
    width: 45,
    height: 45,
  },
  itemText: {
    alignSelf: 'center',
    marginLeft: 12,
    fontFamily: EFFRA,
    fontSize: 16,
    color: DARK,
    marginRight: 20,
  },
  itemSeparator: {
    height: 1,
    backgroundColor: LIGHTER_GRAY,
    marginTop: 10,
    marginHorizontal: 10,
  },
  searchContainer: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  searchImage: {
    marginLeft: 10,
    marginTop: 5,
    marginRight: 2,
  },
  searchText: {
    alignSelf: 'flex-start',
    marginLeft: 12,
    fontFamily: EFFRA,
    fontSize: 16,
    color: DARK,
    marginRight: 20,
  },
  searchSeparator: {
    height: 1,
    backgroundColor: LIGHTER_GRAY,
    marginHorizontal: 10,
    marginTop: 6,
  },
  Amount: {
    marginLeft: 24,
    marginTop: 16,
  },
  contain: {
    width: getWidth(160),
    height: getHeight(290),
    marginTop: getHeight(8),
    marginHorizontal: getWidth(4),
    borderColor: LIGHTER_GRAY,
    borderWidth: getWidth(1),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    height: getWidth(128),
    width: getWidth(128),
  },
  description: {
    maxHeight: getHeight(40),
    textAlign: 'center',
    marginHorizontal: getWidth(8),
  },
  contentPrice: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'stretch',
  },
  normal: {},
  discount: {
    textDecorationLine: 'line-through',
  },
  button: {
    marginHorizontal: getWidth(8),
    borderColor: LIGHTER_GRAY,
    borderWidth: getWidth(1),
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: getHeight(8),
  },
  wrapperColumn: {
    justifyContent: 'space-between',
  },
});

export default Search;
