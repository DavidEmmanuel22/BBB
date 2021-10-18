import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RightArrow from '../../assets/icons/RightArrow';
import { DARK, GRAY, GRAY2, LIGHTER_GRAY, PRIMARY_BLUE } from '../../constants/colors';
import { EFFRA } from '../../constants/fonts';

type ReviewCardProps = {
  onPress: () => void;
  detail: String;
  date: String;
  rating: number;
};

const styleIconStart = (color = GRAY) => ({
  color,
  marginLeft: 3,
  marginRight: 3,
  marginTop: 12,
  marginBottom: 12,
});

const Qualification = ({ limit, actives }: any) => {
  const list = [...Array(limit).keys()];
  const active = (index: number) => index <= actives - 1;
  return (
    <>
      {list.map((index) => (
        <FontAwesomeIcon
          style={styleIconStart(active(index) ? PRIMARY_BLUE : GRAY)}
          icon={[active(index) ? 'fas' : 'far', 'star']}
        />
      ))}
    </>
  );
};

const ReviewCard = ({ onPress, detail, rating, date }: ReviewCardProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.constainerDescription}>
          <Text style={styles.text1}>{date}</Text>
          <Text style={styles.text2}>{detail}</Text>
          <View style={styles.qualification}>
            <Qualification limit={5} actives={rating} />
          </View>
        </View>
        <RightArrow />
      </View>
    </TouchableOpacity>
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
