import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { DARK, LIGHTER_GRAY } from '../constants/colors';

const Search: React.FC = () => {
  return (
    <View>
      {/* Item */}
      <View style={styles.itemContainer}>
        <Image
          style={styles.itemImage}
          source={{ uri: 'http://s7d1.scene7.com/is/image/BedBathandBeyond/1105639232797g' }}
        />

        <Text numberOfLines={1} style={styles.itemText}>
          Cafetera de fibra de carbono Oster Cafetera de fibra de carbono Oster{' '}
        </Text>
      </View>
      <View style={styles.itemSeparator} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
  },
  itemImage: {
    height: 50,
    width: 50,
  },
  itemText: {
    alignSelf: 'center',
    marginLeft: 12,
    fontFamily: 'Effra_Rg',
    fontSize: 16,
    color: DARK,
    marginRight: 20,
  },
  itemSeparator: {
    height: 1,
    backgroundColor: LIGHTER_GRAY,
    marginHorizontal: 20,
    marginTop: 10,
  },
});

export default Search;
