/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import Container, {StatusBarStyle} from '../components/Container';
import Banner from '../components/core/home/Banner';
import CardCategory from '../components/core/home/CardCategory';
import CardTopProduct from '../components/core/home/CardTopProduct';
import SquareImage from '../components/core/home/SquareImage';

const dummyList: any[] = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
];

const calcTileDimensions = (deviceWidth: number, tpr: number) => {
  const margin = deviceWidth / (tpr * 10);
  const size = (deviceWidth - margin * (tpr * 2)) / tpr;
  return {size, margin};
};

const {width} = Dimensions.get('window');

const Home: React.FC = () => {
  const mosaicDimensions = calcTileDimensions(width - 64, 3);
  const categoriesDimensions = calcTileDimensions(width - 64, 2);

  return (
    <Container statusBarStyle={StatusBarStyle.DARK}>
      <ScrollView style={{flex: 1, marginTop: 24}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dummyList}
          renderItem={() => (
            <View style={{marginRight: 12}}>
              <Banner
                containerStyle={{height: 168}}
                uri="https://static.promodescuentos.com/threads/thread_full_screen/default/605758_1.jpg"
              />
            </View>
          )}
          keyExtractor={item => item.id}
        />
        <View
          style={{
            marginTop: 24,
            paddingTop: 24,
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            flexDirection: 'row',
            backgroundColor: '#fff7ec',
          }}>
          {dummyList.map(item => (
            <View key={item?.id} style={{marginBottom: 16}}>
              <SquareImage
                background="#f60"
                uri="https://cdn1.coppel.com/images/catalog/pm/3631213-1.jpg"
                styleText={{color: 'black', fontSize: 17}}
                {...mosaicDimensions}
              />
            </View>
          ))}
        </View>
        <View style={{marginTop: 24}}>
          <Banner
            containerStyle={{height: 168}}
            uri="https://static.promodescuentos.com/threads/thread_full_screen/default/605758_1.jpg"
          />
        </View>
        <View style={{marginTop: 24}}>
          <Text style={{color: '#002855', fontSize: 18, fontWeight: 'bold'}}>
            Para tu Recamara
          </Text>
          <View
            style={{
              marginTop: 24,
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}>
            {dummyList.map((item: any) => (
              <View key={item?.id} style={{marginBottom: 16}}>
                <CardCategory
                  uri="https://cdn1.coppel.com/images/catalog/pm/3631213-1.jpg"
                  label="Ropa de Cama"
                  {...categoriesDimensions}
                />
              </View>
            ))}
          </View>
        </View>
        <View style={{marginTop: 24}}>
          <Text
            style={{
              color: '#002855',
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 24,
            }}>
            Top Recamaras
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dummyList}
            renderItem={() => (
              <View style={{marginRight: 12}}>
                <CardTopProduct
                  url="https://i.pinimg.com/550x/1e/c6/0a/1ec60af568738098aaa52570ac3e6d58.jpg"
                  description="Set de colcha matrimonial/queen…"
                  price="3,679.00"
                  onPress={() => {}}
                />
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>

        <View style={{marginTop: 24}}>
          <Text style={{color: '#002855', fontSize: 18, fontWeight: 'bold'}}>
            Exclisivas de la tienda
          </Text>
          <View
            style={{
              marginTop: 24,
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}>
            {dummyList.map((item: any) => (
              <View key={item?.id} style={{marginBottom: 16}}>
                <CardCategory
                  uri="https://i.pinimg.com/550x/1e/c6/0a/1ec60af568738098aaa52570ac3e6d58.jpg"
                  label="Ropa de Cama"
                  {...categoriesDimensions}
                />
              </View>
            ))}
          </View>
        </View>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dummyList}
            renderItem={() => (
              <View style={{marginRight: 12}}>
                <Banner
                  containerStyle={{height: 168}}
                  uri="https://static.promodescuentos.com/threads/thread_full_screen/default/605758_1.jpg"
                />
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={{marginTop: 24}}>
          <Text
            style={{
              color: '#002855',
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 24,
            }}>
            Te recomendamos
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dummyList}
            renderItem={() => (
              <View style={{marginRight: 12}}>
                <CardTopProduct
                  url="https://http2.mlstatic.com/D_NQ_NP_2X_692765-MLM43500269825_092020-F.webp"
                  description="Escurridor para trastes de acero…"
                  price="3,679.00"
                  onPress={() => {}}
                />
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dummyList}
            renderItem={() => (
              <View style={{marginRight: 12}}>
                <Banner
                  containerStyle={{height: 168}}
                  uri="https://static.promodescuentos.com/threads/thread_full_screen/default/605758_1.jpg"
                />
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={{marginTop: 24}}>
          <Text style={{color: '#002855', fontSize: 18, fontWeight: 'bold'}}>
            Categorías
          </Text>
          <View
            style={{
              marginTop: 24,
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}>
            {dummyList.map((item: any) => (
              <View key={item?.id} style={{marginBottom: 16}}>
                <CardCategory
                  uri="https://cdn.shopify.com/s/files/1/2217/4155/products/cocina-kioto-2M-mdc10146_1400x.png?v=1598826403"
                  label="Cocinas"
                  {...categoriesDimensions}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default Home;
