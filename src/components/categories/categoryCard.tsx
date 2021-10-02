/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';

import Text from '../Text';
import Icon from 'react-native-vector-icons/Ionicons';
import { getHeight, getWidth } from '../../utils/interfaceDimentions';
import { BLUE, BRAND_BLUE, LIGHTER_GRAY3, WHITE } from '../../constants/colors';

interface IProps {
  data: Categories;
}

import SubCategoryList from './subCategoryList';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { flexGeneric } from '../../utils/stylesGenetic';
import { CategoryModel } from '../../models/CategoriesModel';
import { GetAttribute } from '../../utils/genericFunctions';
import { BASE_URL } from '../../constants/URLs';
import { Categories } from '../../models/Objects/Categories';

const contentCard = (show: boolean): any => ({
  backgroundColor: show ? BRAND_BLUE : LIGHTER_GRAY3,
  marginTop: getHeight(12),
  height: getHeight(120),
  alignItems: 'center',
  flexDirection: 'row',
});

const AnimateBox: React.FC<IProps> = ({ data }) => {
  const { name, children_data, id } = data;
  const [urlImage, setUrlImage] = useState('');
  const { GetCategoryInfo } = CategoryModel();
  const [show, setShow] = useState(false);
  useEffect(() => {
    GetCategoryInfo(id || 0).then((res) => {
      const uriImage = GetAttribute(res.custom_attributes || [], 'image');
      setUrlImage(BASE_URL + uriImage);
    });
    return () => {};
  }, []);
  return (
    <Collapse
      onToggle={(isCollapse: boolean) => {
        setShow(isCollapse);
      }}
    >
      {/* Header del panel que se colapsa */}
      <CollapseHeader>
        <View style={{ ...contentCard(show) }}>
          {/* La imagen se quita cuando se muestran las sub categorías */}
          {!show && (
            <Image
              resizeMode="cover"
              style={styles.image}
              source={{
                uri: urlImage,
              }}
            />
          )}
          <View style={flexGeneric}>
            <Text style={{ marginLeft: getWidth(16) }} color={show ? WHITE : BLUE} size={getWidth(20)}>
              {name || ''}
            </Text>
            {show && (
              <Text style={{ marginLeft: getWidth(16) }} color={WHITE} size={getWidth(14)}>
                Encuentra todo lo que necesites para tu espacio favorito.
              </Text>
            )}
          </View>
          <View style={styles.contentIcon}>
            <Icon
              style={styles.leftSpace}
              color={show ? WHITE : BLUE}
              size={getWidth(20)}
              name="chevron-down-outline"
            />
          </View>
        </View>
      </CollapseHeader>
      {/* Lista de categorías que se colapsa */}
      <CollapseBody>
        <SubCategoryList data={children_data || []} />
      </CollapseBody>
    </Collapse>
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
export default AnimateBox;
