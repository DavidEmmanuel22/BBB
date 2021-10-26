import { BASE_INDEX_V1 } from '../constants/URLs';
import { httpClient } from '../utils/httpClient';

type CommmentProp = {
  email: String;
  name: String;
  phone: String;
  comment: String;
  adminToken: String;
};

export const createComment = async (payload: CommmentProp): Promise<any[]> => {
  const url = `${BASE_INDEX_V1}contactus?contactForm[name]=${payload.name}&contactForm[email]=${payload.email}&contactForm[telephone]=${payload.phone}&contactForm[comment]=${payload.comment}`;
  console.log(payload.adminToken);
  const { data }: any = await httpClient.post<any>(url, {
    headers: { Authorization: `Bearer ${payload.adminToken}` },
  });
  return data;
};
