import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import dayjs from 'dayjs';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BRAND_BLUE, DARKER_BLUE, GRAY, LIGHTER_GRAY, PRIMARY_BLUE, YELLOW } from '../../constants/colors';
import { EFFRA } from '../../constants/fonts';
import { getHeight } from '../../utils/interfaceDimentions';

const convertArrayToObject = (array: any[], key: string) =>
  array.reduce(
    (obj: any, item: any) => ({
      ...obj,
      [item[key]]: item,
    }),
    {}
  );

type HeaderProps = {
  onPress?: () => void;
};

type QualificationProps = {
  label?: String;
  boldLabel?: boolean;
  limit: number;
  size?: number;
  actives: number;
  colorActive?: string;
};

const Header = ({ onPress }: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onPress} style={styles.iconRight}>
        <FontAwesomeIcon style={styles.icon} icon="times" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Mi Reseña</Text>
    </View>
  );
};

const Product = () => {
  return (
    <View style={styles.product}>
      <View style={styles.containerImage}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Square_dance_sign.svg/1200px-Square_dance_sign.svg.png',
          }}
        />
      </View>
      <View style={styles.containerDescriptionProduct}>
        <Text numberOfLines={2}>Set de colcha matrimonial/queen de algodón UGG® Dawn color…</Text>
      </View>
    </View>
  );
};

const SectionTitle = ({ title, children }: any) => {
  return (
    <View style={[styles.containerTitle, styles.borderBottom]}>
      <Text style={styles.headTitle}>{title}</Text>
      {children}
    </View>
  );
};

const styleIconStart = (color = GRAY) => ({
  color,
  marginLeft: 3,
  marginRight: 3,
  marginTop: 12,
  marginBottom: 12,
});

const Qualification = ({ label, boldLabel, limit, size, actives, colorActive = PRIMARY_BLUE }: QualificationProps) => {
  const list = [...Array(limit).keys()];
  const active = (index: number) => index <= actives - 1;
  return (
    <View style={styles.containerQualification}>
      <Text style={[styles.qualificationLabel, boldLabel && styles.boldText]}>{label}</Text>
      <View style={styles.containerScore}>
        {list.map((index) => (
          <FontAwesomeIcon
            size={size}
            style={styleIconStart(active(index) ? colorActive : GRAY)}
            icon={[active(index) ? 'fas' : 'far', 'star']}
          />
        ))}
      </View>
    </View>
  );
};

type ReviewDetailProps = { navigation: any; route: any };

const ReviewDetail = ({ navigation, route }: ReviewDetailProps) => {
  const { review } = route?.params || {};

  const ratingsObj = convertArrayToObject(review?.ratings || [], 'rating_name');
  return (
    <ScrollView>
      <Header onPress={() => navigation.goBack()} />
      <View style={styles.containerView}>
        <SectionTitle title="Producto evaluado">
          <Product />
        </SectionTitle>
        <SectionTitle title="Calificaciones">
          <Qualification
            label="General"
            boldLabel
            limit={5}
            actives={ratingsObj?.Rating?.value || 0}
            colorActive={YELLOW}
            size={25}
          />
          <Qualification label="Calidad" limit={5} actives={ratingsObj?.Quality?.value || 0} />
          <Qualification label="Valor" limit={5} actives={ratingsObj?.Value?.value || 0} />
          <Qualification label="Precio" limit={5} actives={ratingsObj?.Price?.value || 0} />
        </SectionTitle>
        <SectionTitle title="Tu opinión">
          <Text style={styles.opinionTitle}>{review?.title}</Text>
          <Text style={styles.opinionDescription}>{review?.detail}</Text>
        </SectionTitle>
        <SectionTitle title="Fecha de publicación">
          <Text style={styles.opinionTitle}>{dayjs(review?.created_at).format('D [de] MMM [del] YYYY')}</Text>
        </SectionTitle>
      </View>
    </ScrollView>
  );
};
export default ReviewDetail;
const styles = StyleSheet.create({
  containerView: {
    marginLeft: 36,
    marginRight: 36,
  },
  opinionTitle: {
    fontSize: 16,
    fontFamily: 'Effra',
    fontWeight: '700',
    marginBottom: 8,
  },
  opinionDescription: {
    fontSize: 13,
    fontFamily: 'Effra',
    fontWeight: '500',
  },
  boldText: {
    fontWeight: 'bold',
  },
  qualificationLabel: {
    fontSize: 16,
    fontFamily: 'Effra',
    fontWeight: '600',
  },
  containerQualification: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerScore: {
    flexDirection: 'row',
  },
  containerTitle: {
    flexDirection: 'column',
    marginTop: 12,
  },
  borderBottom: {
    paddingBottom: 23,
    borderBottomColor: LIGHTER_GRAY,
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  headTitle: {
    color: BRAND_BLUE,
    fontSize: 18,
    fontFamily: EFFRA,
    marginBottom: 16,
    fontWeight: '700',
  },
  product: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  containerDescriptionProduct: {
    flex: 1,
  },
  headerContainer: {
    position: 'relative',
    height: getHeight(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconRight: {
    position: 'absolute',
    right: 25,
  },
  icon: {
    color: DARKER_BLUE,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'TerminaW05-Bold',
    color: DARKER_BLUE,
  },
});
