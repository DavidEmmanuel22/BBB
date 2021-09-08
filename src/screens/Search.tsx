import React from 'react';
import { Text, StyleSheet } from 'react-native';

import Container, { StatusBarStyle } from '../components/Container';


const Search: React.FC = () => {
  return (
    <Container statusBarStyle={StatusBarStyle.DARK}>
      <Text>Search</Text>
    </Container>
  )
};

const styles = StyleSheet.create({});

export default Search;