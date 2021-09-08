import React from 'react';
import { Text, StyleSheet } from 'react-native';

import Container, { StatusBarStyle } from '../components/Container';


const Home: React.FC = () => {
  return (
    <Container statusBarStyle={StatusBarStyle.DARK}>
      <Text>Home</Text>
    </Container>
  )
};

const styles = StyleSheet.create({});

export default Home;