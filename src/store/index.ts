import { combineReducers, configureStore } from '@reduxjs/toolkit';
import poll from './slices/poll';

const reducer = combineReducers({
  poll,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof reducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];

export default store;
