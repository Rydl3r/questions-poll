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
      // using any to avoid type error that happens when using Partial utility type on store objects.
      console.log('action', action.payload);
      state.userData[action.payload.dataKey] = action.payload.dataValue as any;
    },
    resetUserData: (state) => {
      state.userData = {};
    },
  },
});

export const { updateUserData, resetUserData } = pollSlice.actions;

export default pollSlice.reducer;
