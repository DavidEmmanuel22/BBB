import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../';

interface UIState {
  initialized: boolean;
  homeSelect: Number;
  titleHeader: string;
  subTitleHeader: string;
}

const initialState: UIState = {
  initialized: false,
  homeSelect: 0,
  titleHeader: '',
  subTitleHeader: '',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    changeSelect(state, action: PayloadAction<Number>) {
      state.homeSelect = action.payload;
    },
    changeTitleHeader(state, action: PayloadAction<string>) {
      state.titleHeader = action.payload;
    },
    changeSubTitleHeader(state, action: PayloadAction<string>) {
      state.subTitleHeader = action.payload;
    },
    initialize(state) {
      state.initialized = true;
    },
  },
});

// Actions
export const { initialize, changeSelect, changeSubTitleHeader, changeTitleHeader } = uiSlice.actions;

// Selectors
export const selectUIInitialized = (state: RootState) => state.ui.initialized;
export const selectUIISelected = (state: RootState) => state.ui.homeSelect;
export const selectUITitleHeader = (state: RootState) => state.ui.titleHeader;
export const selectUISubTitleHeader = (state: RootState) => state.ui.subTitleHeader;

// Reducer
export default uiSlice.reducer;
