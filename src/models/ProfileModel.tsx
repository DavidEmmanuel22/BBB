import {URL_MODIFY_DATA_CUSTOMER} from '../constants/URLs';
import axios from 'axios';
import {User} from './Objects/User';

export const ProfileModel = () => {
  const ModifyUser = async (user: User, token: string): Promise<string> => {
    let response: string = '';

    let body = `{ \"customer\": ${JSON.stringify(user)} }`;

    let url = URL_MODIFY_DATA_CUSTOMER.replace(':customerId', user.id + '');

    await axios({
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: body,
      url: url,
    })
      .then(res => {
        response = JSON.stringify(res.data);
      })
      .catch(error => {
        if (error.response) {
          response = 'Error ' + error.response.data.message;
        }
      });

    return response;
  };

  return {
    ModifyUser,
  };
};
