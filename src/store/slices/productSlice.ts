import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../';
import { ProductDetail } from '../../models/Objects/Product';

interface Product {
  productDetail: ProductDetail;
}

const initialState: Product = {
  productDetail: {
    custom_attributes: [],
  },
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductDetail(state, action: PayloadAction<ProductDetail>) {
      state.productDetail = action.payload;
    },
  },
});

// Actions
export const { setProductDetail } = productSlice.actions;

// Selectors
export const productDetail = (state: RootState) => state.product.productDetail;

// Reducer
export default productSlice.reducer;
