import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RightArrow from '../../assets/icons/RightArrow';
import { DARK, GRAY2, LIGHTER_GRAY, PRIMARY_BLUE } from '../../constants/colors';
import { EFFRA } from '../../constants/fonts';

const ReviewCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.constainerDescription}>
        <Text style={styles.text1}>28/ago/2021</Text>
        <Text style={styles.text2}>Set de colcha matrimonial/queen de algodón UGG® Dawn color azul océano</Text>
        <View style={styles.qualification}>
          <FontAwesomeIcon style={styles.start} icon={['fas', 'star']} />
          <FontAwesomeIcon style={styles.start} icon={['fas', 'star']} />
          <FontAwesomeIcon style={styles.start} icon={['fas', 'star']} />
          <FontAwesomeIcon style={styles.start} icon={['far', 'star']} />
          <FontAwesomeIcon style={styles.start} icon={['far', 'star']} />
        </View>
      </View>
      <RightArrow />
    </View>
  );
};

export default ReviewCard;
const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 24,
    marginRight: 24,
    height: 80,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: LIGHTER_GRAY,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  constainerDescription: {
    flex: 1,
    marginRight: 8,
  },
  text1: {
    fontSize: 13,
    color: GRAY2,
    fontFamily: EFFRA,
    fontWeight: '400',
  },
  text2: {
    fontFamily: EFFRA,
    fontSize: 14,
    color: DARK,
  },
  qualification: {
    flexDirection: 'row',
  },
  start: {
    color: PRIMARY_BLUE,
    marginLeft: 6,
    marginRight: 6,
    marginTop: 12,
    marginBottom: 12,
  },
});
