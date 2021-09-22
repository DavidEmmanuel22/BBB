import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

import Text from '../Text';
import {Div} from 'react-native-magnus';
import Icon from 'react-native-vector-icons/Ionicons';
import {getHeight, getWidth} from '../../utils/interfaceDimentions';
import {BLUE, LIGHTER_GRAY3} from '../../constants/colors';

interface IProps {
  data: Array<any>;
}

import {useRef, useState} from 'react';
import {Animated, Easing, View} from 'react-native';
import SubCategoryList from './subCategoryList';
const AnimateBox: React.FC<IProps> = ({data}) => {
  console.log(data);
  const subCategories = ['Utencilios', 'LLaver', 'otroe'];
  const opacity = useRef(new Animated.Value(0)).current;
  const height = useRef(new Animated.Value(0)).current;
  const [show, setShow] = useState(false);
  const showCategory = () => {
    setShow(!show);
    Animated.timing(height, {
      toValue: show ? 0 : 1,
      duration: 400,
      easing: Easing.linear,
      useNativeDriver: false, // <-- neccessary
    }).start(() => {
      Animated.timing(opacity, {
        toValue: show ? 0 : 1,
        duration: 400,
        easing: Easing.linear,
        useNativeDriver: false, // <-- neccessary
      }).start();
    });
  };

  const maxHeight = height.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1000], // <-- value that larger than your content's height
  });

  return (
    <View>
      <TouchableOpacity onPress={showCategory}>
        <Div h={getWidth(120)} alignItems="center" row style={styles.card}>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{
              uri: 'https://64.media.tumblr.com/efaa470a462601bee5a49f46115eb755/tumblr_inline_olu4x55Kjg1u0e4qb_400.jpg',
            }}
          />
          <Text
            style={{marginLeft: getWidth(16)}}
            color={BLUE}
            size={getWidth(20)}>
            Cocina
          </Text>
          <Div flex={1} alignItems="flex-end">
            <Icon
              style={{marginRight: getWidth(16)}}
              color={BLUE}
              size={getWidth(20)}
              name="chevron-down-outline"
            />
          </Div>
        </Div>
      </TouchableOpacity>

      <Animated.View style={{opacity: opacity, maxHeight: maxHeight}}>
        <SubCategoryList data={subCategories} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: LIGHTER_GRAY3,
    marginTop: getHeight(12),
  },
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
