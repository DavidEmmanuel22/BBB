import axios from 'axios';
import { URL_DIRECTIONS } from '../constants/URLs';
import { TokenModel } from '../models/TokenModel';
import useAuthContext from '../context/AuthContext';
import { Directions } from './Objects/Directions';

export const DirectionsModel = () => {
  const { GetAdminToken } = TokenModel();
  const { user }: any = useAuthContext();

  const getDirections = async (): Promise<Directions> => {
    let token: string = await GetAdminToken();
    let idUser: number = user.id;
    let direction: Directions = {};

    await axios({
      method: 'GET',
      headers: { 'content-type': 'application/json', Authorization: `Bearer ${token}` },
      url: URL_DIRECTIONS(idUser),
    })
      .then(({ data }) => {
        direction = data;
      })
      .catch((error) => {
        console.log('error', error);
      });
    return direction;
  };

  return {
    getDirections,
  };
};
