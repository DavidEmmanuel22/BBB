import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useQuery } from 'react-query';
import Container from '../components/Container';
import Indicator from '../components/Indicator';
import EmptyList from '../components/orders/EmptyList';
import ReviewCard from '../components/reviews/ReviewCard';
import { BLUE } from '../constants/colors';
import { LoginModel } from '../models/LoginModel';
import { getUserOrders } from '../models/OrdersModel';
import { TokenModel } from '../models/TokenModel';
import { getHeight } from '../utils/interfaceDimentions';

const { GetUserData } = LoginModel();
const { GetCustomerToken, GetAdminToken } = TokenModel();

type HeaderProps = {
  onPress?: () => void;
};

const Header = ({ onPress }: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onPress} style={styles.iconLeft}>
        <FontAwesomeIcon style={styles.icon} icon="arrow-left" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Mis Reseñas</Text>
    </View>
  );
};

type ReviewProps = { navigation: any };

const Reviews = ({ navigation }: ReviewProps) => {
  const [userId, setUserId] = useState<any>();
  const [adminToken, setAdminToken] = useState<any>();

  useEffect(() => {
    GetCustomerToken({ username: 'ricardo@dgk.com.mx', password: 'MiRich.2015' }).then((token) =>
      GetUserData(token).then((data) => setUserId(data?.id))
    );
    GetAdminToken().then((token) => setAdminToken(token));
  }, []);

  const { data, isLoading, status, refetch } = useQuery<any>('orders', () => getUserOrders(userId, adminToken), {
    enabled: !!userId && !!adminToken,
  });
  if (status === 'idle' || status === 'loading') {
    return <Indicator />;
  }

  return (
    <Container containerStyles={styles.containetStyle}>
      <FlatList
        data={data?.items ?? []}
        ListHeaderComponent={<Header onPress={() => navigation?.goBack()} />}
        onRefresh={() => refetch()}
        refreshing={isLoading}
        renderItem={({ item }) => <ReviewCard key={item?.id} />}
        ListEmptyComponent={<EmptyList />}
        keyExtractor={(item: any) => item?.id}
      />
    </Container>
  );
};

export default Reviews;
const styles = StyleSheet.create({
  containetStyle: {
    paddingLeft: 0,
    paddingRight: 0,
    margin: 0,
  },
  headerContainer: {
    position: 'relative',
    height: getHeight(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BLUE,
  },
  iconLeft: {
    position: 'absolute',
    left: 25,
  },
  icon: {
    color: 'white',
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'TerminaW05-Bold',
    color: 'white',
  },
});
