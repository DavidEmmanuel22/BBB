import React from 'react';
import { FlatList, View } from 'react-native';
import { useQuery } from 'react-query';
import TopProductCard from '../../components/home/TopProductCard';
import SectionHome from '../../components/SectionHome';
import { getBarillianceRecomendations, getSKURecomendations } from '../../models/Recomendations';

const getAttribute = (items: any[], attribute: string) => items.find((item: any) => item?.attribute_code === attribute);
const getItemsIds = (items: any[]) => items.map((item) => item?.id);

const Recomendations = () => {
  const { data: brRecomendations = {} } = useQuery('barilliancerecomendations', getBarillianceRecomendations);
  const { recommendations = [] } = brRecomendations as any;
  const { items: barillianceItems = [] } = recommendations[0] || {};
  const barillianceIds = getItemsIds(barillianceItems);

  const { data: skuRecomendations = {} }: any = useQuery(
    'skurecomendations',
    () => getSKURecomendations({ ids: barillianceIds.join() }),
    { enabled: barillianceIds.length > 0 }
  );
  const { items = [] } = skuRecomendations;

  return (
    items?.length > 0 && (
      <SectionHome title="te recomendamos" seeAllRight>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={items}
          renderItem={({ index, item }) => (
            <View key={index} style={{ marginRight: 12 }}>
              <TopProductCard
                source={{ uri: getAttribute(item?.custom_attributes ?? [], 'scene7_urls')?.value }}
                description={item?.name}
                price={item?.price}
                specialPrice={getAttribute(item?.custom_attributes ?? [], 'special_price')?.value}
                onPress={() => {}}
              />
            </View>
          )}
          keyExtractor={(item) => item?.id}
        />
      </SectionHome>
    )
  );
};

export default Recomendations;
