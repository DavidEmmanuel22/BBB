import React, {useState} from 'react';
import {View, Text, TextInput, TextInputProps, StyleSheet} from 'react-native';

import {LIGHTER_GRAY, GRAY} from '../constants/colors';

interface IProps extends TextInputProps {
  label?: string;
  startIcon?(): JSX.Element;
  endIcon?(): JSX.Element;
}

const Input: React.FC<IProps> = props => {
  const [value, setValue] = useState<string>('');
  const [focus, setFocus] = useState<boolean>(false);

  const onChange = (text: string) => {
    setValue(text);
    if (typeof props.onChangeText === 'function') {
      props.onChangeText(text);
    }
  };

  const onFocus = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };

  return (
    <View style={styles.inputWrapper}>
      {props.label ? (
        <Text
          style={{
            ...styles.label,
            paddingLeft: props.startIcon ? 24 : 8,
          }}>
          {props.label}
        </Text>
      ) : null}
      {props.startIcon && (
        <View style={{...styles.icon, ...styles.iconStart}}>
          <Text>{props.startIcon()}</Text>
        </View>
      )}

      <TextInput
        style={{
          ...styles.input,
          paddingLeft: props.startIcon ? 22 : 6,
        }}
        value={value}
        onChangeText={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
      />

      {props.endIcon && (
        <View style={{...styles.icon, ...styles.iconEnd}}>
          <Text>{props.endIcon()}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    marginTop: 14,
    marginBottom: 10,
    position: 'relative',
  },
  input: {
    borderColor: LIGHTER_GRAY,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  label: {
    color: GRAY,
    position: 'absolute',
    left: 6,
    top: 0,
  },
  icon: {
    position: 'absolute',
    top: 0,
  },
  iconStart: {
    left: 0,
  },
  iconEnd: {
    right: 0,
  },
});

export default Input;
