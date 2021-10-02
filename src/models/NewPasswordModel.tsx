import axios from 'axios';
import { User } from './Objects/User';
import { URL_MODIFY_PASSWORD_CUSTOMER } from '../constants/URLs';

export const NewPasswordModel = () => {
  const ChangePassword = async (user: User, token: string, oldPassword: string, newPassword: string) => {
    let response: string = '';

    let body = `{
                "currentPassword": "${oldPassword}",
                "newPassword": "${newPassword}"
            }`;

    let url = URL_MODIFY_PASSWORD_CUSTOMER + user.id;

    await axios({
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: body,
      url: url,
    })
      .then((res) => {
        response = JSON.stringify(res.data);
      })
      .catch((error) => {
        if (error.response) {
          response = 'Error ' + error.response.data.message;
        }
      });

    return response;
  };

  return {
    ChangePassword,
  };
};
