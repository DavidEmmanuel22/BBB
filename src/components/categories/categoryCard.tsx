import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

import Text from '../Text';
import {Div} from 'react-native-magnus';
import Icon from 'react-native-vector-icons/Ionicons';
import {getHeight, getWidth} from '../../utils/interfaceDimentions';
import {BLUE, BRAND_BLUE, LIGHTER_GRAY3, WHITE} from '../../constants/colors';

interface Data {
  name: string;
  children_data: any;
}
interface IProps {
  data: Data;
}

import {useState} from 'react';

import SubCategoryList from './subCategoryList';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

const AnimateBox: React.FC<IProps> = ({data}) => {
  const {name, children_data} = data;
  const [show, setShow] = useState(false);

  return (
    <Collapse
      onToggle={(isCollapse: boolean) => {
        setShow(isCollapse);
      }}>
      {/* Header del panel que se colapsa */}
      <CollapseHeader>
        <Div
          bg={show ? BRAND_BLUE : LIGHTER_GRAY3}
          mt={getHeight(12)}
          h={getWidth(120)}
          alignItems="center"
          row>
          {/* La imagen se quita cuando se muestran las sub categorías */}
          {!show && (
            <Image
              resizeMode="cover"
              style={styles.image}
              source={{
                uri: 'https://64.media.tumblr.com/efaa470a462601bee5a49f46115eb755/tumblr_inline_olu4x55Kjg1u0e4qb_400.jpg',
              }}
            />
          )}
          <Div>
            <Text
              style={{marginLeft: getWidth(16)}}
              color={show ? WHITE : BLUE}
              size={getWidth(20)}>
              {name}
            </Text>
            {show && (
              <Text
                style={{marginLeft: getWidth(16)}}
                color={WHITE}
                size={getWidth(14)}>
                Encuentra todo lo que necesites para tu espacio favorito.
              </Text>
            )}
          </Div>
          <Div flex={1} alignItems="flex-end">
            <Icon
              style={{marginRight: getWidth(16)}}
              color={show ? WHITE : BLUE}
              size={getWidth(20)}
              name="chevron-down-outline"
            />
          </Div>
        </Div>
      </CollapseHeader>
      {/* Lista de categorías que se colapsa */}
      <CollapseBody>
        <SubCategoryList data={children_data} />
      </CollapseBody>
    </Collapse>
  );
};

const styles = StyleSheet.create({
  image: {
    width: getHeight(120),
    height: '100%',
    resizeMode: 'cover',
  },

  content: {
    fontSize: 16,
    lineHeight: 30,
    color: '#555',
  },
});
export default AnimateBox;
