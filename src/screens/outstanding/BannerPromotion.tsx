import React, { Fragment } from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import { useQuery } from 'react-query';
import OfferCard from '../../components/home/OfferCard';
import { getSlider1 } from '../../models/HomeModel';
import { sortNumberByKey } from '../../utils/genericFunctions';

const { width } = Dimensions.get('window');

const BannerPromotion = () => {
  const { data: slider1 = [] } = useQuery('slider1', getSlider1);

  return (
    <Fragment>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width - 50}
        data={sortNumberByKey(slider1, 'Posicion')}
        renderItem={({ item, index }) => (
          <View key={index} style={{ marginRight: 12 }}>
            <OfferCard height={width / 2.5} source={{ uri: item?.Imagen }} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </Fragment>
  );
};

export default BannerPromotion;
