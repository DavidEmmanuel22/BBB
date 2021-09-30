import React from 'react';
import {FlatList, View, Text, StyleSheet, Dimensions} from 'react-native';
import Review from '../assets/icons/Review';
import Button from '../components/Button';
import OrderCard from '../components/orders/OrderCard';
import { getWidth } from '../utils/interfaceDimentions';

const dummyList: any[] = [
  {id: 0},
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
];

const {height} = Dimensions.get('screen');

const EmptyData = () => {
  return (
    <View style={[styles.containerMessage, {height: height / 2}]}>
      <View style={styles.icon}>
        <Review />
      </View>
      <Text style={styles.message1}>No cuentas con pedidos</Text>
      <Text style={styles.message2}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </Text>
      <Button
        containerStyle={styles.buttonStyle}
        title="Explorar productos"
        onPress={() => {}}
      />
    </View>
  );
};

const Orders = () => {
  return (
    <View>
      <FlatList
        data={[]}
        renderItem={() => <OrderCard />}
        ListEmptyComponent={<EmptyData />}
        keyExtractor={(item: any) => item?.id}
      />
    </View>
  );
};

export default Orders;
const styles = StyleSheet.create({
  containerMessage: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 18,
    justifyContent: 'center',
  },
  buttonStyle: {
    marginTop: 18,
    width: getWidth(250),
  },
  icon: {
    marginBottom: 18,
  },
  message1: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  message2: {
    fontSize: 16,
    textAlign: 'center',
  },
});
