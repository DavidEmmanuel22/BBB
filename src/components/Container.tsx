import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { WHITE } from '../constants/colors';


interface IProps {
  scroll?: Boolean,
  children:
    JSX.Element
    | JSX.Element[]
};

const Container: React.FC<IProps> = ({ scroll = false, children }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : 'rgb(255, 255, 255)',
  };

  return (
    <SafeAreaView style={{ flex: 1, ...backgroundStyle}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      { scroll
        ? <ScrollView
            contentContainerStyle={styles.container}
            contentInsetAdjustmentBehavior="automatic"
          >
            { children }
          </ScrollView>
        : <View style={styles.container}>{ children }</View>
      }
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingRight: 36,
    paddingLeft: 36
  }
});

export default Container;