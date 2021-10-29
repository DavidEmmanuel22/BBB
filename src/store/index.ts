import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';

import userReducer from './slices/userSlice';
import uiReducer from './slices/uiSlice';
import categorySlice from './slices/categorySlice';
import product from './slices/productSlice';
import searchSlice from './slices/searchSlice';
import cartSlice from './slices/cartSlice';
import notificationsSlice from './slices/notificationsSlice';
import outletSlice from './slices/outletSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
    category: categorySlice,
    product,
    search: searchSlice,
    cart: cartSlice,
    notifications: notificationsSlice,
    outlet: outletSlice,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
