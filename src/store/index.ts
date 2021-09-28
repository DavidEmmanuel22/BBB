import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';

import userReducer from './slices/userSlice';
import uiReducer from './slices/uiSlice';
import categorySlice from './slices/categorySlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
    category: categorySlice,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
