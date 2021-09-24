import React from 'react';
import {View, FlatList} from 'react-native';

import Text from '../Text';
import Icon from 'react-native-vector-icons/Ionicons';
import {getHeight, getWidth} from '../../utils/interfaceDimentions';
import {BLUE, PRIMARY_BLUE} from '../../constants/colors';

import {useState} from 'react';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

interface IProps {
  item: any;
}
const AnimateBox: React.FC<IProps> = ({item}) => {
  const [show, setShow] = useState(false);
  // Sub-sub categoría
  const InnerCategory: React.FC<IProps> = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: getHeight(8),
        }}>
        {/* Un dot para cada categoría */}
        <View
          style={{
            backgroundColor: BLUE,
            height: getHeight(6),
            width: getWidth(6),
            marginLeft: getWidth(12),
            borderRadius: getWidth(3),
          }}
        />
        <Text
          style={{marginLeft: getWidth(14)}}
          color={BLUE}
          size={getWidth(16)}>
          {item.name}
        </Text>
      </View>
    );
  };
  return (
    <View
      style={{
        borderBottomColor: PRIMARY_BLUE,
        borderBottomWidth: getHeight(show ? 1 : 0.3),
      }}>
      <Collapse
        onToggle={(isCollapse: boolean) => {
          setShow(isCollapse);
        }}>
        <CollapseHeader>
          <View
            style={{
              paddingVertical: getHeight(15),
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text medium={true} color={BLUE} size={getWidth(16)}>
              {item.name}
            </Text>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Icon
                color={BLUE}
                size={getWidth(20)}
                name="chevron-down-outline"
              />
            </View>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <FlatList
            keyExtractor={(item, index) => 'key' + index}
            renderItem={InnerCategory}
            data={item.children_data}
          />
        </CollapseBody>
      </Collapse>
    </View>
  );
};

export default AnimateBox;
