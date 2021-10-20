import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosRequestConfig } from 'axios';
import { CUSTOMER_ACCESS_TOKEN } from '../context/AuthContext';
import { TokenModel } from '../models/TokenModel';
import { navigate } from './navigations';

export const ADMIN_TOKEN = 'admin_token';

const fetchHelper = async (url = '', options = {}, { useAdminToken = false, useUserToken = false }) => {
  const { GetAdminToken } = TokenModel();

  const fetchOptions: AxiosRequestConfig = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
    url,
    ...options,
  };

  if (useAdminToken) {
    let token: string = await GetAdminToken();
    fetchOptions.headers.Authorization = `Bearer ${token}`;
  }
  if (useUserToken) {
    let token: string = (await AsyncStorage.getItem(CUSTOMER_ACCESS_TOKEN)) || '';
    fetchOptions.headers.Authorization = `Bearer ${token}`;
  }

  if (fetchOptions.method !== 'GET' && fetchOptions.data) {
    fetchOptions.headers['Content-Type'] = 'application/json';
    fetchOptions.data = JSON.stringify(fetchOptions.data);
  }

  return axios(fetchOptions)
    .then((response) => {
      if (response.status >= 400) {
        let error = {
          message: `Bad response from server at ${url} => ${response.status}, ${response.statusText}`,
          url,
          status: response.status,
          statusText: response.statusText,
        };
        if (response.status >= 500) {
          error = {
            message: 'Hubo un problema al procesar tu petición. Por favor intenta nuevamente más tarde.',
            url: url,
            status: response.status,
            statusText: response.statusText,
          };
        }
        return new Promise((resolve, reject) => {
          response.data
            .json()
            .then((message: any) => {
              reject(message);
            })
            .catch(() => {
              reject(error);
            });
        });
      }
      if (response.status === 204) {
        return Promise.resolve('Success');
      }
      return new Promise<any>((resolve) => {
        resolve(response);
      });
    })
    .catch((error) => {
      const statusCode = error?.response?.status;
      if (statusCode === 401 && useAdminToken) {
        GetAdminToken();
      }
      if (statusCode === 401 && useUserToken) {
        navigate('Login');
      }
      return new Promise((resolve, reject) => {
        reject(error?.response);
      });
    });
};

export default fetchHelper;
