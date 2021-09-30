
import { NavigationProp } from '@react-navigation/core';
import { useState } from 'react'
import { showMessage } from 'react-native-flash-message';

import { Customer } from '../models/Objects/Customer';
import { RegisterModel } from '../models/RegisterModel';

export const RegisterPolicyController = () => {

    const { UserRegister } = RegisterModel();

    const [politicasSwitch, setPoliticasSwitch] = useState(false);
    const [promocionesSwitch, setPromocionesSwitch] = useState(true);

    const Continue = async (customer: Customer, navigation: NavigationProp<any, any>) => {
        let response = await UserRegister(customer);

        if (response.includes("Error")) {
            if (response.includes("email address")) {
                showMessage({
                    message: "El email ingresado ya esta en uso.",
                    type: "warning",
                    hideOnPress:true,
                    duration:3000
                });
            } else if (response.includes("contraseña")) {
                showMessage({
                    message: "Agrega una mayuscula, un numero o un caracter especial a tu contraseña.",
                    type: "warning",
                    hideOnPress:true,
                    duration:3000
                });
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
        Continue
    }
}
