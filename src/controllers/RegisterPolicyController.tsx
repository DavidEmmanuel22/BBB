
import { NavigationProp } from '@react-navigation/core';
import { useState } from 'react'

import { Customer } from '../models/Objects/Customer';
import { RegisterModel } from '../models/RegisterModel';

export const RegisterPolicyController = () => {

    const { RegistarUsuario } = RegisterModel();

    const [politicasSwitch, setPoliticasSwitch] = useState(false);
    const [promocionesSwitch, setPromocionesSwitch] = useState(true);

    const Continuar = async (customer: Customer, navigation: NavigationProp<any, any>) => {
        let response = await RegistarUsuario(customer);

        if (response.includes("Error")) {
            if (response.includes("email address")) {
                //AsyncStorage.setItem('Email error',"El email ingresado ya esta en uso.");
            } else if (response.includes("contraseña")) {
                //AsyncStorage.setItem('Password error',"Agrega una mayuscula, un numero o un caracter especial.");
            }
            navigation.goBack();
        } else {
            navigation.navigate('Index');
        }
    }

    return {
        politicasSwitch,
        setPoliticasSwitch,
        promocionesSwitch,
        setPromocionesSwitch,
        Continuar
    }
}
