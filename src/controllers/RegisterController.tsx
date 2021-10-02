import { NavigationProp } from '@react-navigation/core';
import { useState } from 'react';
import { Convert, Customer } from '../models/Objects/Customer';

export const RegisterController = () => {
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setnameError] = useState('');
  const [lastnameError, setlastnameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [showPassword, setShowPassword] = useState(true);

  const change_Name = (newName: string) => {
    setName(newName);
    setnameError('');
  };
  const change_Lastname = (newLastname: string) => {
    setLastName(newLastname);
    setlastnameError('');
  };
  const change_Email = (newEmail: string) => {
    setEmail(newEmail);
    setEmailError('');
  };
  const change_Password = (newPassword: string) => {
    setPassword(newPassword);

    //Menor a 8 caracteres
    if (newPassword.length < 8) {
      setPasswordError('Se requiere al menos 8 caracteres.');
    } else {
      setPasswordError('');
    }
  };
  const change_ShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const Continue = (navigation: NavigationProp<any, any>) => {
    let validations: boolean = true;

    if (name === '') {
      setnameError('Este campo es requerido.');
      validations = false;
    }

    if (lastname === '') {
      setlastnameError('Este campo es requerido.');
      validations = false;
    }

    if (email === '') {
      setEmailError('Este campo es requerido.');
      validations = false;
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailError('El correo electrónico es incorrecto.');
        validations = false;
      }
    }

    if (email === '') {
      setEmailError('Este campo es requerido.');
      validations = false;
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailError('El correo electrónico es incorrecto.');
        validations = false;
      }
    }

    if (password === '') {
      setPasswordError('Este campo es requerido.');
      validations = false;
    }

    if (validations) {
      let customer: Customer = Convert.toCustomer(
        `{
                "customer": {
                    "lastname": "${lastname}",
                    "firstname": "${name}",
                    "email": "${email}",
                    "addresses": []
                },
                "password": "${password}"
            }`
      );
      navigation.navigate('RegisterPolicy', { customer });
    }
  };

  return {
    name,
    lastname,
    email,
    password,
    nameError,
    lastnameError,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    showPassword,
    change_Name,
    change_Lastname,
    change_Email,
    change_Password,
    change_ShowPassword,
    Continue,
  };
};
