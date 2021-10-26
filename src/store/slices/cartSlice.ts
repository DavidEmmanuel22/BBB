import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../';
import { CartObject } from '../../models/Objects/Cart';

interface Cart {
  tokenCartGuest: string | null;
  cartGuestDetail: CartObject | null;
  tokenCart: string | null;
  cartDetail: CartObject | null;
}

const initialState: Cart = {
  tokenCartGuest: null,
  cartGuestDetail: null,
  tokenCart: null,
  cartDetail: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartGuestToken(state, action: PayloadAction<string>) {
      state.tokenCartGuest = action.payload;
    },
    setCartGuestInformation(state, action: PayloadAction<CartObject>) {
      state.cartGuestDetail = action.payload;
    },
    setCartToken(state, action: PayloadAction<string>) {
      state.tokenCart = action.payload;
    },
    setCartInformation(state, action: PayloadAction<CartObject>) {
      state.cartDetail = action.payload;
    },
  },
});

// Actions
export const { setCartGuestToken, setCartGuestInformation, setCartInformation, setCartToken } = cartSlice.actions;

// Selectors
export const selectTokenCartGuest = (state: RootState) => state.cart.tokenCartGuest;
export const selectCartGuest = (state: RootState) => state.cart.cartGuestDetail;
export const selectTokenCart = (state: RootState) => state.cart.tokenCart;
export const selectCart = (state: RootState) => state.cart.cartDetail;

// Reducer
export default cartSlice.reducer;
