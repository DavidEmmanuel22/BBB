import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, TouchableOpacity } from 'react-native';
import { BLUE, DARK, GRAY, GRAY2, LIGHTER_GRAY, PRIMARY_BLUE, SUCCESS, WHITE } from '../../constants/colors';
import { getHeight, getWidth } from '../../utils/interfaceDimentions';
import Text from '../Text';
import { TextField } from 'rn-material-ui-textfield';
import IconGeneric from '../IconGeneric';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { EFFRA_BOLD } from '../../constants/fonts';
import { RowContent } from '../../utils/stylesGenetic';
const CartDelivery = () => {
  const [cpValue, setCpValue] = useState('');
  const [errorCp, setErrorCp] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const ToAddress = 'A domicilio';
  const InStore = 'En tienda';

  const [selectedButton, setSelectedButton] = useState('');

  const ButtonDelivery = ({ title = '', iconName = '' }) => {
    const styleBorder = { borderColor: selectedButton === title ? PRIMARY_BLUE : LIGHTER_GRAY };

    const PressButton = () => {
      if (title === ToAddress) {
        setShowInput(true);
      }
      setSelectedButton(title);
    };

    return (
      <TouchableOpacity onPress={PressButton} style={[styles.button, styleBorder]}>
        <IconGeneric name={iconName} width={getWidth(20)} iconColor={DARK} />
        <Text medium>{title}</Text>
      </TouchableOpacity>
    );
  };

  const calculate = () => {
    if (cpValue.length > 4) {
      setErrorCp('');
      setShowInput(false);
      setShowInfo(true);
    } else {
      setErrorCp('Código postal invalido');
    }
  };
  const [typeDeliverySelect, setTypeDeliverySelect] = useState('');
  const editCp = () => {
    setShowInfo(false);
    setShowInput(true);
  };
  const TypeDelivery = ({ typeText = '', date = '', type = '' }) => {
    const changeType = () => {
      setTypeDeliverySelect(type);
    };
    return (
      <>
        <BouncyCheckbox
          size={getWidth(20)}
          text={typeText}
          fillColor={SUCCESS}
          unfillColor={WHITE}
          textStyle={styles.checkText}
          onPress={changeType}
          isChecked={typeDeliverySelect === type}
          style={styles.contentCheck}
        />
        <Text style={styles.textInfo} size={getWidth(14)} color={GRAY2}>
          {date}
        </Text>
      </>
    );
  };
  return (
    <View style={styles.separate}>
      <Text medium style={styles.title} color={BLUE} size={getWidth(18)}>
        Tipo de Entrega
      </Text>
      <View style={styles.contentButtons}>
        <ButtonDelivery iconName="delivery" title={ToAddress} />
        <ButtonDelivery iconName="store" title={InStore} />
      </View>
      {selectedButton === ToAddress && (
        <>
          {showInput && (
            <View style={styles.start}>
              <TextField
                label="Código postal"
                style={styles.cpInput}
                keyboardType="numeric"
                containerStyle={styles.cpInput}
                tintColor={PRIMARY_BLUE}
                baseColor={GRAY}
                value={cpValue}
                error={errorCp}
                maxLength={6}
                onChangeText={(val) => setCpValue(val)}
              />
              <TouchableOpacity
                onPress={calculate}
                style={[styles.buttonCalculate, { bottom: getHeight(errorCp === '' ? 15 : 25) }]}
              >
                <Text size={getWidth(14)} color={PRIMARY_BLUE}>
                  Calcular
                </Text>
                <IconGeneric
                  name={'chevronRight'}
                  height={getWidth(12)}
                  width={getWidth(12)}
                  iconColor={PRIMARY_BLUE}
                />
              </TouchableOpacity>
            </View>
          )}

          {showInfo && (
            <View style={styles.contentInfo}>
              <TouchableOpacity onPress={editCp} style={RowContent}>
                <Text color={PRIMARY_BLUE}>Morelia Michoacan 58000</Text>
                <IconGeneric name={'edit'} height={getWidth(16)} width={getWidth(16)} iconColor={PRIMARY_BLUE} />
              </TouchableOpacity>
              <TypeDelivery
                type={'Estándar'}
                typeText={`Envió estándar: ${'99.00'}`}
                date={'Llega el Miercoles 29- Lunes 04'}
              />
              <TypeDelivery
                type={'Express'}
                typeText={`Envió express: ${'99.00'}`}
                date={'Llega el Miercoles 29- Lunes 04'}
              />
            </View>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  separate: {
    borderBottomColor: LIGHTER_GRAY,
    borderBottomWidth: getWidth(4),
    paddingBottom: getHeight(15),
  },
  textInfo: {
    marginTop: getHeight(5),
    marginLeft: getWidth(35),
  },
  contentInfo: {
    marginTop: getHeight(20),
  },
  contentCheck: {
    marginTop: getHeight(10),
  },

  checkText: {
    fontFamily: EFFRA_BOLD,
    color: DARK,
    fontSize: getWidth(14),
    textDecorationLine: 'none',
  },
  start: {
    alignSelf: 'flex-start',
  },
  buttonCalculate: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    right: 0,
  },
  cpInput: {
    position: 'relative',
    width: getWidth(190),
  },
  title: {
    marginTop: getHeight(25),
  },
  contentButtons: {
    marginTop: getHeight(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: getWidth(150),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: getHeight(40),
    borderRadius: getHeight(20),
    borderColor: PRIMARY_BLUE,
    borderWidth: getWidth(2),
  },
});
export default CartDelivery;
