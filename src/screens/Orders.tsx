import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useQuery} from 'react-query';
import Indicator from '../components/Indicator';
import EmptyList from '../components/orders/EmptyList';
import OrderCard from '../components/orders/OrderCard';
import {LoginModel} from '../models/LoginModel';
import {getUserOrders} from '../models/OrdersModel';
import {TokenModel} from '../models/TokenModel';

const {GetUserData} = LoginModel();
const {GetCustomerToken, GetAdminToken} = TokenModel();

const Orders = () => {
  const [userId, setUserId] = useState<any>();
  const [adminToken, setAdminToken] = useState<any>();

  useEffect(() => {
    GetCustomerToken('ricardo@dgk.com.mx', 'MiRich.2015').then(token =>
      GetUserData(token).then(data => setUserId(data?.id)),
    );
    GetAdminToken().then(token => setAdminToken(token));
  }, []);

  const {data, isLoading} = useQuery<any>(
    'orders',
    () => getUserOrders(userId, adminToken),
    {
      enabled: !!userId && !!adminToken,
    },
  );

  console.log(data);

  if (isLoading && data?.items?.length <= 0) {
    return <Indicator />;
  }

  return (
    <View>
      <FlatList
        data={data?.items ?? []}
        renderItem={({item}) => <OrderCard status={item?.status} />}
        ListEmptyComponent={<EmptyList />}
        keyExtractor={(item: any) => item?.id}
      />
    </View>
  );
};

export default Orders;
