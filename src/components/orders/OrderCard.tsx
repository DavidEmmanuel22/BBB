import dayjs from 'dayjs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Cancelled from '../../assets/icons/Cancelled';
import Delivered from '../../assets/icons/Delivered';
import OnWay from '../../assets/icons/OnWay';
import RightArrow from '../../assets/icons/RightArrow';
import SuccessfullPayment from '../../assets/icons/SuccessfulPayment';
import {DARK, LIGHTER_GRAY, PRIMARY_BLUE} from '../../constants/colors';
import {EFFRA} from '../../constants/fonts';

const orderStatus: Record<string, any> = {
  complete: <Delivered />,
  canceled: <Cancelled />,
  cancel_requested: <Cancelled />,
  closed: <SuccessfullPayment />,
  playment_pending: <Delivered />,
  payment_review: <Delivered />,
  payment_confirmation: <Delivered />,
  default: <OnWay />,
};

const STATUS: Record<string, any> = {
  complete: 'Entregado',
  canceled: 'Cancelación completa',
  cancel_requested: 'Solicitud de cancelación',
  closed: 'Completado',
  playment_pending: 'Pendiente de pago',
  payment_review: 'Revisión de pagos',
  payment_confirmation: 'Confirmación de pago',
  default: '',
};

type OrderCardProps = {
  status?: string;
  id?: string;
  createdAt?: any;
};

const OrderCard = ({status, id, createdAt}: OrderCardProps) => {
  return (
    <View style={styles.container}>
      {orderStatus[status || 'default']}
      <View>
        <Text style={styles.text1}>
          {`${id} - ${dayjs(createdAt).format('D [de] MMM [del] YYYY')}`}
        </Text>
        <Text style={styles.text2}>{STATUS[status || 'default']}</Text>
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
