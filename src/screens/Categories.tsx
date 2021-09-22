import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationProp} from '@react-navigation/core';

import Container, {StatusBarStyle} from '../components/Container';
import CategoryList from '../components/categories/categoryList';
import {getWidth} from '../utils/interfaceDimentions';

interface IProps {
  navigation: NavigationProp<any, any>;
}

const Login: React.FC<IProps> = ({navigation}) => {
  return (
    <Container
      containerStyles={styles.container}
      statusBarStyle={StatusBarStyle.DARK}>
      <CategoryList data={[0, 0, 0]} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: getWidth(24),
    paddingRight: getWidth(24),
  },
});

export default Login;
