import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../';
import { Categories } from '../../models/Objects/Categories';
import { ProductByCategory } from '../../models/Objects/ProductByCategory';
interface OutletState {
  outlet: Array<Categories>;
  products: Array<ProductByCategory>;
  totalProducts: number;
}

const initialState: OutletState = {
  outlet: [],
  products: [],
  totalProducts: 0,
};

interface PayloadProducts {
  items: Array<ProductByCategory>;
  total: number;
}

export const outletSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setOutlet(state, action: PayloadAction<Array<Categories>>) {
      state.outlet = action.payload;
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
export const { setOutlet, setProducts, loadMore } = outletSlice.actions;

// Selectors
export const selectOutlet = (state: RootState) => state.outlet.outlet;
export const selectOutletProducts = (state: RootState) => state.outlet.products;
export const selectTotalOutletProducts = (state: RootState) => state.outlet.totalProducts;

// Reducer
export default outletSlice.reducer;
