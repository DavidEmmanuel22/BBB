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

export const CartController = () => {
  const dispatch = useDispatch();

  const cartCustomer = useSelector(selectCart);
  const cartGuest = useSelector(selectCartGuest);
  const tokenCartCustomer = useSelector(selectTokenCart);
  const tokenCartGuest = useSelector(selectTokenCartGuest);
  const { CreateCartGuest } = CartModel();
  const checkCartInit = async () => {
    AsyncStorage.getItem(CartGuestToken).then((value) => {
      if (value != null) {
        dispatch(setCartGuestToken(value));
      }
    });
    AsyncStorage.getItem(CartToken).then((value) => {
      if (value != null) {
        dispatch(setCartToken(value));
      }
    });
  };
  const initCart = () => {
    CreateCartGuest();
  };

  //Retorno de metodos y variables
  return {
    checkCartInit,
    initCart,
    cartCustomer,
    cartGuest,
    tokenCartCustomer,
    tokenCartGuest,
  };
};
