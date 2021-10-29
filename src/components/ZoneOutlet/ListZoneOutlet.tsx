/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, TouchableOpacity, FlatList } from 'react-native';

import Text from '../Text';
import { getHeight, getWidth } from '../../utils/interfaceDimentions';
import { BLUE, LIGHTER_GRAY3 } from '../../constants/colors';

interface IProps1 {
  data: Categories;
}

import { flexGeneric } from '../../utils/stylesGenetic';
import { CategoryModel } from '../../models/CategoriesModel';
import { formatImage, GetAttribute } from '../../utils/genericFunctions';
import { BASE_URL } from '../../constants/URLs';
import { Categories } from '../../models/Objects/Categories';
import { useNavigation } from '@react-navigation/native';
import { CategoryController } from '../../controllers/CategoryController';

const contentCard = (): any => ({
  backgroundColor: LIGHTER_GRAY3,
  marginTop: getHeight(12),
  height: getHeight(120),
  alignItems: 'center',
  flexDirection: 'row',
});

const AnimateBox: React.FC<IProps1> = ({ data }) => {
  const { name, id } = data;
  const [urlImage, setUrlImage] = useState<any>(null);
  const { GetCategoryInfo } = CategoryModel();
  const { zoneOutlet } = CategoryController();

  const navigation = useNavigation();
  useEffect(() => {
    GetCategoryInfo(id || 0).then((res) => {
      let uriImage1 = GetAttribute(res.custom_attributes || [], 'megamenu_show_catimage_img');
      if (uriImage1) {
        setUrlImage(BASE_URL + uriImage1);
      } else {
        setUrlImage(null);
      }
    });
    return () => {};
  }, []);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductsByCategory', {
          parentCategory: name,
          category: data,
          subCategories: zoneOutlet,
        })
      }
    >
      <View style={{ ...contentCard() }}>
        {/* La imagen se quita cuando se muestran las sub categorías */}

        {urlImage && (
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{
              uri: formatImage(urlImage),
            }}
          />
        )}

        <View style={[flexGeneric]}>
          <Text style={{ marginLeft: getWidth(16) }} color={BLUE} size={getWidth(20)}>
            {name || ''}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  leftSpace: {
    marginRight: getWidth(16),
  },
  image: {
    width: getHeight(120),
    height: '100%',
    resizeMode: 'cover',
  },
  contentIcon: {
    width: getWidth(40),
    alignItems: 'flex-end',
  },
  content: {
    fontSize: 16,
    lineHeight: 30,
    color: '#555',
  },
});
interface IProps {
  data: Array<Categories>;
}
const ZoneOutletList: React.FC<IProps> = ({ data }) => {
  return (
    <FlatList
      keyExtractor={(item: any, index: any) => 'key' + index}
      renderItem={({ item, index }: any) => <AnimateBox key={index} data={item} />}
      data={data.filter((item: any) => item?.product_count > 0)}
    />
  );
};

export default ZoneOutletList;
