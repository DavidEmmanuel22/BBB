/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Keyboard, ViewStyle } from 'react-native';
import { BLUE, DARK, GRAY2, LIGHTER_GRAY3, PRIMARY_BLUE, WHITE } from '../../constants/colors';
import { getHeight, getWidth } from '../../utils/interfaceDimentions';
import Text from '../Text';
import { RowContent } from '../../utils/stylesGenetic';
import IconGeneric from '../IconGeneric';
import { TextField } from 'rn-material-ui-textfield';

import { useState } from 'react';

interface IProps {}

const DeliverySection: React.FC<IProps> = ({}) => {
  const [showDeliveryButton, setShowDeliveryButton] = useState(false);
  const [showDeliveryPrice, setShowDeliveryPrice] = useState(false);
  const [cpValue, setCpValue] = useState('');
  const calculatePriceDelivery = () => {
    Keyboard.dismiss();
    setShowDeliveryPrice(true);
  };

  const ButtonSection = ({ title = '', iconName = '', onPress = () => {} }) => {
    return (
      <TouchableOpacity onPress={onPress} style={RowContent}>
        <IconGeneric name={iconName} width={getWidth(24)} iconColor={PRIMARY_BLUE} />
        <Text color={PRIMARY_BLUE} style={styles.separation}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };
  const CalculateDelivery = () => {
    return (
      <View style={[RowContent, styles.delivery]}>
        <TextField
          label="Código postal"
          style={styles.cpInput}
          keyboardType="numeric"
          containerStyle={styles.cpInput}
          tintColor={PRIMARY_BLUE}
          baseColor={PRIMARY_BLUE}
          value={cpValue}
          onChangeText={(val) => setCpValue(val)}
        />
        <TouchableOpacity onPress={calculatePriceDelivery} style={styles.buttonDelivery}>
          <IconGeneric name={'delivery'} width={getWidth(20)} iconColor={PRIMARY_BLUE} />
          <Text style={styles.separation} color={PRIMARY_BLUE}>
            Calcular
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  interface PropsItemPice {
    priceDelivery?: string;
    date?: string;
  }
  const PriceItem = ({ priceDelivery, date }: PropsItemPice) => {
    return (
      <View style={styles.verticalSeparation}>
        <Text medium size={getWidth(14)} color={BLUE}>
          {priceDelivery !== '0' ? ' Envió a domicilio' : 'Gratis'}
        </Text>
        <View style={RowContent}>
          <View style={Dot(DARK)} />
          <Text medium size={getWidth(14)}>
            {priceDelivery !== '0' ? 'Envió estándar:$' + priceDelivery : 'Recoger en tienda: $0.00'}
          </Text>
        </View>
        <View style={RowContent}>
          <View style={Dot(WHITE)} />
          <Text color={GRAY2} size={getWidth(14)}>
            {date ? date : '(Entrega segura sin contacto)'}
          </Text>
        </View>
      </View>
    );
  };
  const DeliveryPrice = () => {
    return (
      <View>
        <PriceItem priceDelivery="99.00" date="Entrega lun 26" />
        <PriceItem />
      </View>
    );
  };
  return (
    <View style={styles.content}>
      <ButtonSection
        onPress={() => {
          setShowDeliveryPrice(false);
          setShowDeliveryButton(!showDeliveryButton);
        }}
        title="Calcular costos de envió"
        iconName="delivery"
      />
      {showDeliveryButton && CalculateDelivery()}
      {showDeliveryPrice && <DeliveryPrice />}
      <ButtonSection title="Agregar a mesa de regalos" iconName="gift" />
    </View>
  );
};

const Dot = (color = ''): ViewStyle => {
  return {
    height: getWidth(3),
    width: getWidth(3),
    borderRadius: getWidth(1.5),
    backgroundColor: color,
    marginHorizontal: getWidth(10),
  };
};
const styles = StyleSheet.create({
  content: {
    marginTop: getHeight(25),
    borderTopColor: LIGHTER_GRAY3,
    borderTopWidth: getWidth(4),
    borderBottomColor: LIGHTER_GRAY3,
    borderBottomWidth: getWidth(4),
  },
  separation: {
    marginLeft: getWidth(10),
  },
  cpInput: {
    width: getWidth(150),
  },
  buttonDelivery: {
    height: getHeight(45),
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: getWidth(1),
    borderColor: PRIMARY_BLUE,
    paddingHorizontal: getWidth(25),
  },
  delivery: {
    justifyContent: 'space-evenly',
  },
  verticalSeparation: {
    marginVertical: getHeight(10),
  },
});

export default DeliverySection;
