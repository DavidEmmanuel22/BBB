import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../';
import { CodesColors } from '../../models/Objects/CodesColors';

interface CodesColor {
  codes: CodesColors;
  sizeCode: CodesColors;
  materialCode: CodesColors;
}

const initialState: CodesColor = {
  codes: {},
  sizeCode: {},
  materialCode: {},
};

export const CodesColorsSlice = createSlice({
  name: 'codescolors',
  initialState,
  reducers: {
    setCodes(state, action: PayloadAction<CodesColors>) {
      state.codes = action.payload;
    },
    setSize(state, action: PayloadAction<CodesColors>) {
      state.sizeCode = action.payload;
    },
    setMaterial(state, action: PayloadAction<CodesColors>) {
      state.materialCode = action.payload;
    },
  },
});

// Actions
export const { setCodes, setSize, setMaterial } = CodesColorsSlice.actions;

// Selectors
export const codes = (state: RootState) => state.codesColors.codes;
export const sizeCode = (state: RootState) => state.codesColors.sizeCode;
export const materialCode = (state: RootState) => state.codesColors.materialCode;

// Reducer
export default CodesColorsSlice.reducer;
