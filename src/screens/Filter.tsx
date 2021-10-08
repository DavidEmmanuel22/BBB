import React from 'react';
import { View, StatusBar, StyleSheet, Text } from 'react-native';
import { DARKER_BLUE, PRIMARY_BLUE, WHITE } from '../constants/colors';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Container from '../components/Container';
import { ScrollView } from 'react-native-gesture-handler';
import Button, { BUTTONTYPE } from '../components/Button';
import Collapsable from '../components/Collapsable';
import InputRdbFilter from '../components/InputRdbFilter';
import IconGeneric from '../components/IconGeneric';

const Filter: React.FC = () => {
  const styles = StyleSheet.create({
    filterButton: {
      height: 36,
    },
    iconButton: {
      marginTop: 75,
    },
    deleteButtonText: {
      color: PRIMARY_BLUE,
      fontFamily: 'Effra-Regular',
      fontWeight: '400',
      marginLeft: -80,
    },
    filterButtonText: {
      color: WHITE,
      fontFamily: 'Effra-Regular',
      fontWeight: '400',
    },
    textTypeBlueDark: {
      fontFamily: 'TerminaW05-Bold',
      color: DARKER_BLUE,
      fontSize: 24,
      marginTop: 24,
      marginHorizontal: 90,
    },
    textTypeBlue: {
      fontFamily: 'Effra_Rg',
      color: PRIMARY_BLUE,
      fontSize: 18,
      marginTop: 18,
      marginHorizontal: 0,
    },
    line: {
      borderBottomColor: PRIMARY_BLUE,
      borderBottomWidth: 1,
    },
  });

  return (
    <ScrollView>
      <Container>
        <StatusBar animated={true} backgroundColor="white" />
        <Text style={styles.textTypeBlueDark}>Filtros</Text>

        <Text style={styles.textTypeBlue}>Ordenar</Text>
        <InputRdbFilter
          iconRdb={true}
          notIcon={false}
          icon={'lowerToHigher'}
          text={'De menor a mayor precio'}
          collapsable={true}
        />
        <InputRdbFilter
          iconRdb={true}
          notIcon={false}
          icon={'higherToLower'}
          text={'De mayor a menor precio'}
          collapsable={true}
        />
        <InputRdbFilter iconRdb={true} notIcon={false} icon={'azIcon'} text={'De la A a la Z '} collapsable={true} />
        <InputRdbFilter
          iconRdb={true}
          notIcon={false}
          icon={'inverseAzIcon'}
          text={'De la Z a la A'}
          collapsable={true}
        />
        <InputRdbFilter iconRdb={true} notIcon={false} icon={'popularity'} text={'Popularidad'} collapsable={true} />

        <View style={styles.line} />

        <Text style={styles.textTypeBlue}>Filtrar</Text>
        <Collapsable />
        <Text style={styles.textTypeBlue}>Por precio</Text>
        <MultiSlider
          values={[350, 1000]}
          enabledTwo={true}
          selectedStyle={{ backgroundColor: PRIMARY_BLUE }}
          markerStyle={{ backgroundColor: PRIMARY_BLUE }}
          min={300}
          max={3000}
        />

        <Button
          title="Borrar filtros"
          onPress={() => {}}
          type={BUTTONTYPE.SECONDARY}
          containerStyle={styles.filterButton}
          textStyle={styles.deleteButtonText}
          icon={() => (
            <IconGeneric name={'trash'} iconColor={PRIMARY_BLUE} width={100} height={100} style={styles.iconButton} />
          )}
        />

        <Button
          title="Aplicar filtros"
          onPress={() => {}}
          type={BUTTONTYPE.PRIMARY}
          containerStyle={styles.filterButton}
          textStyle={styles.filterButtonText}
        />
      </Container>
    </ScrollView>
  );
};

export default Filter;
