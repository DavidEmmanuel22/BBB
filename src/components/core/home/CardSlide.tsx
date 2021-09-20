import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../../Button';
import Carousel from '../../Carousel';

type CardSlide = {
  description?: string;
  price?: string;
  onPress?: () => void;
};

const dummyData = [
  {
    url: 'https://promart.vteximg.com.br/arquivos/ids/520742-1000-1000/115356.jpg?v=637351101362470000',
    id: 1,
  },
  {
    title: 'Food inside a Bowl',
    url: 'https://images-na.ssl-images-amazon.com/images/I/61DvGVOTLGL._AC_SL1000_.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 2,
  },
  {
    title: 'Vegatable Salad',
    url: 'https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 3,
  },
];

const CardSlide = () => {
  return (
    <View>
      <View>
        <Carousel data={dummyData} />
      </View>
      <View style={styles.containersStars}>
        <FontAwesomeIcon style={styles.start} icon={['fas', 'star']} />
        <FontAwesomeIcon style={styles.start} icon={['fas', 'star']} />
        <FontAwesomeIcon style={styles.start} icon={['fas', 'star']} />
        <FontAwesomeIcon style={styles.start} icon={['far', 'star']} />
        <FontAwesomeIcon style={styles.start} icon={['far', 'star']} />
      </View>
      <View>
        <Text style={styles.description} numberOfLines={2}>
          Escurridor para trastes doble aluminio Namaro Design con charola color
          gris
        </Text>
        <View style={styles.options}>
          <Text style={styles.priceText}>$1549.00</Text>
          <Button
            containerStyle={styles.button}
            title="Agregar"
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

export default CardSlide;

const styles = StyleSheet.create({
  containersStars: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  options: {
    marginTop: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceText: {
    color: '#1a4e8a',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Effra',
  },
  button: {
    width: 120,
    height: 40,
  },
  description: {
    color: '#212529',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Effra',
    fontWeight: '600',
    lineHeight: 20,
  },
  start: {
    color: '#ffc72c',
    marginLeft: 6,
    marginRight: 6,
    marginTop: 12,
    marginBottom: 12,
  },
});
