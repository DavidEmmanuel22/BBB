import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../';
import {Categories} from '../../models/Objects/Categories';
interface CategoryState {
  categories: Array<Categories>;
}

const initialState: CategoryState = {
  categories: [],
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<Array<Categories>>) {
      state.categories = action.payload;
    },
  },
});

// Actions
export const {setCategories} = uiSlice.actions;

// Selectors
export const selectCategory = (state: RootState) => state.category.categories;

// Reducer
export default uiSlice.reducer;
