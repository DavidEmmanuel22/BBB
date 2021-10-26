import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { CartGuestToken } from '../constants/generics';
import { URL_ADD_CART_GUEST, URL_CART, URL_GET_CART } from '../constants/URLs';
import { setCartGuestToken, setCartGuestInformation } from '../store/slices/cartSlice';

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
  };
};
