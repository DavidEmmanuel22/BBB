import { SEARCH_ITEMS } from '../constants/URLs';
import axios from 'axios';

export const SearchModel = () => {
  const findObjects = async (email: string, text: string, amount: string, start: string): Promise<string> => {
    let response: string = '';

    let url = SEARCH_ITEMS;
    url = url.replace('{query}', text);
    url = url.replace('{userId}', email);
    url = url.replace('{sessionId}', '');
    url = url.replace('{rows}', amount);
    url = url.replace('{start}', start);

    console.log(url);

    await axios({
      method: 'GET',
      url: url,
    })
      .then((res) => {
        response = JSON.stringify(res.data);
      })
      .catch((error) => {
        if (error.response) {
          response = 'Error ' + error.response.data.message;
        }
      });

    return response;
  };

  return {
    findObjects,
  };
};
