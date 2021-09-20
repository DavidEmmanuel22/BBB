import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import Button, {BUTTONTYPE} from '../components/Button';
import {GRAY2, LIGHTER_GRAY, DARK, PRIMARY_BLUE} from '../constants/colors';
import Icon from '../components/Icon';

const SocialButtons: React.FC = () => {
  return (
    <View style={styles.socialButtonsContainer}>
      <View style={styles.sepTextContainer}>
        <View style={styles.horzLine} />
        <Text style={styles.sepText}>O bien</Text>
        <View style={styles.horzLine} />
      </View>

      <Button
        title="Continuar con Facebook"
        onPress={() => {}}
        type={BUTTONTYPE.SECONDARY}
        containerStyle={styles.socialButton}
        textStyle={styles.socialButtonText}
        icon={() => (
          <Icon name="facebook-icon" color={PRIMARY_BLUE} size={16} />
        )}
      />
      <Button
        title="Continuar con Apple ID"
        onPress={() => {}}
        type={BUTTONTYPE.SECONDARY}
        containerStyle={styles.socialButton}
        textStyle={styles.socialButtonText}
        icon={() => <Icon name="apple-icon" size={16} />}
        iconStyle={{marginLeft: -6}}
      />
      <Button
        title="Continuar con Google"
        onPress={() => {}}
        type={BUTTONTYPE.SECONDARY}
        containerStyle={styles.socialButton}
        textStyle={styles.socialButtonText}
        icon={() => (
          <Image
            style={styles.googleLogo}
            source={require('../assets/images/google.png')}
          />
        )}
        iconStyle={{marginLeft: -10, marginRight: 15}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  socialButtonsContainer: {},
  sepTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 14,
  },
  sepText: {
    color: GRAY2,
    flex: 1,
    textAlign: 'center',
  },
  horzLine: {
    borderTopWidth: 1,
    borderColor: LIGHTER_GRAY,
    borderStyle: 'solid',
    flex: 1,
  },
  socialButton: {
    height: 36,
  },
  socialButtonText: {
    color: DARK,
    fontFamily: 'Effra-Regular',
    fontWeight: '400',
  },
  googleLogo: {
    height: 16,
    width: 16,
  },
});

export default SocialButtons;
