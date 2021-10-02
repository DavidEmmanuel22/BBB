import { URL_ORDERS } from '../constants/URLs';
import { httpClient } from '../utils/httpClient';

export const getUserOrders = async (userId: string, adminToken: string): Promise<any[]> => {
  const url = `${URL_ORDERS}/?searchCriteria[filterGroups][0][filters][0][field]=customer_id&searchCriteria[filterGroups][0][filters][0][value]=${userId}&searchCriteria[filterGroups][0][filters][0][conditionType]=eq`;
  const { data }: any = await httpClient.get<any>(url, {
    headers: { Authorization: `Bearer ${adminToken}` },
  });
  return data;
};
