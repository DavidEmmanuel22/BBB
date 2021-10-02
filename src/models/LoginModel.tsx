import axios from 'axios';
import { URL_Obtain_Data_User_CUSTOMER } from '../constants/URLs';
import { Convert, User } from './Objects/User';

export const LoginModel = () => {
  const GetUserData = async (token: string): Promise<User> => {
    let user: any;

    await axios({
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
      url: URL_Obtain_Data_User_CUSTOMER,
    })
      .then((res) => {
        user = Convert.toUsuario(JSON.stringify(res.data));
      })
      .catch((error) => {
        user = 'Error ' + error;
      });

    return user;
  };

  return {
    GetUserData,
  };
};
