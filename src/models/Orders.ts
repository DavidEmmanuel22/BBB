import {URL_ORDERS} from '../constants/URLs';
import {httpClient} from '../utils/httpClient';
import {TokenModel} from './TokenModel';

const {ObtenerAdminToken} = TokenModel();

export const getUserOrders = async (userId: string): Promise<any[]> => {
  const token = await ObtenerAdminToken();
  const url = `${URL_ORDERS}/?searchCriteria[filterGroups][0][filters][0][field]=customer_id&searchCriteria[filterGroups][0][filters][0][${userId}]=2&searchCriteria[filterGroups][0][filters][0][conditionType]=eq`;
  const {data}: any = await httpClient.get<any>(url, {
    headers: {Authorization: `Bearer ${token}`},
  });
  return data;
};
