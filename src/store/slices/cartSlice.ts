import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../';

interface UIState {}

const initialState: UIState = {};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

// Actions
// export const {  } = cartSlice.actions;

// Selectors

// Reducer
export default cartSlice.reducer;
