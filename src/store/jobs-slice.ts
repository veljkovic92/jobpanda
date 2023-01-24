import { createSlice } from "@reduxjs/toolkit";
import React from "react";

export type IndustryItem = {
  id: number;
  name: string;
  phoneNumber: string;
  rank: number;
  city: string;
  country: string;
  continent: string;
  domain: string;
  logo: string;
  desc: string;
  descriptionShort: string;
  industry: string;
  experienceWanted: number;
  totalEmployees: string;
  totalEmployeesExact: number;
  yearFounded: number;
};

const anyJobs: IndustryItem[] = [];
const specificJobs: IndustryItem[] = [];

const initialState = {anyJobs, specificJobs}

const jobsSlice = createSlice({
  name: "jobsSlice",
  initialState,
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
