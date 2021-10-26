import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import { LIGHTER_GRAY } from '../../constants/colors';
import { Controller, useForm } from 'react-hook-form';
import useAuthContext from '../../context/AuthContext';

type FormCommentsProps = {
  onPress: (data?: any) => void;
};
const reEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const rePhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

const defaultAddress = (address: any[]) => address.find((item) => item?.default_shipping);

const ContactForm = ({ onPress }: FormCommentsProps) => {
  const { user }: any = useAuthContext();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue('email', user?.email);
    setValue('name', user?.firstname);
    setValue('phone', defaultAddress(user?.addresses || [])?.telephone || '');
  }, [user, setValue]);

  const onSubmit = (data: any) => onPress(data);

  return (
    <View>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value, onBlur } }) => (
          <>
            <TextInput
              style={[styles.textInput, errors?.name && styles.textInputError]}
              keyboardType="default"
              placeholder="Nombre"
              value={value}
              onBlur={onBlur}
              onChangeText={(text) => onChange(text)}
            />
          </>
        )}
        rules={{
          required: true,
        }}
      />
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value, onBlur } }) => (
          <>
            <TextInput
              style={[styles.textInput, errors?.email && styles.textInputError]}
              keyboardType="email-address"
              placeholder="Correo"
              value={value}
              onBlur={onBlur}
              onChangeText={(text) => onChange(text)}
            />
          </>
        )}
        rules={{
          required: true,
          pattern: reEmail,
        }}
      />
      <Controller
        control={control}
        name="phone"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              style={[styles.textInput, errors?.phone && styles.textInputError]}
              keyboardType="phone-pad"
              placeholder="Telefono"
              value={value}
              onBlur={onBlur}
              onChangeText={(text) => onChange(text)}
            />
          </>
        )}
        rules={{
          required: true,
          pattern: rePhone,
        }}
      />
      <Controller
        control={control}
        name="comment"
        render={({ field: { onChange, value, onBlur } }) => (
          <>
            <TextInput
              placeholder="Escribe tu duda, consulta,nota, etc…"
              onChangeText={(text) => onChange(text)}
              style={[styles.textArea, errors?.comment && styles.textInputError]}
              onBlur={onBlur}
              value={value}
              multiline={true}
              numberOfLines={5}
            />
          </>
        )}
        rules={{
          required: true,
        }}
      />
      <Button containerStyle={styles.button} title="Enviar" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default ContactForm;
const styles = StyleSheet.create({
  button: {
    marginTop: 24,
    width: '100%',
    height: 60,
  },
  textArea: {
    height: 150,
    padding: 16,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: LIGHTER_GRAY,
  },
  textInput: {
    marginBottom: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: LIGHTER_GRAY,
  },
  textInputError: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red',
  },
});
