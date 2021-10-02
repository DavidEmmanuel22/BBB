import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../';

interface UIState {
  initialized: boolean;
  homeSelect: Number;
}

const initialState: UIState = {
  initialized: false,
  homeSelect: 0,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    changeSelect(state, action: PayloadAction<Number>) {
      state.homeSelect = action.payload;
    },
    initialize(state) {
      state.initialized = true;
    },
  },
});

// Actions
export const { initialize, changeSelect } = uiSlice.actions;

// Selectors
export const selectUIInitialized = (state: RootState) => state.ui.initialized;
export const selectUIISelected = (state: RootState) => state.ui.homeSelect;

// Reducer
export default uiSlice.reducer;
