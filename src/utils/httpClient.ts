import axios from 'axios';
import { BASE_URL } from '../constants/URLs';

export const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'content-type': 'application/json',
  },
});
