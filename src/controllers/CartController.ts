import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { CartGuestToken, CartToken } from '../constants/generics';
import { CartModel } from '../models/CartModel';
// import { CategoryModel } from '../models/CategoriesModel';
import {
  selectCart,
  selectCartGuest,
  selectTokenCart,
  selectTokenCartGuest,
  setCartGuestToken,
  setCartToken,
} from '../store/slices/cartSlice';
import { useState } from 'react';
import useAuthContext from '../context/AuthContext';
import { showMessage } from 'react-native-flash-message';

export const CartController = () => {
  const dispatch = useDispatch();
  const [loadingCart, setLoadingCart] = useState(false);
  const cartCustomer = useSelector(selectCart);
  const cartGuest = useSelector(selectCartGuest);
  const currentCart = cartCustomer ? cartCustomer : cartGuest;

  const tokenCartCustomer = useSelector(selectTokenCart);
  const tokenCartGuest = useSelector(selectTokenCartGuest);
  const { accessToken } = useAuthContext();
  const { AddToCartCustomer, CreateCartGuest, AddCartGuest, GetCartGuest, CreateCartCustomer, GetCartCustomer } =
    CartModel();
  const checkCartInit = async () => {
    AsyncStorage.getItem(CartGuestToken).then((value) => {
      if (value != null) {
        dispatch(setCartGuestToken(value));
        GetCartGuest(value);
      }
    });
    AsyncStorage.getItem(CartToken).then((value) => {
      if (value != null) {
        dispatch(setCartToken(value));
      }
    });
  };

  const AddToCartGuest = async (sku = '', quantity = 1): Promise<boolean> => {
    setLoadingCart(true);
    let success = false;
    if (tokenCartGuest) {
      //Add to guest cart
      success = await AddCartGuest(sku, quantity, tokenCartGuest!);
      console.log('holiss', success);
      if (success) {
        showMessage({ message: 'El producto se añadió al carrito.', type: 'info', hideOnPress: true, duration: 3000 });
      }
      await GetCartGuest(tokenCartGuest);
    } else {
      const token = await CreateCartGuest();
      success = await AddCartGuest(sku, quantity, token);
      if (success) {
        showMessage({ message: 'El producto se añadió al carrito.', type: 'info', hideOnPress: true, duration: 3000 });
      }
      await GetCartGuest(token);
    }
    setLoadingCart(false);
    return success;
  };

  const AddToCartCustomerAction = async (sku = '', quantity = 1) => {
    if (tokenCartCustomer) {
      AddToCartCustomer(sku, quantity, tokenCartCustomer);
    } else {
      await CreateCartCustomer();
      await GetCartCustomer();
    }
  };
  const AddToCart = async (sku = '', quantity = 1): Promise<boolean> => {
    let success = false;
    if (accessToken) {
      AddToCartCustomerAction(sku, quantity);
    } else {
      success = await AddToCartGuest(sku, quantity);
    }
    return success;
  };

  //Retorno de metodos y variables
  return {
    checkCartInit,
    cartCustomer,
    cartGuest,
    tokenCartCustomer,
    tokenCartGuest,
    AddToCart,
    currentCart,
    loadingCart,
  };
};
