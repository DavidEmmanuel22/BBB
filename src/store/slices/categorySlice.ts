import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../';
import { Categories } from '../../models/Objects/Categories';
import { ProductByCategory } from '../../models/Objects/ProductByCategory';
interface CategoryState {
  categories: Array<Categories>;
  products: Array<ProductByCategory>;
  totalProducts: number;
}

const initialState: CategoryState = {
  categories: [],
  products: [],
  totalProducts: 0,
};

interface PayloadProducts {
  items: Array<ProductByCategory>;
  total: number;
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<Array<Categories>>) {
      state.categories = action.payload;
    },
    setProducts(state, action: PayloadAction<PayloadProducts>) {
      state.products = action.payload.items;
      state.totalProducts = action.payload.total;
    },
    loadMore(state, action: PayloadAction<PayloadProducts>) {
      state.products = state.products.concat(action.payload.items);
    },
  },
});

// Actions
export const { setCategories, setProducts, loadMore } = uiSlice.actions;

// Selectors
export const selectCategory = (state: RootState) => state.category.categories;
export const selectProducts = (state: RootState) => state.category.products;
export const selectTotalProducts = (state: RootState) => state.category.totalProducts;

// Reducer
export default uiSlice.reducer;
