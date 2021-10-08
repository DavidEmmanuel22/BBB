/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavigationProp } from '@react-navigation/core';
import { useState } from 'react';
import { ProfileModel } from '../models/ProfileModel';
import { User } from '../models/Objects/User';
import { TokenModel } from '../models/TokenModel';
import { showMessage } from 'react-native-flash-message';
import useAuthContext from '../context/AuthContext';

export const ProfileController = () => {
  const { changeDataUser }: any = useAuthContext();

  const { ModifyUser } = ProfileModel();
  const { GetAdminToken } = TokenModel();

  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [nameError, setnameError] = useState('');
  const [lastnameError, setlastnameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const [saveClicked, setsaveClicked] = useState(false);

  const ChangePassword = (user: User, navigation: NavigationProp<any, any>) => {
    navigation.navigate('NewPassword');
  };

  const Save = async (user: User) => {
    setsaveClicked(true);

    let validations: boolean = true;

    if (name === '') {
      setnameError('Este campo es requerido.');
      validations = false;
      setsaveClicked(false);
    }

    if (lastname === '') {
      setlastnameError('Este campo es requerido.');
      validations = false;
      setsaveClicked(false);
    }

    if (email === '') {
      setEmailError('Este campo es requerido.');
      validations = false;
      setsaveClicked(false);
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailError('El correo electrónico es incorrecto.');
        validations = false;
        setsaveClicked(false);
      }
    }

    if (email === '') {
      setEmailError('Este campo es requerido.');
      validations = false;
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        validations = false;
        setEmailError('El correo electrónico es incorrecto.');
      }
    }

    let token: string = await GetAdminToken();

    user.firstname = name;
    user.lastname = lastname;
    user.email = email;

    let response: string = await ModifyUser(user, token);

    if (response.includes('email address')) {
      showMessage({
        message: 'El email ingresado ya esta en uso.',
        type: 'warning',
        hideOnPress: true,
        duration: 3000,
      });
      setsaveClicked(false);
    } else {
      changeDataUser(user);
      showMessage({
        message: 'Tus datos se han modificado.',
        type: 'success',
        hideOnPress: true,
        duration: 3000,
      });

      setsaveClicked(false);
    }
  };

  return {
    name,
    setName,
    lastname,
    setLastName,
    email,
    setEmail,
    nameError,
    lastnameError,
    emailError,
    saveClicked,
    ChangePassword,
    Save,
  };
};
