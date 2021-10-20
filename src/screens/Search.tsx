import React, { useEffect } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, ScrollView, Modal, Alert } from 'react-native';
import TextComponent from '../components/Text';
import { useDispatch, useSelector } from 'react-redux';
import { BLUE, BRAND_BLUE, DARK, GRAY, LIGHTER_GRAY, LIGHTER_GRAY2, PRIMARY_BLUE } from '../constants/colors';
import {
  changeData,
  selectData,
  selectSearches,
  selectObjects,
  selectEnterKeyPressed,
  setMarcaClicked,
  selectMarcaClicked,
} from '../store/slices/searchSlice';
import { SearchController } from '../controllers/SearchController';
import { EFFRA, EFFRA_BOLD } from '../constants/fonts';
import { getHeight, getWidth } from '../utils/interfaceDimentions';
import { RowContent } from '../utils/stylesGenetic';
import { separateDecimals } from '../utils/separeteDecimals';
import { useNavigation } from '@react-navigation/core';
import { selectMarcas } from '../store/slices/searchSlice';

const Search: React.FC = () => {
  const { findItems, buscando, showModal, setshowModal, startAmount, setstartAmount } = SearchController();

  const dispatch = useDispatch();
  const searchText = useSelector(selectData);
  const searches = useSelector(selectSearches);
  const items = useSelector(selectObjects);
  const enterKey = useSelector(selectEnterKeyPressed);
  const marcas = useSelector(selectMarcas);
  const marcaClicked = useSelector(selectMarcaClicked);
  const navigation = useNavigation();

  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
  };

  useEffect(() => {
    setstartAmount(0);
    if (searchText.length >= 3) {
      findItems(searchText, '150', startAmount + '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            {/*
            <TouchableOpacity style={styles.itemContainer}>
              <Image style={styles.QRImage} source={require('../assets/Search/CategoriesIcon.png')} />

              <Text numberOfLines={1} style={styles.itemText}>
                Explorar categorías
              </Text>
            </TouchableOpacity>
            <View style={styles.itemSeparator} />
            */}

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
                <TouchableOpacity style={styles.itemContainer}>
                  <Image style={styles.QRImage} source={require('../assets/Search/FindIcon.png')} />

                  <Text numberOfLines={1} style={[styles.itemText, { color: LIGHTER_GRAY2 }]}>
                    Sin búsquedas recientes
                  </Text>
                </TouchableOpacity>
              )}
            </ScrollView>
          </View>
        ) : (
          <ScrollView style={{ height: '100%' }}>
            <TextComponent style={styles.Amount}>
              {items?.placements[0].numFound} {items?.placements[0].docs ? 'coincidencias' : ''}
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

            {items?.placements[0].docs.length ? (
              items?.placements[0].docs.map((item) => (
                <TouchableOpacity
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
              ))
            ) : buscando ? (
              <View />
            ) : (
              <View>
                <Image
                  style={{ alignSelf: 'center', marginTop: '50%', height: 55, width: 70 }}
                  source={require('../assets/Search/NotFinfIcon.png')}
                />
                <Text style={{ alignSelf: 'center', marginTop: 12, fontFamily: EFFRA_BOLD, fontSize: 16 }}>
                  Lo sentimos, no encontramos tu producto.
                </Text>
              </View>
            )}
          </ScrollView>
        )
      ) : (
        <ScrollView
          onScroll={({ nativeEvent }) => {
            if (isCloseToBottom(nativeEvent)) {
              setstartAmount(startAmount + 150);
              findItems(searchText, '150', startAmount + '');
            }
          }}
        >
          <TextComponent style={styles.Amount}>
            {items?.placements[0].numFound} {items?.placements[0].docs ? 'coincidencias' : ''}
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
          <View style={styles.showItemContainer}>
            {items?.placements[0].docs.map((item) => (
              <View style={styles.contain}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ProductDetail', { sku: item.id });
                  }}
                >
                  <Image
                    style={styles.image}
                    source={{
                      uri: item.imageId,
                    }}
                  />
                </TouchableOpacity>

                <TextComponent size={getWidth(14)} style={styles.description}>
                  {item.name || ''}
                </TextComponent>
                <View style={styles.contentPrice}>
                  <View style={RowContent}>
                    <TextComponent color={BLUE} size={getWidth(15)} style={styles.normal}>
                      {item.special_price
                        ? separateDecimals(item.special_price || 0).price
                        : separateDecimals(item.priceCents || 0).price}
                    </TextComponent>
                    <TextComponent size={getWidth(8)} color={BLUE}>
                      {item.special_price
                        ? separateDecimals(item.special_price || 0).decimals
                        : separateDecimals(item.priceCents || 0).decimals}
                    </TextComponent>
                  </View>
                  {item.special_price && (
                    <View style={RowContent}>
                      <TextComponent color={GRAY} size={getWidth(15)} style={styles.discount}>
                        {separateDecimals(item.priceCents || 0).price}
                      </TextComponent>
                      <TextComponent color={GRAY} size={getWidth(8)} style={styles.discount}>
                        {separateDecimals(item.priceCents || 0).decimals}
                      </TextComponent>
                    </View>
                  )}
                </View>
                <TouchableOpacity style={styles.button}>
                  <TextComponent color={PRIMARY_BLUE}>Agregar</TextComponent>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
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
  showItemContainer: {
    marginTop: 10,
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
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
});

export default Search;
