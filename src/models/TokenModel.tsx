import axios from 'axios';
import { URL_LOGIN_ADMIN, URL_LOGIN_CUSTOMER } from '../constants/URLs';

export const TokenModel = () => {
  const GetAdminToken = async (): Promise<string> => {
    let token: string = '';

    const BodyData = {
      username: 'ricardo.lopez',
      password: 'MiRich.080921',
    };

    await axios({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      data: JSON.stringify(BodyData),
      url: URL_LOGIN_ADMIN,
    })
      .then((res) => {
        token = res.data;
      })
      .catch((error) => {
        token = 'Error ' + error;
      });

    return token;
  };

  const GetCustomerToken = async (email: string, password: string): Promise<string> => {
    let token: string = '';

    const BodyData = {
      username: email,
      password: password,
    };

    await axios({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      data: JSON.stringify(BodyData),
      url: URL_LOGIN_CUSTOMER,
    })
      .then((res) => {
        token = res.data;
      })
      .catch((error) => {
        token = 'Error ' + error;
      });

    return token;
  };

  return {
    GetAdminToken,
    GetCustomerToken,
  };
};
