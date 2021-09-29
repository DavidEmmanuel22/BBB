import { NavigationProp } from '@react-navigation/core';
import React, { useState } from 'react'
import { ProfileModel } from '../models/ProfileModel';
import { Usuario } from '../models/Objects/Usuario';
import { TokenModel } from '../models/TokenModel';

export const ProfileController = () => {

    const { ModificarUsuario } = ProfileModel();
    const { ObtenerAdminToken } = TokenModel();

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");

    const [nombreError, setNombreError] = useState("");
    const [apellidosError, setApellidosError] = useState("");
    const [emailError, setEmailError] = useState("");

    const Guardar = async (user: Usuario, navigation: NavigationProp<any, any>) => {

        let validations: boolean = true;

        if (nombre === "") {
            setNombreError('Este campo es requerido.');
            validations = false;
        }

        if (apellido === "") {
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

        if (validations) {

            let token : string = await ObtenerAdminToken();

            user.firstname = nombre;
            user.lastname = apellido;
            user.email = email;

            let response = await ModificarUsuario(user, token);
            console.log(response);
        }
    }

    return {
        nombre,
        setNombre,
        apellido,
        setApellido,
        email,
        setEmail,
        nombreError,
        apellidosError,
        emailError,
        Guardar
    }
}
