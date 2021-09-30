import React, {useRef, useEffect, useState} from 'react';
import {Modal, View, Animated, Dimensions, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {BLUE} from '../constants/colors';
import {initialize, selectUIInitialized} from '../store/slices/uiSlice';

const images = [
  require('../assets/images/splash/Pattern1.png'),
  require('../assets/images/splash/Pattern2.png'),
  require('../assets/images/splash/Pattern3.png'),
  require('../assets/images/splash/Pattern4.png'),
  require('../assets/images/splash/Pattern5.png'),
  require('../assets/images/splash/Pattern6.png'),
];

const opacityStartAnim = (
  startVal: Animated.Value,
  endValNumber: number,
  duration: number,
  delay: number,
) => {
  Animated.timing(startVal, {
    toValue: endValNumber,
    duration,
    delay,
    useNativeDriver: true,
  }).start(() => {
    startVal.setValue(1);
    Animated.timing(startVal, {
      toValue: 0,
      duration: duration + 300,
      useNativeDriver: true,
    }).start();
  });
};

const Splash: React.FC = () => {
  const dispatch = useDispatch();
  const isInitialized = useSelector(selectUIInitialized);
  const [hasAnimationPlayedOnce, setHasAnimationPlayedOnce] = useState(false);
  const animStartAnims = [
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
  ];
  const logoStartAnim = useRef(new Animated.Value(0)).current;
  const endAnimNumber = 1;
  const duration = 1500;

  useEffect(() => {
    if (isInitialized) {
      setHasAnimationPlayedOnce(true);
    }

    animStartAnims.forEach((startAnim, index) => {
      opacityStartAnim(startAnim, endAnimNumber, duration, index * duration);
    });
    Animated.timing(logoStartAnim, {
      toValue: endAnimNumber,
      duration: 3000,
      delay: duration * animStartAnims.length,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        setHasAnimationPlayedOnce(true);
        dispatch(initialize());
      }, 3000);
    });
  }, []);

  return (
    <Modal visible={!hasAnimationPlayedOnce} animationType="fade">
      <View style={styles.container}>
        {animStartAnims.map((startAnim, index) => (
          <Animated.Image
            key={`image${index}`}
            source={images[index]}
            resizeMode="cover"
            style={[styles.image, {opacity: startAnim}]}
          />
        ))}
        <Animated.Image
          source={require('../assets/images/splash/BBB.png')}
          style={[styles.logo, {opacity: logoStartAnim}]}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    backgroundColor: BLUE,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  logo: {
    height: 64,
    width: 200,
  },
});

export default Splash;
