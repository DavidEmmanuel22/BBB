import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState} from '../';

interface UserState {
  data: object;
  status: 'idle' | 'loading' | 'success' | 'failed';
}

const initialState: UserState = {
  data: {},
  status: 'idle',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  }
});

// Actions
export const {  } = userSlice.actions;

// Selectors
export const selectUser = (state: RootState) => state.user.data;

// Reducer
export default userSlice.reducer;