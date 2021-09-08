import { createSlice } from '@reduxjs/toolkit';
import { RootState} from '../';

interface UIState {
  initialized: boolean;
}

const initialState: UIState = {
  initialized: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    initialize: () => ({
      initialized: true
    })
  }
});

// Actions
export const { initialize } = uiSlice.actions;

// Selectors
export const selectUIInitialized = (state: RootState) => state.ui.initialized;

// Reducer
export default uiSlice.reducer;