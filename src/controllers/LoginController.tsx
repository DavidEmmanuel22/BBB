import { NavigationProp } from '@react-navigation/core';
import { useState } from 'react';
import { showMessage } from 'react-native-flash-message';
import useAuthContext from '../context/AuthContext';
import { LoginModel } from '../models/LoginModel';
import { User } from '../models/Objects/User';
import { TokenModel } from '../models/TokenModel';

export const LoginController = () => {
  //Obtaining the methods used in Model

  const { GetCustomerToken } = TokenModel();
  const { GetUserData } = LoginModel();
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
      //await signIn({ email, password });
      const token = await GetCustomerToken({ username: email, password: password });
      if (token.includes('Error') || !token) {
        setLogInCLicked(false);
        showMessage({
          message: 'El usuario o contraseña ingresados son incorrectos.',
          type: 'danger',
          hideOnPress: true,
          duration: 3000,
        });
      } else {
        const userData: User | null= await GetUserData(token);
        if (!userData) {
          showMessage({
            message: 'A ocurrido error. Intente de nuevo.',
            type: 'info',
            hideOnPress: true,
            duration: 3000,
          });
          setLogInCLicked(false);
        } else {
          await signIn(userData, token);
          change_Email('');
          change_Password('');
          change_ShowPassword();
          setLogInCLicked(false);
          //navigation.navigate('MyAccount');
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
