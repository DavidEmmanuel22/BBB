import axios from 'axios';
import { useDispatch } from 'react-redux';
import { URL_CART } from '../constants/URLs';
import { setCartGuestToken } from '../store/slices/cartSlice';

export const CartModel = () => {
  const dispatch = useDispatch();

  const CreateCartGuest = async (): Promise<boolean> => {
    let createdCart: boolean = false;

    await axios({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      url: URL_CART,
    })
      .then(({ data }) => {
        console.log('data', data);
        dispatch(setCartGuestToken(data));
        createdCart = true;
      })
      .catch((error) => {
        console.log('error', error);
        createdCart = false;
      });
    return createdCart;
  };

  return {
    CreateCartGuest,
  };
};
