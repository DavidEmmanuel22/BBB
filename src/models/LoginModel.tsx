import axios from 'axios';
import { URL_Obtain_Data_User_CUSTOMER, URL_LOGIN_CUSTOMER } from '../constants/URLs';
import {Convert, Usuario} from './Objects/Usuario';

export const LoginModel = () => {
  

  const ObtenerDatosUsuario = async (
    token: string,
  ): Promise<Usuario> => {
    let user: any;

    await axios({
      method: 'GET',
      headers: {Authorization: `Bearer ${token}`},
      url: URL_Obtain_Data_User_CUSTOMER,
    })
      .then(res => {
        user = Convert.toUsuario(JSON.stringify(res.data));
      })
      .catch(error => {
        user = 'Error ' + error;
      });

    return user;
  };

  return {
    ObtenerDatosUsuario,
  };
};
