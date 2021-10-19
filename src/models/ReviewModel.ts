import { BASE_INDEX_V1 } from '../constants/URLs';
import { httpClient } from '../utils/httpClient';

export const getReviews = async (customerId: string, adminToken: string): Promise<any[]> => {
  const url = `${BASE_INDEX_V1}reviews/?searchCriteria[filterGroups][0][filters][0][field]=customer_id&searchCriteria[filterGroups][0][filters][0][value]=${customerId}`;
  const { data }: any = await httpClient.get<any>(url, {
    headers: { Authorization: `Bearer ${adminToken}` },
  });
  return data;
};
