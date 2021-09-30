import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {NavigationProp} from '@react-navigation/core';

import Container, {StatusBarStyle} from '../components/Container';
import {getHeight, getWidth} from '../utils/interfaceDimentions';
import {useEffect} from 'react';
import ProductItem from '../components/Products/ProductItem';
import Text from '../components/Text';
import Filter from '../assets/icons/Filter';
import {BLUE, PRIMARY_BLUE, WHITE} from '../constants/colors';

interface IProps {
  navigation: NavigationProp<any, any>;
}
const Data = [0, 0, 0];
const Chips = ['Accesorios', 'Repostería', 'Gadgets'];
const ProductsByCategory: React.FC<IProps> = ({navigation}) => {
  const countProducts = `${Data.length} productos`;
  const select = 'Accesorios';

  const Chip = ({chipItem}: any) => {
    const isSelected = chipItem === select;
    return (
      <TouchableOpacity
        style={{
          paddingHorizontal: getWidth(12),
          backgroundColor: isSelected ? PRIMARY_BLUE : WHITE,
          marginRight: getWidth(12),
          borderRadius: getWidth(16),
          borderWidth: getWidth(1),
          borderColor: PRIMARY_BLUE,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          size={getWidth(14)}
          style={{marginVertical: getHeight(8)}}
          color={isSelected ? WHITE : PRIMARY_BLUE}>
          {chipItem}
        </Text>
      </TouchableOpacity>
    );
  };

  const ChipScroll = () => {
    return (
      <View style={{marginTop: getHeight(20)}}>
        <FlatList
          renderItem={({item}) => <Chip chipItem={item} />}
          keyExtractor={(item, index) => 'key' + index}
          horizontal={true}
          data={Chips}
        />
      </View>
    );
  };

  const Header = () => {
    return (
      <View style={styles.contentHeader}>
        <Text>{countProducts}</Text>
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
      <ChipScroll />
      <Header />
      <FlatList
        numColumns={2}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item}) => <ProductItem item={item} />}
        data={[1, 1, 1, 1]}
        columnWrapperStyle={styles.wrapperColumn}
      />
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
});

export default ProductsByCategory;
