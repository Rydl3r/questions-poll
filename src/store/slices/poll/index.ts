import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUserDataItem, IState } from './types';

const initialState: IState = {
  userData: {},
};

const pollSlice = createSlice({
  initialState,
  name: 'poll',
  reducers: {
    updateUserData: (state, action: PayloadAction<IUserDataItem>) => {
      state.userData[action.payload.dataKey] = action.payload.dataValue;
    },
    resetUserData: (state) => {
      state.userData = {};
    },
  },
});

export const { updateUserData, resetUserData } = pollSlice.actions;

export default pollSlice.reducer;
