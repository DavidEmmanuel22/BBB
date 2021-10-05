import { URL_LOGIN_ADMIN, URL_LOGIN_CUSTOMER } from '../constants/URLs';
import { httpClient } from '../utils/httpClient';

type CustomerTokenProps = {
  username: string;
  password: string;
};

export const TokenModel = () => {
  const GetAdminToken = async (): Promise<any> => {
    const params = {
      username: 'ricardo.lopez',
      password: 'MiRich.080921',
    };
    const url = URL_LOGIN_ADMIN;
    const { data }: any = await httpClient.post<any>(url, params);
    return data;
  };

  const GetCustomerToken = async (params: CustomerTokenProps): Promise<any> => {
    const url = URL_LOGIN_CUSTOMER;
    const { data }: any = await httpClient.post<any>(url, params);
    return data;
  };

  return {
    GetAdminToken,
    GetCustomerToken,
  };
};
