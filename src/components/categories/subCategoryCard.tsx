import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import Text from '../Text';
import {Div} from 'react-native-magnus';
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
      <Div row alignItems="center" py={getHeight(8)}>
        {/* Un dot para cada categoría */}
        <Div
          h={getWidth(6)}
          w={getWidth(6)}
          ml={getWidth(12)}
          rounded={getWidth(3)}
          style={{backgroundColor: BLUE}}
        />
        <Text
          style={{marginLeft: getWidth(14)}}
          color={BLUE}
          size={getWidth(16)}>
          {item.name}
        </Text>
      </Div>
    );
  };
  return (
    <Div
      borderBottomColor={PRIMARY_BLUE}
      borderBottomWidth={getHeight(show ? 1 : 0.3)}>
      <Collapse
        onToggle={(isCollapse: boolean) => {
          setShow(isCollapse);
        }}>
        <CollapseHeader>
          <Div py={getHeight(15)} alignItems="center" row>
            <Text medium={true} color={BLUE} size={getWidth(16)}>
              {item.name}
            </Text>
            <Div flex={1} alignItems="flex-end">
              <Icon
                color={BLUE}
                size={getWidth(20)}
                name="chevron-down-outline"
              />
            </Div>
          </Div>
        </CollapseHeader>
        <CollapseBody>
          <FlatList
            keyExtractor={(item, index) => 'key' + index}
            renderItem={InnerCategory}
            data={item.children_data}
          />
        </CollapseBody>
      </Collapse>
    </Div>
  );
};

export default AnimateBox;
