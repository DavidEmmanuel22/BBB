/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/core';

import Container, { StatusBarStyle } from '../components/Container';
import { getHeight, getWidth } from '../utils/interfaceDimentions';
import { useEffect } from 'react';
import ProductItem from '../components/Products/ProductItem';
import Text from '../components/Text';
import Filter from '../assets/icons/Filter';
import { BLUE, PRIMARY_BLUE, WHITE } from '../constants/colors';
import { ProductsByCategoryController } from '../controllers/ProductByCategoryController';
import { Categories } from '../models/Objects/Categories';

interface IProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}

const contentChip = (isSelected: any): any => ({
  paddingHorizontal: getWidth(12),
  backgroundColor: isSelected ? PRIMARY_BLUE : WHITE,
  marginRight: getWidth(12),
  borderRadius: getWidth(16),
  borderWidth: getWidth(1),
  borderColor: PRIMARY_BLUE,
  justifyContent: 'center',
  alignItems: 'center',
});

const ProductsByCategory: React.FC<IProps> = ({ navigation, route }) => {
  const parentCategory: string = route.params?.parentCategory;
  const category: Categories = route.params?.category;
  const subCategories: Array<Categories> = route.params?.subCategories;

  const [categorySelect, setCategorySelect] = useState(category);
  const { products, initializeProducts, totalProducts, isLoading, changePage } = ProductsByCategoryController();

  useEffect(() => {
    initializeProducts(categorySelect, parentCategory);
    return () => {};
  }, []);

  const Chip = ({ chipItem }: Categories) => {
    const isSelected = chipItem.name === categorySelect.name;
    return (
      <TouchableOpacity
        onPress={() => {
          initializeProducts(chipItem, parentCategory);
          setCategorySelect(chipItem);
        }}
        style={{ ...contentChip(isSelected) }}
      >
        <Text size={getWidth(14)} style={{ marginVertical: getHeight(8) }} color={isSelected ? WHITE : PRIMARY_BLUE}>
          {chipItem.name || ''}
        </Text>
      </TouchableOpacity>
    );
  };

  const totalProductos = `${totalProducts} Productos `;

  const Header = () => {
    return (
      <View style={styles.contentHeader}>
        <Text>{totalProductos}</Text>
        <TouchableOpacity style={styles.contentFilter} onPress={() => navigation.navigate('Filter')}>
          <Text style={styles.filterText} color={PRIMARY_BLUE}>
            Filtrar
          </Text>
          <Filter />
        </TouchableOpacity>
      </View>
    );
  };
  const loadMore = () => {
    changePage();
  };
  return (
    <Container containerStyles={styles.container} statusBarStyle={StatusBarStyle.DARK}>
      <View style={styles.chipView}>
        <FlatList
          renderItem={({ item, index }) => <Chip key={index} chipItem={item} />}
          keyExtractor={(item, index) => 'key' + index}
          horizontal={true}
          data={subCategories}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {isLoading ? (
        <ActivityIndicator color={BLUE} size="large" style={styles.indicator} />
      ) : (
        <>
          <Header />
          <FlatList
            numColumns={2}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={({ item, index }) => <ProductItem key={index} item={item} />}
            data={products}
            columnWrapperStyle={styles.wrapperColumn}
            onEndReached={loadMore}
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
  contentFilter: { flexDirection: 'row', alignItems: 'center' },
  filterText: { marginRight: getWidth(10) },
  wrapperColumn: {
    justifyContent: 'space-between',
  },
  chipView: { marginTop: getHeight(20) },
  indicator: {
    marginTop: getHeight(300),
  },
});

export default ProductsByCategory;
