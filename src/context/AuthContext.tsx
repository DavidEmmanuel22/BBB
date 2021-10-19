import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginModel } from '../models/LoginModel';
import { useMutation } from 'react-query';
import { User } from '../models/Objects/User';

export type AuthContextProps = {
  signIn: (authType: any, params?: any) => Promise<void>;
  signOut: () => void;
  changeDataUser: () => void;
  user: User | null;
  accessToken?: string;
  isLoadingGetCustomerToken: boolean;
  isLoadingGetUserData: boolean;
  isAuthenticated?: boolean;
};

//Context
export const AuthContext = createContext<Partial<AuthContextProps>>({});

type AuthContextProviderProps = {
  children: ReactNode;
};

const { GetUserData } = LoginModel();

export const USER = 'user';
export const CUSTOMER_ACCESS_TOKEN = 'customerAccessToken';

//Provider
export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const { mutate: getUserData, isLoading: isLoadingGetUserData } = useMutation('userData', GetUserData, {
    onSuccess: async (data: any) => {
      if (data?.firstname || data?.lastname) {
        await AsyncStorage.setItem(USER, JSON.stringify(data));
        setUser(data);
      }
    },
    onError: () => {
      setUser(null);
    },
  });

  useEffect(() => {
    if (accessToken && accessToken != null) {
      getUserData(accessToken);
    }
  }, [accessToken, getUserData]);

  useEffect(() => {
    const bootstrapAsync = async () => {
      const token = await AsyncStorage.getItem(CUSTOMER_ACCESS_TOKEN);
      const userRaw = await AsyncStorage.getItem(USER);

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
      signIn: async (userData: User, token: string) => {
        await AsyncStorage.setItem('customerAccessToken', token);
        await AsyncStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
        setAccessToken(token);
      },
      changeDataUser: async (UserModified: User) => {
        await AsyncStorage.setItem('user', JSON.stringify(UserModified));
      },
      signOut: async () => {
        await AsyncStorage.clear();
        setAccessToken(null);
        setUser(null);
      },
      isAuthenticated: accessToken !== null,
      accessToken,
      user,
      isLoadingGetUserData,
    }),
    [accessToken, user, isLoadingGetUserData]
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
