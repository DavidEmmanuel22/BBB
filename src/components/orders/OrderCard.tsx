import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Cancelled from '../../assets/icons/Cancelled';
import Delivered from '../../assets/icons/Delivered';
import OnWay from '../../assets/icons/OnWay';
import RightArrow from '../../assets/icons/RightArrow';
import SuccessfullPayment from '../../assets/icons/SuccessfulPayment';
import {DARK, LIGHTER_GRAY, PRIMARY_BLUE} from '../../constants/colors';
import {EFFRA} from '../../constants/fonts';

const orderStatus = {
  onWay: <OnWay />,
  success: <SuccessfullPayment />,
  cancel: <Cancelled />,
  delivered: <Delivered />,
};

const OrderCard = () => {
  return (
    <View style={styles.container}>
      {orderStatus.cancel}
      <View>
        <Text style={styles.text1}>12233489786545-28/sep/2021</Text>
        <Text style={styles.text2}>En camino</Text>
      </View>
      <RightArrow />
    </View>
  );
};

export default OrderCard;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: LIGHTER_GRAY,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text1: {
    fontSize: 16,
    color: DARK,
    fontFamily: EFFRA,
    fontWeight: '400',
  },
  text2: {
    fontFamily: EFFRA,
    fontSize: 12,
    fontWeight: 'bold',
    color: PRIMARY_BLUE,
  },
});
