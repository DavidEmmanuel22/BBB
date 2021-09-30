import { NavigationProp } from '@react-navigation/core';
import { useState } from 'react';
import { showMessage } from 'react-native-flash-message';
import { LoginModel } from '../models/LoginModel'
import { User } from '../models/Objects/User';
import { TokenModel } from '../models/TokenModel';

export const LoginController = () => {

    //Obtaining the methods used in Model
    const { GetCustomerToken } = TokenModel();

    const {
        GetUserData
    } = LoginModel();

    //Variables de control
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    const [LogInCLicked, setLogInCLicked] = useState(false);

    //Metodos
    const change_Email = (emailNuevo: string) => {
        setemail(emailNuevo);
    }
    const change_Password = (passwordNuevo: string) => {
        setpassword(passwordNuevo);
    }
    const change_ShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const LogIn = async (navigation: NavigationProp<any, any>) => {
        setLogInCLicked(true);

        if (email === "") {
            setLogInCLicked(false);
            showMessage({
                message: "Ingrese su email.",
                type: "info",
                hideOnPress: true,
                duration: 3000
            });
        } else if (password === "") {
            setLogInCLicked(false);
            showMessage({
                message: "Ingrese su contraseña.",
                type: "info",
                hideOnPress: true,
                duration: 3000
            });
        } else {
            const token: string = await GetCustomerToken(email, password);
            if (token.includes("Error")) {
                setLogInCLicked(false);
                showMessage({
                    message: "El usuario o contraseña ingresados son incorrectos.",
                    type: "danger",
                    hideOnPress: true,
                    duration: 3000
                });
            } else {
                const datos: User = await GetUserData(token);
                if (datos.firstname === "" || datos.lastname === "") {
                    showMessage({
                        message: "A ocurrido error. Intente de nuevo.",
                        type: "info",
                        hideOnPress: true,
                        duration: 3000
                    });
                    setLogInCLicked(false);
                } else {
                    change_Email("");
                    change_Password("");
                    change_ShowPassword();
                    setLogInCLicked(false);
                    navigation.navigate('MyAccount', { datos, token });
                }
            }

        }
    }

    //Retorno de metodos y variables
    return {
        email,
        change_Email,
        password,
        change_Password,
        showPassword,
        change_ShowPassword,
        LogInCLicked,
        LogIn
    }
}
