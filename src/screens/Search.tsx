import React, { useEffect } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { BRAND_BLUE, DARK, LIGHTER_GRAY, LIGHTER_GRAY2, PRIMARY_BLUE } from '../constants/colors';
import {
  changeData,
  selectData,
  selectSearches,
  selectObjects,
  selectEnterKeyPressed,
} from '../store/slices/searchSlice';
import { SearchController } from '../controllers/SearchController';
import { EFFRA } from '../constants/fonts';

const Search: React.FC = () => {
  const { findItems, buscando, showModal, setshowModal } = SearchController();

  const dispatch = useDispatch();
  const searchText = useSelector(selectData);
  const searches = useSelector(selectSearches);
  const items = useSelector(selectObjects);
  const enterKey = useSelector(selectEnterKeyPressed);

  useEffect(() => {
    if (searchText.length >= 3) {
      findItems(searchText);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <View>
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

            <TouchableOpacity style={styles.itemContainer}>
              <Image style={styles.QRImage} source={require('../assets/Search/CategoriesIcon.png')} />

              <Text numberOfLines={1} style={styles.itemText}>
                Explorar categorías
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
            <Text style={styles.Amount}>
              {items?.placements[0].numFound} {items?.placements[0].docs ? 'coincidencias' : ''}
            </Text>

            {items?.placements[0].docs.length ? (
              items?.placements[0].docs.map((item) => (
                <TouchableOpacity style={styles.itemsContainer}>
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
                <Text style={{ alignSelf: 'center', marginTop: 12, fontFamily: 'Effra_Bd', fontSize: 16 }}>
                  Lo sentimos, no encontramos tu producto.
                </Text>
              </View>
            )}
          </ScrollView>
        )
      ) : (
        <ScrollView>
          <Text style={styles.Amount}>
            {items?.placements[0].docs.length} {items?.placements[0].docs ? 'coincidencias' : ''}
          </Text>

          <Modal transparent={true} animationType="slide" visible={showModal} onRequestClose={() => {}}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Marcas</Text>

              <TouchableOpacity style={styles.modalXImage} onPress={() => setshowModal(!showModal)}>
                <Image source={require('../assets/NewPassword/XIcon.png')} />
              </TouchableOpacity>

              <ScrollView>
                {items?.placements[0].facets[2].values.map((item) => (
                  <>
                    <TouchableOpacity
                      onPress={() => {
                        setshowModal(!showModal);
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

          <TouchableOpacity
            onPress={() => setshowModal(!showModal)}
            style={{ position: 'absolute', right: 1, marginRight: 28, marginTop: 10, flexDirection: 'row' }}
          >
            <Text
              style={{
                color: PRIMARY_BLUE,
                fontFamily: EFFRA,
                fontSize: 16,
                marginRight: 8,
              }}
            >
              Marcas
            </Text>
            <Image
              style={{ height: 16, width: 16, alignSelf: 'center' }}
              source={require('../assets/Search/FiltrarIcon.png')}
            />
          </TouchableOpacity>
          <View style={styles.showItemContainer}>
            {items?.placements[0].docs.map((item) => (
              <TouchableOpacity style={styles.showItemView}>
                <Image style={styles.showItemImage} source={{ uri: item.imageId }} />
                <Text numberOfLines={2} style={styles.showItemText}>
                  {item.name}
                </Text>
                <Text numberOfLines={1} style={styles.showItemTextPrice}>
                  ${item.priceCents}
                </Text>
                <TouchableOpacity style={styles.showItemButton}>
                  <Text style={styles.showItemButtonText}>Agregar</Text>
                </TouchableOpacity>
              </TouchableOpacity>
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
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 12,
    fontFamily: 'Effra_Bd',
    fontSize: 16,
    color: DARK,
  },
  showItemContainer: {
    marginTop: 10,
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  showItemView: {
    borderColor: LIGHTER_GRAY,
    borderWidth: 1,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  showItemImage: {
    height: 120,
    width: 120,
    margin: 12,
  },
  showItemText: {
    width: 100,
    alignSelf: 'center',
    fontFamily: EFFRA,
    fontSize: 14,
  },
  showItemTextPrice: {
    fontFamily: EFFRA,
    fontSize: 14,
    alignSelf: 'center',
    color: BRAND_BLUE,
  },
  showItemButton: {
    borderColor: LIGHTER_GRAY,
    borderWidth: 1,
    margin: 6,
  },
  showItemButtonText: {
    alignSelf: 'center',
    color: PRIMARY_BLUE,
    fontFamily: EFFRA,
    fontSize: 14,
  },
});

export default Search;
