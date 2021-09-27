import { NavigationProp } from '@react-navigation/core';
import { useState } from 'react';
import { LoginModel } from '../models/LoginModel'
import { Usuario } from '../models/Objects/Usuario';

export const LoginController = () => {

    //Obteniendo los metodos ultilizados en Model
    const {
        ObtenerToken,
        ObtenerDatosUsuario
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
    const iniciarSesion = async (navigation: NavigationProp<any, any>) => {
        setLogInCLicked(true);
        const token: string = await ObtenerToken(email, password);
        if (token.includes("Error")) {
            //Error
            console.log("ERROR");
            setLogInCLicked(false);
        } else {
            const datos : Usuario = await ObtenerDatosUsuario(2, token);
            change_Email("");
            change_Password("");
            change_ShowPassword();
            setLogInCLicked(false);
            navigation.navigate('MyAccount', {datos});
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
        iniciarSesion
    }
}
