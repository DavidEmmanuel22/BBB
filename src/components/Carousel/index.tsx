import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import CarouselItem from './CarouselItem';

const {width} = Dimensions.get('window');

type CarouselProps = {
  data: any[];
  autoScroll?: boolean;
};

const Carousel = ({data = []}: CarouselProps) => {
  const [scrollValue, setScrollValue] = useState(0);
  const [scrolled, setScrolled] = useState(0);

  const disabledPrevItem = scrolled <= 0;
  const disabledNextItem = scrolled >= data?.length;

  const scrollRef = useRef<any>(null);

  const nextItem = () => {
    setScrollValue(prevState => prevState + (width - 124));
    setScrolled(prevState => prevState + 1);
  };

  const prevItem = () => {
    setScrollValue(prevState => prevState - (width - 124));
    setScrolled(prevState => prevState - 1);
  };

  useEffect(() => {
    if (scrollRef !== null) {
      scrollRef.current.scrollTo({animated: true, x: scrollValue});
    }
  }, [scrollValue]);

  if (data && data.length) {
    return (
      <View style={styles.containerSlide}>
        <TouchableOpacity disabled={disabledPrevItem} onPress={prevItem}>
          <FontAwesomeIcon style={styles.icon} size={30} icon="chevron-left" />
        </TouchableOpacity>

        <SafeAreaView style={{flex: 1}}>
          <ScrollView
            style={{flex: 1}}
            ref={scrollRef}
            horizontal={true}
            scrollEventThrottle={16}
            pagingEnabled={true}>
            {data?.map((item: any) => (
              <View key={item?.id}>
                <CarouselItem item={item} />
              </View>
            ))}
          </ScrollView>
        </SafeAreaView>

        <TouchableOpacity disabled={disabledNextItem} onPress={nextItem}>
          <FontAwesomeIcon style={styles.icon} size={30} icon="chevron-right" />
        </TouchableOpacity>
      </View>
    );
  }

  console.log('Please provide Images');
  return null;
};

export default Carousel;

const styles = StyleSheet.create({
  icon: {
    color: '#1a4e8a',
  },
  containerSlide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
