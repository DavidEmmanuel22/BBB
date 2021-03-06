import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../';
import { Doc, Items, Value } from '../../models/Objects/Items';

interface SearchState {
  searchText: string;
  searches: Array<string>;
  Objects: Items | null;
  EnterKeyDown: boolean;
  Marcas: Value[] | null;
  marcaClicked: boolean;
  products: Array<Doc>;
}

const initialState: SearchState = {
  searchText: '',
  searches: [],
  Objects: null,
  EnterKeyDown: true,
  Marcas: null,
  marcaClicked: false,
  products: []
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeData: (state, action) => {
      state.searchText = action.payload;
      state.Objects = null;
      state.EnterKeyDown = true;
      state.products = [];
    },
    addSearch: (state, action) => {
      if (action.payload) {
        if (!state.searches.includes(action.payload)) {
          state.searches = state.searches.concat(action.payload);
          AsyncStorage.setItem('searches', JSON.stringify(state.searches));
        }
      }
      state.EnterKeyDown = false;
    },
    addProducts: (state, action) => {
      state.products = state.products.concat(action.payload.newProducts);
    },
    changeItems: (state, action) => {
      state.Objects = action.payload;
    },
    recoverSearches: (state, action) => {
      state.searches = action.payload;
    },
    setMarcas: (state, action) => {
      state.Marcas = action.payload;
    },
    setMarcaClicked: (state, action) => {
      state.marcaClicked = action.payload;
    },
  },
});

// Actions
export const { changeData, addSearch, addProducts, changeItems, recoverSearches, setMarcas, setMarcaClicked } = searchSlice.actions;

// Selectors
export const selectObjects = (state: RootState) => state.search.Objects;
export const selectEnterKeyPressed = (state: RootState) => state.search.EnterKeyDown;
export const selectData = (state: RootState) => state.search.searchText;
export const selectSearches = (state: RootState) => state.search.searches;
export const selectMarcas = (state: RootState) => state.search.Marcas;
export const selectMarcaClicked = (state: RootState) => state.search.marcaClicked;
export const selectProducts = (state: RootState) => state.search.products;

// Reducer
export default searchSlice.reducer;
