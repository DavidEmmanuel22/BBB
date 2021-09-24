import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../';

interface UIState {
  initialized: boolean;
  homeSelect: string;
}

const initialState: UIState = {
  initialized: false,
  homeSelect: 'Destacados',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    initialize: () => ({
      initialized: true,
    }),
    changeSelect(state, action: PayloadAction<string>) {
      state.homeSelect = action.payload;
    },
  },
});

// Actions
export const {initialize, changeSelect} = uiSlice.actions;

// Selectors
export const selectUIInitialized = (state: RootState) => state.ui.initialized;
export const selectUIISelected = (state: RootState) => state.ui.homeSelect;

// Reducer
export default uiSlice.reducer;
