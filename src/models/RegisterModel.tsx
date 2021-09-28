import {Customer} from './Objects/Customer';
import {URL_REGISTRAR} from '../constants/URLs';
import axios from 'axios';

export const RegisterModel = () => {
  const RegistarUsuario = async (user: Customer): Promise<string> => {
    let response: string = '';

    console.log(JSON.stringify(user));

    await axios({
      method: 'POST',
      headers: {'content-type': 'application/json'},
      data: JSON.stringify(user),
      url: URL_REGISTRAR,
    })
      .then(res => {
        response = JSON.stringify(res.data);
      })
      .catch(error => {
        response = 'Error ' + error;
      });

    return response;
  };

  return {
    RegistarUsuario,
  };
};
