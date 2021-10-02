import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useQuery } from 'react-query';
import Container from '../components/Container';
import Indicator from '../components/Indicator';
import EmptyList from '../components/orders/EmptyList';
import OrderCard from '../components/orders/OrderCard';
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
      <Text style={styles.headerTitle}>Mis Pedidos</Text>
    </View>
  );
};

type OrdersProps = { navigation: any };

const Orders = ({ navigation }: OrdersProps) => {
  const [userId, setUserId] = useState<any>();
  const [adminToken, setAdminToken] = useState<any>();

  useEffect(() => {
    GetCustomerToken('ricardo@dgk.com.mx', 'MiRich.2015').then((token) =>
      GetUserData(token).then((data) => setUserId(data?.id))
    );
    GetAdminToken().then((token) => setAdminToken(token));
  }, []);

  const { data, isLoading, refetch } = useQuery<any>('myOrders', () => getUserOrders(userId, adminToken), {
    enabled: !!userId && !!adminToken,
  });

  if (isLoading) {
    return <Indicator />;
  }

  return (
    <Container containerStyles={styles.containetStyle}>
      <FlatList
        data={data?.items ?? []}
        ListHeaderComponent={<Header onPress={() => navigation?.goBack()} />}
        onRefresh={() => refetch()}
        refreshing={isLoading}
        renderItem={({ item }) => (
          <OrderCard key={item?.id} id={item?.increment_id} createdAt={item?.created_at} status={item?.status} />
        )}
        ListEmptyComponent={<EmptyList />}
        keyExtractor={(item: any) => item?.id}
      />
    </Container>
  );
};

export default Orders;
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
