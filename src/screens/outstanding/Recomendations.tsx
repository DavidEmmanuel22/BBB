import React from 'react';
import { FlatList, View } from 'react-native';
import { useQuery } from 'react-query';
import TopProductCard from '../../components/home/TopProductCard';
import { getSKURecomendations } from '../../models/Recomendations';
import { formatMoney } from '../../utils/genericFunctions';

const getAttribute = (items: any[]) => items.find((item: any) => item?.attribute_code === 'scene7_urls');

const Recomendations = () => {
  //const { data: brRecomendations } = useQuery('barilliancerecomendations', getBarillianceRecomendations);

  const { data: skuRecomendations = {} }: any = useQuery('skurecomendations', getSKURecomendations);
  const { items = [] } = skuRecomendations;

  return (
    <>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        renderItem={({ index, item }) => (
          <View key={index} style={{ marginRight: 12 }}>
            <TopProductCard
              source={{ uri: getAttribute(item?.custom_attributes ?? [])?.value }}
              description={item?.name}
              price={formatMoney(item?.price || 0, false)}
              onPress={() => {}}
            />
          </View>
        )}
        keyExtractor={(item) => item?.id}
      />
    </>
  );
};

export default Recomendations;
