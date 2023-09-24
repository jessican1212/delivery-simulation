import { configureStore } from '@reduxjs/toolkit';
import jobReducer from './features/jobSlice';

export const store = configureStore({
  reducer: {
    jobReducer
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
