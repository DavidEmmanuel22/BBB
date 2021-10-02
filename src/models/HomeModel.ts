import { URL_SLIDER1 } from '../constants/URLs';
import { httpClient } from '../utils/httpClient';

export const getSlider1 = async (): Promise<any[]> => {
  const url = URL_SLIDER1;
  const { data }: any = await httpClient.get<any>(url);
  return data;
};
