import { Customer } from './Objects/Customer';
import { URL_REGISTRAR } from '../constants/URLs';
import axios from 'axios';

export const RegisterModel = () => {

  const UserRegister = async (user: Customer): Promise<string> => {
    let response: string = '';

    await axios({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      data: JSON.stringify(user),
      url: URL_REGISTRAR,
    })
      .then(res => {
        response = JSON.stringify(res.data);
      })
      .catch(error => {
        if (error.response) {
          response = 'Error '+ error.response.data.message;
        }
      });

    return response;
  };

  return {
    UserRegister
  };
};
