import { BASE_URL_BARILLIANCE } from '../constants/URLs';
import { httpClient } from '../utils/httpClient';

export const getBarillianceRecomendations = async (): Promise<any[]> => {
  /*the userId is dymanic -> make this fix*/
  const url = `${BASE_URL_BARILLIANCE}?pageType=H&siteId=53351&userId=1111111111182&token=b39f429f318af61c9e04356e2f9dfa32&version=1`;
  const { data }: any = await httpClient.get<any>(url);
  return data;
};

export const getSKURecomendations = async ({ ids }: any): Promise<any[]> => {
  const url = `/rest/default/V1/products?searchCriteria[filter_groups][0][filters][0][field]=sku&searchCriteria[filter_groups][0][filters][0][value]=${ids}&searchCriteria[filter_groups][0][filters][0][condition_type]=in`;
  const { data }: any = await httpClient.get<any>(url);
  return data;
};
