
import { NavigationProp } from "@react-navigation/core";
import { useState } from "react";
import { Convert, Customer } from '../models/Objects/Customer';

export const RegisterController = () => {

    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [nombreError, setNombreError] = useState("");
    const [apellidosError, setApellidosError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [showPassword, setShowPassword] = useState(true);

    const change_Nombre = (nuevoNombre: string) => {
        setNombre(nuevoNombre);
        setNombreError('');
    }
    const change_Apellidos = (nuevoApellido: string) => {
        setApellidos(nuevoApellido);
        setApellidosError('');
    }
    const change_Email = (nuevoEmail: string) => {
        setEmail(nuevoEmail);
        setEmailError('');
    }
    const change_Password = (nuevoPassword: string) => {
        setPassword(nuevoPassword);

        //Menor a 8 caracteres
        if (nuevoPassword.length < 8) {
            setPasswordError('Se requiere al menos 8 caracteres.');
        } else {

            setPasswordError('');
        }
    }
    const change_ShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const Continuar = (navigation: NavigationProp<any, any>) => {

        let validations: boolean = true;

        if (nombre === "") {
            setNombreError('Este campo es requerido.');
            validations = false;
        }

        if (apellidos === "") {
            setApellidosError('Este campo es requerido.');
            validations = false;
        }

        if (email === "") {
            setEmailError('Este campo es requerido.');
            validations = false;
        } else {
            if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
                setEmailError('El correo electrónico es incorrecto.');
                validations = false;
            }
        }

        if (password === "") {
            setPasswordError('Este campo es requerido.');
            validations = false;
        }

        if (validations) {

            let customer: Customer = Convert.toCustomer(
                `{
                "customer": {
                    "lastname": "${apellidos}",
                    "firstname": "${nombre}",
                    "email": "${email}",
                    "addresses": []
                },
                "password": "${password}"
            }`
            );

            navigation.navigate('RegisterPolicy', { customer });
        }
    }


    return {
        nombre,
        apellidos,
        email,
        password,
        nombreError,
        apellidosError,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        showPassword,
        change_Nombre,
        change_Apellidos,
        change_Email,
        change_Password,
        change_ShowPassword,
        Continuar
    }
}
