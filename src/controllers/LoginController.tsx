import { NavigationProp } from '@react-navigation/core';
import { useState } from 'react';
import { showMessage } from 'react-native-flash-message';
import useAuthContext from '../context/AuthContext';

export const LoginController = () => {
  //Obtaining the methods used in Model

  const { signIn, accessToken, user }: any = useAuthContext();

  //Variables de control
  const [email, setemail] = useState('ricardo@dgk.com.mx');
  const [password, setpassword] = useState('MiRich.2015');
  const [showPassword, setShowPassword] = useState(true);
  const [LogInCLicked, setLogInCLicked] = useState(false);

  //Metodos
  const change_Email = (emailNuevo: string) => {
    setemail(emailNuevo);
  };
  const change_Password = (passwordNuevo: string) => {
    setpassword(passwordNuevo);
  };
  const change_ShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const LogIn = async (navigation: NavigationProp<any, any>) => {
    setLogInCLicked(true);

    if (email === '') {
      setLogInCLicked(false);
      showMessage({
        message: 'Ingrese su email.',
        type: 'info',
        hideOnPress: true,
        duration: 3000,
      });
    } else if (password === '') {
      setLogInCLicked(false);
      showMessage({
        message: 'Ingrese su contraseña.',
        type: 'info',
        hideOnPress: true,
        duration: 3000,
      });
    } else {
      await signIn({ email, password });
      if (accessToken.includes('Error')) {
        setLogInCLicked(false);
        showMessage({
          message: 'El usuario o contraseña ingresados son incorrectos.',
          type: 'danger',
          hideOnPress: true,
          duration: 3000,
        });
      } else {
        if (user === null) {
          showMessage({
            message: 'A ocurrido error. Intente de nuevo.',
            type: 'info',
            hideOnPress: true,
            duration: 3000,
          });
          setLogInCLicked(false);
        } else {
          change_Email('');
          change_Password('');
          change_ShowPassword();
          setLogInCLicked(false);
          navigation.navigate('MyAccount', { accessToken });
        }
      }
    }
  };

  //Retorno de metodos y variables
  return {
    email,
    change_Email,
    password,
    change_Password,
    showPassword,
    change_ShowPassword,
    LogInCLicked,
    LogIn,
  };
};
