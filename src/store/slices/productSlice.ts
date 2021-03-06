import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../';
import { ProductDetail, ProductReview } from '../../models/Objects/Product';

interface Product {
  productDetail: ProductDetail;
  productReviews: Array<ProductReview>;
}

const initialState: Product = {
  productDetail: {
    custom_attributes: [],
  },
  productReviews: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductDetail(state, action: PayloadAction<ProductDetail>) {
      state.productDetail = action.payload;
    },
    setProductReview(state, action: PayloadAction<Array<ProductReview>>) {
      state.productReviews = action.payload;
    },
  },
});

// Actions
export const { setProductDetail, setProductReview } = productSlice.actions;

// Selectors
export const productDetail = (state: RootState) => state.product.productDetail;
export const productReviews = (state: RootState) => state.product.productReviews;

// Reducer
export default productSlice.reducer;
