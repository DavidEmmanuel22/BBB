/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';

import { PRIMARY_BLUE } from '../../constants/colors';
import { getHeight, getWidth } from '../../utils/interfaceDimentions';
import Text from '../Text';
import { WebView } from 'react-native-webview';
import { ProductDetail } from '../../models/Objects/Product';

interface IProps {
  product: ProductDetail;
}
const TabOptionsProduct: React.FC<IProps> = ({}) => {
  const [indexTab, setIndexTab] = useState(0);

  const [routes] = React.useState([
    { key: 'details', title: 'Detalles' },
    { key: 'opinions', title: 'Opinions' },
    { key: 'returns', title: 'Política de devoluciones' },
  ]);

  const Details = ({ text = '' }) => {
    return (
      <View>
        <WebView
          style={{ height: 200 }}
          scrollEnabled={true}
          testID="articles_web_view"
          allowsBackForwardNavigationGestures={true}
          javaScriptEnabled={true}
          source={{ html: text }}
        />
      </View>
    );
  };
  const Opinions = () => {
    return (
      <View>
        <Text>Opiniones</Text>
      </View>
    );
  };
  const tabOption = ({ item = { title: '' }, index = 0 }) => {
    return (
      <TouchableOpacity onPress={() => setIndexTab(index)} style={tabOptionStyle(index === indexTab)}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList style={styles.listOptions} horizontal data={routes} renderItem={tabOption} />

      {indexTab === 0 && <Details text={textDetails} />}
      {indexTab === 1 && <Opinions />}
      {indexTab === 2 && <Details />}
    </View>
  );
};
const tabOptionStyle = (isSelected: boolean): ViewStyle => {
  return {
    padding: getWidth(4),
    marginRight: getWidth(8),
    borderBottomColor: PRIMARY_BLUE,
    borderBottomWidth: isSelected ? getWidth(4) : 0,
  };
};
const styles = StyleSheet.create({
  listOptions: {
    marginVertical: getHeight(18),
  },
  tabViewStyle: {
    // flexGrow: 1,
    // minHeight: getHeight(280),
    // maxHeight: getHeight(500),
    // backgroundColor: 'red',
  },
});
const textDetails =
  '<div data-content-type="row" data-appearance="contained" data-element="main"><div data-enable-parallax="0" data-parallax-speed="0.5" data-background-images="{}" data-element="inner" data-pb-style="60CA6455035C2"><div data-content-type="html" data-appearance="default" data-element="main" data-pb-style="60CA6455035E2"><ul><li>Lavar a m&aacute;quina</li><li>No usar suavizante de telas</li><li>Medidas: 28 x 10 cm</li><li>C&oacute;digo de repuesto A1</li><li>De importaci&oacute;n</li></ul></div></div></div><style>  #html-body [data-pb-style="60CA6455035C2"]{justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; margin: 0px 0px 10px; padding: 10px;}#html-body [data-pb-style="60CA6455035E2"]{border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 0px;} li{font-size:45px;}</style>';
export default TabOptionsProduct;
