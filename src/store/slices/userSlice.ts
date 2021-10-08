import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../';
import { User } from '../../models/Objects/User';

interface UserState {
  data: User;
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
    changeUser: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Actions
export const {} = userSlice.actions;

// Selectors
export const selectUser = (state: RootState) => state.user.data;

// Reducer
export default userSlice.reducer;
