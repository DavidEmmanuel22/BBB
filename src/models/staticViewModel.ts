import { AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/URLs';
import { httpClient } from '../utils/httpClient';

export const getStaticData = async (url = ''): Promise<AxiosResponse> => {
  const { data } = await httpClient.get<AxiosResponse>(`${BASE_URL}/${url}`);
  return data;
};
