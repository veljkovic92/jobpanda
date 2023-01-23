import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const jobsSlice = createSlice({
  name: "jobsSlice",
  initialState: { anyJobs: [], specificJobs: [] },
  reducers: {
    addAnyJobs(state, action) {
      state.anyJobs = action.payload;
    },
    addSpecificJobs(state, action) {
      state.specificJobs = action.payload;
    },
  },
});

export const jobsSliceActions = jobsSlice.actions;

export default jobsSlice;
