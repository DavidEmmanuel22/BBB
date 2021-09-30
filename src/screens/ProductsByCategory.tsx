import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/core';

import Container, {StatusBarStyle} from '../components/Container';
import {getHeight, getWidth} from '../utils/interfaceDimentions';
import {useEffect} from 'react';
import ProductItem from '../components/Products/ProductItem';
import Text from '../components/Text';
import Filter from '../assets/icons/Filter';
import {PRIMARY_BLUE, WHITE} from '../constants/colors';
import {ProductsByCategoryController} from '../controllers/ProductByCategoryController';
import {Categories} from '../models/Objects/Categories';

interface IProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}

const ProductsByCategory: React.FC<IProps> = ({navigation, route}) => {
  const category: Categories = route.params?.category;
  const subCategories: Array<Categories> = route.params?.subCategories;

  const [categorySelect, setCategorySelect] = useState(category);
  const {products, initializeProducts, totalProducts, isLoading} =
    ProductsByCategoryController();

  useEffect(() => {
    initializeProducts(categorySelect.id || 0);
    return () => {};
  }, []);

  const Chip = ({chipItem}: Categories) => {
    const isSelected = chipItem.name === categorySelect.name;
    return (
      <TouchableOpacity
        onPress={() => {
          initializeProducts(chipItem.id);
          setCategorySelect(chipItem);
        }}
        style={styles.contentChip(isSelected)}>
        <Text
          size={getWidth(14)}
          style={{marginVertical: getHeight(8)}}
          color={isSelected ? WHITE : PRIMARY_BLUE}>
          {chipItem.name || ''}
        </Text>
      </TouchableOpacity>
    );
  };

  const ChipScroll = () => {
    return (
      <View style={styles.chipView}>
        <FlatList
          renderItem={({item}) => <Chip chipItem={item} />}
          keyExtractor={(item, index) => 'key' + index}
          horizontal={true}
          data={subCategories}
        />
      </View>
    );
  };
  const totalProductos = `${totalProducts} Productos `;

  const Header = () => {
    return (
      <View style={styles.contentHeader}>
        <Text>{totalProductos}</Text>
        <TouchableOpacity style={styles.contentFilter}>
          <Text style={styles.filterText} color={PRIMARY_BLUE}>
            Filtrar
          </Text>
          <Filter />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Container
      containerStyles={styles.container}
      statusBarStyle={StatusBarStyle.DARK}>
      {isLoading ? (
        <ActivityIndicator style={styles.chipView} />
      ) : (
        <>
          <ChipScroll />
          <Header />
          <FlatList
            numColumns={2}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={({item}) => <ProductItem item={item} />}
            data={products}
            columnWrapperStyle={styles.wrapperColumn}
          />
        </>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: getWidth(24),
    paddingRight: getWidth(24),
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: getHeight(20),
  },
  contentFilter: {flexDirection: 'row', alignItems: 'center'},
  filterText: {marginRight: getWidth(10)},
  wrapperColumn: {
    justifyContent: 'space-between',
  },
  contentChip: isSelected => ({
    paddingHorizontal: getWidth(12),
    backgroundColor: isSelected ? PRIMARY_BLUE : WHITE,
    marginRight: getWidth(12),
    borderRadius: getWidth(16),
    borderWidth: getWidth(1),
    borderColor: PRIMARY_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  chipView: {marginTop: getHeight(20)},
});

export default ProductsByCategory;
