/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Text from '../Text';
import { BLUE, GREEN, GRAY2 } from '../../constants/colors';
import { Address } from '../../models/Objects/Directions';
import { navigate } from '../../utils/navigations';
import IconGeneric from '../IconGeneric';

interface IProps {
  data: Address;
}

const ContentListAddress: React.FC<IProps> = ({ data }) => {
  return (
    <TouchableOpacity style={styles.margin} onPress={() => click(data)}>
      <IconGeneric name={'address'} iconColor={BLUE} width={20} height={20} style={styles.iconText} />
      <Text style={styles.textName}>{`${data.firstname} ${data.lastname}`}</Text>
      <Text style={styles.textAddress}>{`${data.street} ${data.city} ${data.postcode}`}</Text>
      {data.default_shipping ? (
        <View>
          <IconGeneric name={'check'} iconColor={GREEN} width={20} height={20} style={styles.iconShipping} />
          <Text style={styles.textShipping}>Predeterminado envios y facturacion</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};
const click = (item: any) => {
  navigate('adddirections', item);
};
const styles = StyleSheet.create({
  textName: {
    fontFamily: 'Effra-Regular',
    fontSize: 16,
    color: 'black',
    marginLeft: 35,
    marginTop: -25,
  },
  textAddress: {
    fontFamily: 'Effra-Regular',
    fontSize: 16,
    color: GRAY2,
    marginLeft: 35,
  },
  textShipping: {
    fontFamily: 'Effra-Regular',
    fontSize: 14,
    color: 'black',
    marginLeft: 50,
    marginTop: -23,
  },
  margin: {
    marginTop: 15,
  },
  iconText: {
    marginLeft: 10,
  },
  iconShipping: {
    marginLeft: 30,
  },
});
export default ContentListAddress;
