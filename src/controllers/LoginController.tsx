import { NavigationProp } from '@react-navigation/core';
import { useState } from 'react';
import { LoginModel } from '../models/LoginModel'
import { Usuario } from '../models/Objects/Usuario';
import { TokenModel } from '../models/TokenModel';

export const LoginController = () => {

    //Obteniendo los metodos ultilizados en Model

    const { ObtenerCustomerToken } = TokenModel();

    const {
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
        const token: string = await ObtenerCustomerToken(email, password);
        if (token.includes("Error")) {
            //Error
            setLogInCLicked(false);
        } else {
            const datos: Usuario = await ObtenerDatosUsuario(token);
            if (datos.firstname === "" || datos.lastname === "") {
                //Error
                console.log("ERROR");
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
