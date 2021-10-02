import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useQuery } from 'react-query';
import Indicator from '../components/Indicator';
import EmptyList from '../components/orders/EmptyList';
import OrderCard from '../components/orders/OrderCard';
import { LoginModel } from '../models/LoginModel';
import { getUserOrders } from '../models/OrdersModel';
import { TokenModel } from '../models/TokenModel';

const { GetUserData } = LoginModel();
const { GetCustomerToken, GetAdminToken } = TokenModel();

const Orders = () => {
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
    <View>
      <FlatList
        data={data?.items ?? []}
        onRefresh={() => refetch()}
        refreshing={isLoading}
        renderItem={({ item }) => (
          <OrderCard key={item?.id} id={item?.increment_id} createdAt={item?.created_at} status={item?.status} />
        )}
        ListEmptyComponent={<EmptyList />}
        keyExtractor={(item: any) => item?.id}
      />
    </View>
  );
};

export default Orders;
