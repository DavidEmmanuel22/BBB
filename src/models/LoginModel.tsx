import axios from 'axios';
import { URL_Obtain_Data_User, URL_LOGIN } from '../constants/URLs';
import { Convert, Usuario } from "./Objects/Usuario";
export const LoginModel = () => {

    const ObtenerToken = async (email: string, password: string) : Promise<string> => {

        let token : string = "";

        const BodyData = {
            username: email,
            password: password
        };

        await axios({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            data: JSON.stringify(BodyData),
            url: URL_LOGIN
        }).then(res => {
            token = res.data;
        }).catch(error => {
            token = "Error " + error;
        });

        return token;

    }

    const ObtenerDatosUsuario = async (customerId: number, token: string) : Promise<Usuario> => {

        let user : any;

        await axios({
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
            url: URL_Obtain_Data_User.replace(":custoerId", `${customerId}`)
        }).then(res => {
            user = Convert.toUsuario(JSON.stringify(res.data));
        }).catch(error => {
            user = "Error " + error;
        });

        return user;
    }

    return {
        ObtenerToken,
        ObtenerDatosUsuario
    }
}
