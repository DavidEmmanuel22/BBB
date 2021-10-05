import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { TokenModel } from '../models/TokenModel';
import { LoginModel } from '../models/LoginModel';

export type AuthContextProps = {
  signIn: (authType: any, params?: any) => Promise<void>;
  signOut: () => void;
  user: any | null;
  accessToken?: string;
  isAuthenticated?: boolean;
};

//Context
export const AuthContext = createContext<Partial<AuthContextProps>>({});

type AuthContextProviderProps = {
  children: ReactNode;
};

const { GetCustomerToken } = TokenModel();
const { GetUserData } = LoginModel();

//Provider
export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const bootstrapAsync = async () => {
      const token = await AsyncStorage.getItem('accessToken');
      const userRaw = await AsyncStorage.getItem('user');

      try {
        if (userRaw !== null) {
          const parsedUser = JSON.parse(userRaw);
          setUser(parsedUser);
        }
      } catch (e) {
        console.error('Error: ', e);
        // Parse user failed
      }

      setAccessToken(token);
    };
    bootstrapAsync();
  }, []);

  const authContext: any = useMemo(
    () => ({
      signIn: async (params?: any) => {
        const token = await GetCustomerToken({ username: params?.email, password: params?.password });
        if (token) {
          await AsyncStorage.setItem('accessToken', token);
          const userData = await GetUserData(token);
          console.log(userData);
          if (userData?.firstname || userData?.lastname) {
            await AsyncStorage.setItem('user', JSON.stringify(userData));
            setUser(userData);
          }
          setAccessToken(token);
        }
        if (token.includes('Error')) {
          await AsyncStorage.clear();
          setAccessToken(null);
          setUser(null);
        }
      },
      signOut: async () => {
        await AsyncStorage.clear();
        setAccessToken(null);
        setUser(null);
      },
      isAuthenticated: accessToken !== null,
      accessToken,
      user,
    }),
    [accessToken, user]
  );

  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};

export function useAuthContext() {
  const context = useContext(AuthContext) as AuthContextProps;

  if (!context) {
    console.error('Error deploying Auth Context!!!');
  }

  return context;
}

export default useAuthContext;
