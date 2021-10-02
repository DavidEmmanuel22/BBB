/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/core';

import Container, { StatusBarStyle } from '../components/Container';
import CategoryList from '../components/categories/categoryList';
import { getWidth } from '../utils/interfaceDimentions';
import { useEffect } from 'react';
import { CategoryController } from '../controllers/CategoryController';

interface IProps {
  navigation: NavigationProp<any, any>;
}

const Categories: React.FC<IProps> = () => {
  const { initializeCategory, categories } = CategoryController();
  useEffect(() => {
    initializeCategory();
    return () => {};
  }, []);
  return (
    <Container containerStyles={styles.container} statusBarStyle={StatusBarStyle.DARK}>
      <CategoryList data={categories} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: getWidth(24),
    paddingRight: getWidth(24),
  },
});

export default Categories;
