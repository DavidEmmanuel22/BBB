import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import userReducer from './slices/userSlice';
import uiReducer from './slices/uiSlice';
import categorySlice from './slices/categorySlice';
import product from './slices/productSlice';
import searchSlice from './slices/searchSlice';
import cartSlice from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
    category: categorySlice,
    product,
    search: searchSlice,
    cart: cartSlice,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
