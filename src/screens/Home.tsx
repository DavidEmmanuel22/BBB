/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Dimensions, StyleSheet, ScrollView, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import Container from '../components/Container';
import OfferCard from '../components/core/home/OfferCard';
import CategoryCard from '../components/core/home/CategoryCard';
import CardSlide from '../components/core/home/CardSlide';
import TopProductCard from '../components/core/home/TopProductCard';
import CategoryItem from '../components/core/home/CategoryItem';
import ProductCard from '../components/core/home/ProductCard';
import SquareImage from '../components/core/home/SquareImage';
import SectionHome from '../components/SectionHome';

const dummyList: any[] = [
  {id: 0},
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
];

const categories: any[] = [
  {id: 0, text: 'Destacados'},
  {id: 1, text: 'Categorías'},
  {id: 2, text: 'Zona oulet'},
  {id: 4, text: 'Mesa'},
];

const calcTileDimensions = (deviceWidth: number, tpr: number) => {
  const margin = deviceWidth / (tpr * 10);
  const size = (deviceWidth - margin * (tpr * 1)) / tpr;
  return {size, margin};
};

const marginByPosition = (
  position: number,
  tpr: number,
  marginSize: number,
) => {
  let margin = 'marginLeft';
  if (position % tpr === 0) {
    margin = 'marginRight';
  }
  return {[margin]: marginSize};
};

const {width} = Dimensions.get('window');

const Home: React.FC = () => {
  const [categorySelected, setCategory] = useState('Destacados');
  const mosaicDimensions = calcTileDimensions(width - 64, 3);
  const {size: sizeCategoty, margin: marginCategory} = calcTileDimensions(
    width - 64,
    2,
  );

  return (
    <Container>
      <View style={{flexDirection: 'row'}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({item}: any) => (
            <View key={item.id} style={{marginRight: 28}}>
              <CategoryItem
                isSelected={item.text === categorySelected}
                label={item.text}
                onPress={() => setCategory(item.text)}
              />
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, marginTop: 24}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dummyList}
          renderItem={() => (
            <View style={{marginRight: 12}}>
              <OfferCard
                height={180}
                source={require('../assets/images/dummy/banner1.png')}
              />
            </View>
          )}
          keyExtractor={item => item.id}
        />
        <View
          style={{
            marginTop: 10,
            paddingTop: 24,
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            flexDirection: 'row',
            backgroundColor: '#fff7ec',
          }}>
          {dummyList.map((item: any, index: number) => (
            <View
              key={item?.id}
              style={{
                marginBottom: 16,
                ...marginByPosition(index, 3, mosaicDimensions?.margin),
              }}>
              <SquareImage
                background="#f60"
                source={require('../assets/images/dummy/square1.jpg')}
                styleText={{color: 'black', fontSize: 17}}
                size={mosaicDimensions?.size}
              />
            </View>
          ))}
        </View>
        <View>
          <OfferCard
            height={80}
            source={require('../assets/images/dummy/banner2.png')}
          />
        </View>

        <SectionHome title="para tu recámara">
          <View
            style={{
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}>
            {dummyList.map((item: any, index: number) => (
              <View
                key={item?.id}
                style={{
                  marginBottom: 16,
                  ...marginByPosition(index, 2, marginCategory),
                }}>
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
              <View style={{marginRight: 12}}>
                <TopProductCard
                  source={require('../assets/images/dummy/bed2.png')}
                  description="Set de colcha matrimonial/queen…"
                  price="3,679.00"
                  onPress={() => {}}
                />
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </SectionHome>

        <SectionHome title="exclusivas de la tienda" seeAllBottom>
          <View
            style={{
              marginTop: 24,
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}>
            {dummyList.map((item: any) => (
              <View
                key={item?.id}
                style={{marginBottom: 16, marginLeft: marginCategory}}>
                <CategoryCard
                  source={require('../assets/images/dummy/bathroom.png')}
                  label="Ropa de Cama"
                  size={sizeCategoty}
                />
              </View>
            ))}
          </View>
        </SectionHome>

        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dummyList}
            renderItem={() => (
              <View style={{marginRight: 12}}>
                <OfferCard
                  height={100}
                  source={require('../assets/images/dummy/banner3.png')}
                />
              </View>
            )}
            keyExtractor={item => item.id}
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
              <View style={{marginRight: 12}}>
                <TopProductCard
                  source={require('../assets/images/dummy/bed2.png')}
                  description="Escurridor para trastes de acero…"
                  price="3,679.00"
                  onPress={() => {}}
                />
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </SectionHome>

        <View style={{marginTop: 24}}>
          <OfferCard
            height={150}
            source={require('../assets/images/dummy/banner4.png')}
          />
        </View>

        <SectionHome title="ofertas" seeAllRight>
          <CardSlide />
        </SectionHome>

        <SectionHome title="más comprados" seeAllRight>
          {dummyList.map(item => (
            <View key={item.id}>
              <ProductCard />
            </View>
          ))}
        </SectionHome>

        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dummyList}
            renderItem={() => (
              <View style={{marginRight: 12}}>
                <OfferCard
                  height={120}
                  source={require('../assets/images/dummy/banner5.png')}
                />
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>

        <SectionHome title="categorías" seeAllBottom>
          <View
            style={{
              marginTop: 24,
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}>
            {dummyList.map((item: any) => (
              <View
                key={item?.id}
                style={{marginBottom: 16, marginRight: marginCategory}}>
                <CategoryCard
                  source={require('../assets/images/dummy/home.png')}
                  label="Cocinas"
                  size={sizeCategoty}
                />
              </View>
            ))}
          </View>
        </SectionHome>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default Home;
