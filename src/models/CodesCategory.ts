import axios from 'axios';
import { URL_ATRIBUTES_CATEGORY_HARD } from '../constants/URLs';
import { codesByCategory } from './Objects/CodesByCategory';

export const CodesCategory = () => {
  const getCodesCategory = async (id: number): Promise<codesByCategory> => {
    let codes: codesByCategory = {};

    await axios({
      method: 'GET',
      headers: { 'content-type': 'application/json' },
      url: URL_ATRIBUTES_CATEGORY_HARD(id),
    })
      .then(({ data }) => {
        codes = data;
      })
      .catch((error) => {
        console.log('error', error);
      });
    return codes;
  };

  return {
    getCodesCategory,
  };
};
