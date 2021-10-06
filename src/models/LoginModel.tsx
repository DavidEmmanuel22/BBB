import { URL_Obtain_Data_User_CUSTOMER } from '../constants/URLs';
import { httpClient } from '../utils/httpClient';
import { User } from './Objects/User';

export const LoginModel = () => {
  const GetUserData = async (token: string): Promise<User> => {
    const url = URL_Obtain_Data_User_CUSTOMER;
    const { data }: any = await httpClient.get<any>(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
     
  };

  return {
    GetUserData,
  };
};
