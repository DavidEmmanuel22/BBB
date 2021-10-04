/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Container from '../components/Container';
import OfferCard from '../components/home/OfferCard';
import CategoryCard from '../components/home/CategoryCard';
import CardSlide from '../components/home/CardSlide';
import TopProductCard from '../components/home/TopProductCard';
import ProductCard from '../components/home/ProductCard';
import SquareImage from '../components/home/SquareImage';
import SectionHome from '../components/SectionHome';
import { NavigationProp } from '@react-navigation/core';
import BannerPromotion from './outstanding/BannerPromotion';

const dummyList: any[] = [
  { id: 0 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];

const calcTileDimensions = (deviceWidth: number, tpr: number) => {
  const margin = deviceWidth / (tpr * 10);
  const size = (deviceWidth - margin * (tpr * 2)) / tpr;
  return { size, margin };
};

const { width } = Dimensions.get('window');
interface IProps {
  navigation: NavigationProp<any, any>;
}
const Principal: React.FC<IProps> = () => {
  const mosaicDimensions = calcTileDimensions(width - 64, 3);
  const { size: sizeCategoty, margin: marginCategory } = calcTileDimensions(width - 64, 2);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, marginTop: 24 }}>
        <BannerPromotion />
        <View
          style={{
            marginTop: 10,
            paddingTop: 24,
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            flexDirection: 'row',
            backgroundColor: '#fff7ec',
          }}
        >
          {dummyList.map((item: any) => (
            <View
              key={item?.id}
              style={{
                marginBottom: 16,
              }}
            >
              <SquareImage
                background="#f60"
                source={require('../assets/images/dummy/square1.jpg')}
                styleText={{ color: 'black', fontSize: 17 }}
                {...mosaicDimensions}
              />
            </View>
          ))}
        </View>
        <View style={{ marginTop: 12 }}>
          <OfferCard height={80} source={require('../assets/images/dummy/banner2.png')} />
        </View>

        <SectionHome title="para tu recámara">
          <View
            style={{
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}
          >
            {dummyList.map((item: any) => (
              <View
                key={item?.id}
                style={{
                  marginBottom: 16,
                  marginHorizontal: marginCategory,
                }}
              >
                <CategoryCard
                  source={require('../assets/images/dummy/bed1.png')}
                  label="Ropa de Cama"
                  size={sizeCategoty}
                />
              </View>
            ))}
          </View>
        </SectionHome>

        <SectionHome title="top recamaras" seeAllRight>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dummyList}
            renderItem={() => (
              <View style={{ marginRight: 12 }}>
                <TopProductCard
                  source={require('../assets/images/dummy/bed2.png')}
                  description="Set de colcha matrimonial/queen…"
                  price="3,679.00"
                  onPress={() => {}}
                />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </SectionHome>

        <SectionHome title="exclusivas de la tienda" seeAllBottom>
          <View
            style={{
              marginTop: 24,
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}
          >
            {dummyList.map((item: any) => (
              <View key={item?.id} style={{ marginBottom: 16, marginHorizontal: marginCategory }}>
                <CategoryCard
                  source={require('../assets/images/dummy/bathroom.png')}
                  label="Ropa de Cama"
                  size={sizeCategoty}
                />
              </View>
            ))}
          </View>
        </SectionHome>

        <View style={{ marginTop: 12 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dummyList}
            renderItem={() => (
              <View style={{ marginRight: 12 }}>
                <OfferCard height={100} source={require('../assets/images/dummy/banner3.png')} />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <SectionHome title="destacados" seeAllRight>
          <CardSlide />
        </SectionHome>

        <SectionHome title="te recomendamos" seeAllRight>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dummyList}
            renderItem={() => (
              <View style={{ marginRight: 12 }}>
                <TopProductCard
                  source={require('../assets/images/dummy/bed2.png')}
                  description="Escurridor para trastes de acero…"
                  price="3,679.00"
                  onPress={() => {}}
                />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </SectionHome>

        <View style={{ marginTop: 24 }}>
          <OfferCard height={150} source={require('../assets/images/dummy/banner4.png')} />
        </View>

        <SectionHome title="ofertas" seeAllRight>
          <CardSlide />
        </SectionHome>

        <SectionHome title="más comprados" seeAllRight>
          {dummyList.map((item) => (
            <View key={item.id}>
              <ProductCard />
            </View>
          ))}
        </SectionHome>

        <View style={{ marginTop: 12 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dummyList}
            renderItem={() => (
              <View style={{ marginRight: 12 }}>
                <OfferCard height={120} source={require('../assets/images/dummy/banner5.png')} />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

        <SectionHome title="categorías" seeAllBottom>
          <View
            style={{
              marginTop: 24,
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}
          >
            {dummyList.map((item: any) => (
              <View key={item?.id} style={{ marginBottom: 16, marginHorizontal: marginCategory }}>
                <CategoryCard source={require('../assets/images/dummy/home.png')} label="Cocinas" size={sizeCategoty} />
              </View>
            ))}
          </View>
        </SectionHome>
      </ScrollView>
    </Container>
  );
};

export default Principal;
