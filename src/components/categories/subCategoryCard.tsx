import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import Text from '../Text';
import Icon from 'react-native-vector-icons/Ionicons';
import { getHeight, getWidth } from '../../utils/interfaceDimentions';
import { BLUE, PRIMARY_BLUE } from '../../constants/colors';

import { useState } from 'react';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { useNavigation } from '@react-navigation/native';
import { Categories } from '../../models/Objects/Categories';

interface IProps {
  item: Categories;
}
interface IPropsInner {
  itemInner: Categories;
}
const AnimateBox: React.FC<IProps> = ({ item }) => {
  const [show, setShow] = useState(false);
  const navigation = useNavigation();
  const innerCategories = item.children_data;
  // Sub-sub categoría
  const InnerCategory: React.FC<IPropsInner> = ({ itemInner }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ProductsByCategory', {
            parentCategory: item.name,
            category: itemInner,
            subCategories: innerCategories,
          })
        }
        style={styles.contentSub}
      >
        {/* Un dot para cada categoría */}
        <View style={styles.dot} />
        <Text style={{ marginLeft: getWidth(14) }} color={BLUE} size={getWidth(16)}>
          {itemInner.name || ''}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        borderBottomColor: PRIMARY_BLUE,
        borderBottomWidth: getHeight(show ? 1 : 0.3),
      }}
    >
      <Collapse
        onToggle={(isCollapse: boolean) => {
          setShow(isCollapse);
        }}
      >
        <CollapseHeader>
          <View style={styles.contentCard}>
            <Text medium={true} color={BLUE} size={getWidth(16)}>
              {item.name || ''}
            </Text>
            <View style={styles.contentIcon}>
              <Icon color={BLUE} size={getWidth(20)} name="chevron-down-outline" />
            </View>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <FlatList
            keyExtractor={(item, index) => 'key' + index}
            renderItem={({ item }) => <InnerCategory itemInner={item} />}
            data={innerCategories}
          />
        </CollapseBody>
      </Collapse>
    </View>
  );
};
const styles = StyleSheet.create({
  contentCard: {
    paddingVertical: getHeight(15),
    alignItems: 'center',
    flexDirection: 'row',
  },
  contentIcon: { flex: 1, alignItems: 'flex-end' },
  contentSub: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: getHeight(8),
  },
  dot: {
    backgroundColor: BLUE,
    height: getHeight(6),
    width: getWidth(6),
    marginLeft: getWidth(12),
    borderRadius: getWidth(3),
  },
});
export default AnimateBox;
