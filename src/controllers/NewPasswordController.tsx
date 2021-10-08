import { useState } from 'react';
import { NewPasswordModel } from '../models/NewPasswordModel';
import { TokenModel } from '../models/TokenModel';
import { User } from '../models/Objects/User';
import { showMessage } from 'react-native-flash-message';
import { NavigationProp } from '@react-navigation/core';

export const NewPasswordController = () => {
  const { GetAdminToken } = TokenModel();
  const { ChangePassword } = NewPasswordModel();

  const [actualPassword, setactualPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [verificationPassword, setVerificationPassword] = useState('');

  const [errorActualPassword, seterroractualPassword] = useState('');
  const [errorNewPassword, seterrorNewPassword] = useState('');
  const [errorVerificationPassword, seterrorVerificationPassword] = useState('');

  const [showactualPassword, setshowactualPassword] = useState(true);
  const [shownewPassword, setshowNewPassword] = useState(true);
  const [showverificationPassword, setshowVerificationPassword] = useState(true);

  const [btnContinueClicked, setBtnContinueClicked] = useState(false);

  const change_ActualPassword = (nuevoPassword: string) => {
    setactualPassword(nuevoPassword);

    //Menor a 8 caracteres
    if (nuevoPassword.length < 8) {
      seterroractualPassword('Se requiere al menos 8 caracteres.');
    } else {
      seterroractualPassword('');
    }
  };

  const change_NewPassword = (nuevoPassword: string) => {
    setNewPassword(nuevoPassword);

    //Menor a 8 caracteres
    if (nuevoPassword.length < 8) {
      seterrorNewPassword('Se requiere al menos 8 caracteres.');
    } else {
      seterrorNewPassword('');
    }
  };

  const change_VerificationPassword = (nuevoPassword: string) => {
    setVerificationPassword(nuevoPassword);

    //Menor a 8 caracteres
    if (nuevoPassword.length < 8) {
      seterrorVerificationPassword('Se requiere al menos 8 caracteres.');
    } else {
      seterrorVerificationPassword('');
    }
  };

  const Confirm = async (user: User | null, navigation: NavigationProp<any, any>) => {
    setBtnContinueClicked(true);

    let validations: boolean = true;

    if (actualPassword === '') {
      seterroractualPassword('Este campo es requerido.');
      validations = false;
      setBtnContinueClicked(false);
    }
    if (newPassword === '') {
      seterrorNewPassword('Este campo es requerido.');
      validations = false;
      setBtnContinueClicked(false);
    }
    if (verificationPassword === '') {
      seterrorVerificationPassword('Este campo es requerido.');
      validations = false;
      setBtnContinueClicked(false);
    }

    if (newPassword != verificationPassword) {
      seterrorVerificationPassword('Las contraseñas no coinciden.');
      validations = false;
      setBtnContinueClicked(false);
    }

    if (validations) {
      let token: string = await GetAdminToken();

      let response = await ChangePassword(user, token, actualPassword, newPassword);

      if (response.includes("The password doesn't match this account")) {
        setBtnContinueClicked(false);
        showMessage({
          message: 'La contraseña actual es incorrecta.',
          type: 'warning',
          hideOnPress: true,
          duration: 3000,
        });
      } else if (response.includes('La contraseña debe contener un mínimo')) {
        setBtnContinueClicked(false);
        showMessage({
          message: 'Agrega mayusculas, numeros o caracteres especiales a tu nueva contraseña.',
          type: 'warning',
          hideOnPress: true,
          duration: 3000,
        });
      } else {
        setBtnContinueClicked(false);
        showMessage({
          message: 'Contraseña actualizada.',
          type: 'success',
          hideOnPress: true,
          duration: 3000,
        });
        navigation.goBack();
      }
    }
  };

  return {
    actualPassword,
    change_ActualPassword,
    newPassword,
    change_NewPassword,
    verificationPassword,
    change_VerificationPassword,

    errorActualPassword,
    errorNewPassword,
    errorVerificationPassword,

    showactualPassword,
    setshowactualPassword,
    shownewPassword,
    setshowNewPassword,
    showverificationPassword,
    setshowVerificationPassword,

    btnContinueClicked,

    Confirm,
  };
};
