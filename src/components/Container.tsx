import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {BLUE, WHITE} from '../constants/colors';

export enum StatusBarStyle {
  LIGHT = 'light',
  DARK = 'dark',
}

interface IProps {
  scroll?: Boolean;
  containerStyles?: object;
  contentWrapperStyles?: object;
  statusBarStyle?: StatusBarStyle;
  children: JSX.Element | JSX.Element[];
}

const Container: React.FC<IProps> = ({
  scroll = false,
  children,
  statusBarStyle = StatusBarStyle.DARK,
  containerStyles = {},
  contentWrapperStyles = {},
}) => {
  const isDarkMode =
    useColorScheme() === 'dark' || statusBarStyle === StatusBarStyle.DARK;

  const content = (
    <SafeAreaView style={[{flex: 1}, contentWrapperStyles]}>
      <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />
      {children}
    </SafeAreaView>
  );

  return scroll ? (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.container, containerStyles]}
      contentInsetAdjustmentBehavior="automatic">
      {content}
    </ScrollView>
  ) : (
    <View style={[styles.container, containerStyles]}>{content}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 32,
    paddingLeft: 32,
  },
});

export default Container;
