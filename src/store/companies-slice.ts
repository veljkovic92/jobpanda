import { createSlice } from "@reduxjs/toolkit";

const companiesSlice = createSlice({
  name: "companies",
  initialState: {
    companies: null
  },
  reducers: {
    addCompanies(state, action) {
      state.companies = action.payload;
    }
  }
})

export const companiesActions = companiesSlice.actions;

export default companiesSlice;