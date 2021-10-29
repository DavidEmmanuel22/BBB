/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import { NavigationProp } from '@react-navigation/core';
import Principal from './Principal';
import Categories from './Categories';
import ZoneOutlet from './ZoneOutlet';
import Brands from './Brands';
import { TabView } from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import { changeSelect, selectUIISelected } from '../store/slices/uiSlice';
import { CartController } from '../controllers/CartController';
import { CodesColorsController } from '../controllers/CodesColorsController';

interface IProps {
  navigation: NavigationProp<any, any>;
}

const Home: React.FC<IProps> = ({ navigation }) => {
  const index = useSelector(selectUIISelected);
  const dispatch = useDispatch();
  const { initializeCodesColors } = CodesColorsController();

  const layout = useWindowDimensions();
  const { checkCartInit } = CartController();
  const [routes] = React.useState([
    { key: 'destacados', title: 'Destacados' },
    { key: 'categorias', title: 'Categorías' },
    { key: 'zoneOutlet', title: 'Zona outlet' },
    { key: 'brands', title: 'Marcas' },
  ]);
  const renderScene = ({ route }: any) => {
    switch (route.key) {
      case 'destacados':
        return <Principal navigation={navigation} />;
      case 'categorias':
        return <Categories navigation={navigation} />;
      case 'zoneOutlet':
        return <ZoneOutlet navigation={navigation} />;
      case 'brands':
        return <Brands navigation={navigation} />;
      default:
        return null;
    }
  };

  const onChangeIndex = (id: number) => {
    dispatch(changeSelect(id));
  };
  useEffect(() => {
    checkCartInit();
    initializeCodesColors();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={onChangeIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => null}
    />
  );
};

export default Home;
