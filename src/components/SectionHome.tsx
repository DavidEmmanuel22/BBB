import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type SectionHome = {
  children: React.ReactNode;
  seeAllRight?: boolean;
  seeAllBottom?: boolean;
  title: string;
};

const SectionHome = ({
  children,
  seeAllRight,
  seeAllBottom,
  title,
}: SectionHome) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text numberOfLines={2} style={styles.title1}>
          {title}
        </Text>
        {seeAllRight && (
          <View style={styles.redirect}>
            <Text style={styles.title2}>Ver todo</Text>
            <FontAwesomeIcon color="#147cd1" icon="chevron-right" />
          </View>
        )}
      </View>
      <View>{children}</View>
      {seeAllBottom && (
        <View style={styles.redirect}>
          <Text style={styles.title2}>Ver todo</Text>
          <FontAwesomeIcon color="#147cd1" icon="chevron-right" />
        </View>
      )}
    </View>
  );
};

export default SectionHome;
const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginBottom: 12,
  },
  redirect: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title1: {
    color: '#002855',
    fontSize: 22,
    flex: 1,
    fontFamily: 'TerminaW05-Bold',
  },
  title2: {
    color: '#147cd1',
  },
  containerTitle: {
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
