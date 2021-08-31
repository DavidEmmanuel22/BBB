import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';

import Text from '../components/Text';
import { BLUE, WHITE } from '../constants/colors';
import { TERMINABOLD } from '../constants/fonts';


const Welcome: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/welcome_bg.png')}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View>
          <Text color={WHITE} size={26}>hola</Text>
          <Text color={WHITE} size={28} style={styles.username}>ruby green,</Text>
          <View style={{ alignItems: 'flex-end' }}>
            <Text color={WHITE} size={22}>te damos</Text>
            <Text color={WHITE} size={22}>la bienvenida</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: BLUE,
    flex: 1,
  },
  backgroundImage: {
    alignItems: 'center',
    height: Dimensions.get('screen').height,
    justifyContent: 'center',
    width: Dimensions.get('screen').width
  },
  username: {
    fontFamily: TERMINABOLD
  }
});

export default Welcome;