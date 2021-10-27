import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { CartGuestToken, CartToken } from '../constants/generics';
import {
  URL_ADD_CART_CUSTOMER,
  URL_ADD_CART_GUEST,
  URL_CART,
  URL_CART_CUSTOMER,
  URL_GET_CART,
  URL_GET_CART_CUSTOMER,
} from '../constants/URLs';
import {
  setCartGuestToken,
  setCartGuestInformation,
  setCartInformation,
  setCartToken,
} from '../store/slices/cartSlice';
import fetchHelper from '../utils/fetchHelper';

export const CartModel = () => {
  const dispatch = useDispatch();

  const CreateCartGuest = async (): Promise<string> => {
    let createdCart: string = '';

    await axios({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      url: URL_CART,
    })
      .then(({ data }) => {
        dispatch(setCartGuestToken(data));
        AsyncStorage.setItem(CartGuestToken, data);
        createdCart = data;
      })
      .catch(() => {
        createdCart = '';
      });
    return createdCart;
  };
  const GetCartGuest = async (token = ''): Promise<boolean> => {
    let createdCart: boolean = false;
    await axios({
      method: 'GET',
      headers: { 'content-type': 'application/json' },
      url: URL_GET_CART(token),
    })
      .then(({ data }) => {
        dispatch(setCartGuestInformation(data));
        createdCart = true;
      })
      .catch(() => {
        createdCart = false;
      });
    return createdCart;
  };
  const CreateCartCustomer = async (): Promise<boolean> => {
    let createdCart: boolean = false;
    const cartCreated = await fetchHelper(URL_CART_CUSTOMER, { method: 'POST' }, { useUserToken: true });

    if (cartCreated.status === 200) {
      dispatch(setCartToken(cartCreated.data));
      await AsyncStorage.setItem(CartToken, cartCreated.data.toString());
      createdCart = true;
    }
    return createdCart;
  };
  const GetCartCustomer = async (): Promise<boolean> => {
    let createdCart: boolean = false;
    const cartCreated = await fetchHelper(URL_GET_CART_CUSTOMER, { method: 'GET' }, { useUserToken: true });
    if (cartCreated.status === 200) {
      dispatch(setCartInformation(cartCreated.data));

      createdCart = true;
    }
    return createdCart;
  };
  const AddToCartCustomer = async (sku = '', quantity = 1, id = ''): Promise<boolean> => {
    let createdCart: boolean = false;
    const body = {
      cart_item: {
        sku,
        qty: quantity,
        quote_id: id,
      },
    };
    const addSuccess = await fetchHelper(URL_ADD_CART_CUSTOMER, { data: body, method: 'POST' }, { useUserToken: true });
    if (addSuccess.status === 200) {
      createdCart = true;
    }
    return createdCart;
  };
  const AddCartGuest = async (sku = '', quantity = 1, token = ''): Promise<boolean> => {
    let addToCart: boolean = false;
    const body = {
      cart_item: {
        sku,
        qty: quantity,
      },
    };
    await axios({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      url: URL_ADD_CART_GUEST(token),
      data: body,
    })
      .then(({}) => {
        addToCart = true;
      })
      .catch(() => {
        addToCart = false;
      });
    return addToCart;
  };

  return {
    CreateCartGuest,
    GetCartGuest,
    AddCartGuest,
    CreateCartCustomer,
    AddToCartCustomer,
    GetCartCustomer,
  };
};
