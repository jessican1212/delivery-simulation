import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Job {
  name: string;
  cost: number;
  items: number;
  distance: number;
}

const initialState: Array<Job> = []

export const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addJob: (state, action: PayloadAction<Job>) => {
      state.push(action.payload);
    },
    deleteJob: (state, action: PayloadAction<String>) => {
      return state.filter((job) => job.name !== action.payload);
    },
  },
});
export const { addJob, deleteJob } = jobSlice.actions;
export const jobSelector = (state: RootState) => state.jobReducer;
export default jobSlice.reducer;