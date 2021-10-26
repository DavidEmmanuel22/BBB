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
export const CartController = () => {
  const dispatch = useDispatch();
  const [loadingCart, setLoadingCart] = useState(false);
  const cartCustomer = useSelector(selectCart);
  const cartGuest = useSelector(selectCartGuest);
  const currentCart = cartCustomer ? cartCustomer : cartGuest;
  const tokenCartCustomer = useSelector(selectTokenCart);
  const tokenCartGuest = useSelector(selectTokenCartGuest);

  const { CreateCartGuest, AddCartGuest, GetCartGuest } = CartModel();
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

  const AddToCart = async (sku = '', quantity = 1): Promise<boolean> => {
    setLoadingCart(true);
    let success = false;
    if (tokenCartCustomer) {
      // Add to customer cart
    } else if (tokenCartGuest) {
      //Add to guest cart
      success = await AddCartGuest(sku, quantity, tokenCartGuest!);
      await GetCartGuest(tokenCartGuest);
    } else {
      const token = await CreateCartGuest();
      success = await AddCartGuest(sku, quantity, token);
      await GetCartGuest(token);
    }
    setLoadingCart(false);
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
